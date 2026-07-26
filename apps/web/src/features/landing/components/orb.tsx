"use client";

import { cn } from "@runway/ui/lib/utils";
import { Mesh, Program, Renderer, Triangle, Vec3 } from "ogl";
import { useEffect, useRef } from "react";

// WebGL orb with hover distortion, adapted from React Bits' <Orb />
// (https://reactbits.dev — MIT, see NOTICE). Shaders and scene setup live at
// module scope so the component stays a thin lifecycle wrapper; the whole
// scene is rebuilt when a prop changes, which only happens on theme switches.

const VERTEX_SHADER = /* glsl */ `
  precision highp float;
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform float iTime;
  uniform vec3 iResolution;
  uniform float hue;
  uniform float hover;
  uniform float rot;
  uniform float hoverIntensity;
  uniform vec3 backgroundColor;
  varying vec2 vUv;

  vec3 rgb2yiq(vec3 c) {
    float y = dot(c, vec3(0.299, 0.587, 0.114));
    float i = dot(c, vec3(0.596, -0.274, -0.322));
    float q = dot(c, vec3(0.211, -0.523, 0.312));
    return vec3(y, i, q);
  }

  vec3 yiq2rgb(vec3 c) {
    float r = c.x + 0.956 * c.y + 0.621 * c.z;
    float g = c.x - 0.272 * c.y - 0.647 * c.z;
    float b = c.x - 1.106 * c.y + 1.703 * c.z;
    return vec3(r, g, b);
  }

  vec3 adjustHue(vec3 color, float hueDeg) {
    float hueRad = hueDeg * 3.14159265 / 180.0;
    vec3 yiq = rgb2yiq(color);
    float cosA = cos(hueRad);
    float sinA = sin(hueRad);
    float i = yiq.y * cosA - yiq.z * sinA;
    float q = yiq.y * sinA + yiq.z * cosA;
    yiq.y = i;
    yiq.z = q;
    return yiq2rgb(yiq);
  }

  vec3 hash33(vec3 p3) {
    p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
    p3 += dot(p3, p3.yxz + 19.19);
    return -1.0 + 2.0 * fract(vec3(
      p3.x + p3.y,
      p3.x + p3.z,
      p3.y + p3.z
    ) * p3.zyx);
  }

  float snoise3(vec3 p) {
    const float K1 = 0.333333333;
    const float K2 = 0.166666667;
    vec3 i = floor(p + (p.x + p.y + p.z) * K1);
    vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
    vec3 e = step(vec3(0.0), d0 - d0.yzx);
    vec3 i1 = e * (1.0 - e.zxy);
    vec3 i2 = 1.0 - e.zxy * (1.0 - e);
    vec3 d1 = d0 - (i1 - K2);
    vec3 d2 = d0 - (i2 - K1);
    vec3 d3 = d0 - 0.5;
    vec4 h = max(0.6 - vec4(
      dot(d0, d0),
      dot(d1, d1),
      dot(d2, d2),
      dot(d3, d3)
    ), 0.0);
    vec4 n = h * h * h * h * vec4(
      dot(d0, hash33(i)),
      dot(d1, hash33(i + i1)),
      dot(d2, hash33(i + i2)),
      dot(d3, hash33(i + 1.0))
    );
    return dot(vec4(31.316), n);
  }

  vec4 extractAlpha(vec3 colorIn) {
    float a = max(max(colorIn.r, colorIn.g), colorIn.b);
    return vec4(colorIn.rgb / (a + 1e-5), a);
  }

  const vec3 baseColor1 = vec3(0.611765, 0.262745, 0.996078);
  const vec3 baseColor2 = vec3(0.298039, 0.760784, 0.913725);
  const vec3 baseColor3 = vec3(0.062745, 0.078431, 0.600000);
  const float innerRadius = 0.6;
  const float noiseScale = 0.65;

  float light1(float intensity, float attenuation, float dist) {
    return intensity / (1.0 + dist * attenuation);
  }
  float light2(float intensity, float attenuation, float dist) {
    return intensity / (1.0 + dist * dist * attenuation);
  }

  vec4 draw(vec2 uv) {
    vec3 color1 = adjustHue(baseColor1, hue);
    vec3 color2 = adjustHue(baseColor2, hue);
    vec3 color3 = adjustHue(baseColor3, hue);

    float ang = atan(uv.y, uv.x);
    float len = length(uv);
    float invLen = len > 0.0 ? 1.0 / len : 0.0;

    float bgLuminance = dot(backgroundColor, vec3(0.299, 0.587, 0.114));

    float n0 = snoise3(vec3(uv * noiseScale, iTime * 0.5)) * 0.5 + 0.5;
    float r0 = mix(mix(innerRadius, 1.0, 0.4), mix(innerRadius, 1.0, 0.6), n0);
    float d0 = distance(uv, (r0 * invLen) * uv);
    float v0 = light1(1.0, 10.0, d0);

    v0 *= smoothstep(r0 * 1.05, r0, len);
    float innerFade = smoothstep(r0 * 0.8, r0 * 0.95, len);
    v0 *= mix(innerFade, 1.0, bgLuminance * 0.7);
    float cl = cos(ang + iTime * 2.0) * 0.5 + 0.5;

    float a = iTime * -1.0;
    vec2 pos = vec2(cos(a), sin(a)) * r0;
    float d = distance(uv, pos);
    float v1 = light2(1.5, 5.0, d);
    v1 *= light1(1.0, 50.0, d0);

    float v2 = smoothstep(1.0, mix(innerRadius, 1.0, n0 * 0.5), len);
    float v3 = smoothstep(innerRadius, mix(innerRadius, 1.0, 0.5), len);

    vec3 colBase = mix(color1, color2, cl);
    float fadeAmount = mix(1.0, 0.1, bgLuminance);

    vec3 darkCol = mix(color3, colBase, v0);
    darkCol = (darkCol + v1) * v2 * v3;
    darkCol = clamp(darkCol, 0.0, 1.0);

    vec3 lightCol = (colBase + v1) * mix(1.0, v2 * v3, fadeAmount);
    lightCol = mix(backgroundColor, lightCol, v0);
    lightCol = clamp(lightCol, 0.0, 1.0);

    vec3 finalCol = mix(darkCol, lightCol, bgLuminance);

    return extractAlpha(finalCol);
  }

  vec4 mainImage(vec2 fragCoord) {
    vec2 center = iResolution.xy * 0.5;
    float size = min(iResolution.x, iResolution.y);
    vec2 uv = (fragCoord - center) / size * 2.0;

    float angle = rot;
    float s = sin(angle);
    float c = cos(angle);
    uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);

    uv.x += hover * hoverIntensity * 0.1 * sin(uv.y * 10.0 + iTime);
    uv.y += hover * hoverIntensity * 0.1 * sin(uv.x * 10.0 + iTime);

    return draw(uv);
  }

  void main() {
    vec2 fragCoord = vUv * iResolution.xy;
    vec4 col = mainImage(fragCoord);
    gl_FragColor = vec4(col.rgb * col.a, col.a);
  }
`;

const RGB_PATTERN = /rgba?\((\d+),\s*(\d+),\s*(\d+)/;
const HSL_PATTERN = /hsla?\((\d+),\s*(\d+)%,\s*(\d+)%/;
const HEX_BASE = 16;
const RGB_MAX = 255;
const HUE_MAX = 360;
const PERCENT_MAX = 100;

function hslToRgb(h: number, s: number, l: number): Vec3 {
	if (s === 0) {
		return new Vec3(l, l, l);
	}

	const hue2rgb = (p: number, q: number, t: number) => {
		let tt = t;
		if (tt < 0) {
			tt += 1;
		}
		if (tt > 1) {
			tt -= 1;
		}
		if (tt < 1 / 6) {
			return p + (q - p) * 6 * tt;
		}
		if (tt < 1 / 2) {
			return q;
		}
		if (tt < 2 / 3) {
			return p + (q - p) * (2 / 3 - tt) * 6;
		}
		return p;
	};

	const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	const p = 2 * l - q;
	return new Vec3(
		hue2rgb(p, q, h + 1 / 3),
		hue2rgb(p, q, h),
		hue2rgb(p, q, h - 1 / 3)
	);
}

function hexToVec3(color: string): Vec3 {
	if (color.startsWith("#")) {
		return new Vec3(
			Number.parseInt(color.slice(1, 3), HEX_BASE) / RGB_MAX,
			Number.parseInt(color.slice(3, 5), HEX_BASE) / RGB_MAX,
			Number.parseInt(color.slice(5, 7), HEX_BASE) / RGB_MAX
		);
	}

	const rgbMatch = color.match(RGB_PATTERN);
	if (rgbMatch) {
		return new Vec3(
			Number.parseInt(rgbMatch[1] ?? "0", 10) / RGB_MAX,
			Number.parseInt(rgbMatch[2] ?? "0", 10) / RGB_MAX,
			Number.parseInt(rgbMatch[3] ?? "0", 10) / RGB_MAX
		);
	}

	const hslMatch = color.match(HSL_PATTERN);
	if (hslMatch) {
		return hslToRgb(
			Number.parseInt(hslMatch[1] ?? "0", 10) / HUE_MAX,
			Number.parseInt(hslMatch[2] ?? "0", 10) / PERCENT_MAX,
			Number.parseInt(hslMatch[3] ?? "0", 10) / PERCENT_MAX
		);
	}

	return new Vec3(0, 0, 0);
}

interface OrbOptions {
	backgroundColor: string;
	forceHoverState: boolean;
	hoverIntensity: number;
	hue: number;
	rotateOnHover: boolean;
}

const ROTATION_SPEED = 0.3;
const HOVER_SMOOTHING = 0.1;
const HOVER_RADIUS = 0.8;
const HOVER_THRESHOLD = 0.5;
const MS_PER_SECOND = 1000;
// An arbitrary but pleasing shader time for the single frame rendered when
// the user prefers reduced motion.
const STATIC_FRAME_TIME = 8;

function startOrb(container: HTMLDivElement, options: OrbOptions) {
	const renderer = new Renderer({ alpha: true, premultipliedAlpha: false });
	const { gl } = renderer;
	gl.clearColor(0, 0, 0, 0);
	container.appendChild(gl.canvas);

	const program = new Program(gl, {
		fragment: FRAGMENT_SHADER,
		uniforms: {
			backgroundColor: { value: hexToVec3(options.backgroundColor) },
			hover: { value: 0 },
			hoverIntensity: { value: options.hoverIntensity },
			hue: { value: options.hue },
			iResolution: {
				value: new Vec3(
					gl.canvas.width,
					gl.canvas.height,
					gl.canvas.width / gl.canvas.height
				),
			},
			iTime: { value: 0 },
			rot: { value: 0 },
		},
		vertex: VERTEX_SHADER,
	});
	const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

	const reducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)"
	).matches;

	const resize = () => {
		const dpr = window.devicePixelRatio || 1;
		const width = container.clientWidth;
		const height = container.clientHeight;
		renderer.setSize(width * dpr, height * dpr);
		gl.canvas.style.width = `${width}px`;
		gl.canvas.style.height = `${height}px`;
		program.uniforms.iResolution.value.set(
			gl.canvas.width,
			gl.canvas.height,
			gl.canvas.width / gl.canvas.height
		);
		if (reducedMotion) {
			renderer.render({ scene: mesh });
		}
	};
	window.addEventListener("resize", resize);
	if (reducedMotion) {
		program.uniforms.iTime.value = STATIC_FRAME_TIME;
	}
	resize();

	let targetHover = 0;
	const handleMouseMove = (event: MouseEvent) => {
		const rect = container.getBoundingClientRect();
		const size = Math.min(rect.width, rect.height);
		const uvX = ((event.clientX - rect.left - rect.width / 2) / size) * 2;
		const uvY = ((event.clientY - rect.top - rect.height / 2) / size) * 2;
		targetHover = Math.hypot(uvX, uvY) < HOVER_RADIUS ? 1 : 0;
	};
	const handleMouseLeave = () => {
		targetHover = 0;
	};
	container.addEventListener("mousemove", handleMouseMove);
	container.addEventListener("mouseleave", handleMouseLeave);

	let rafId = 0;
	let lastTime = 0;
	let currentRot = 0;
	const update = (time: number) => {
		rafId = requestAnimationFrame(update);
		const dt = (time - lastTime) / MS_PER_SECOND;
		lastTime = time;
		program.uniforms.iTime.value = time / MS_PER_SECOND;

		const effectiveHover = options.forceHoverState ? 1 : targetHover;
		program.uniforms.hover.value +=
			(effectiveHover - program.uniforms.hover.value) * HOVER_SMOOTHING;
		if (options.rotateOnHover && effectiveHover > HOVER_THRESHOLD) {
			currentRot += dt * ROTATION_SPEED;
		}
		program.uniforms.rot.value = currentRot;

		renderer.render({ scene: mesh });
	};
	if (!reducedMotion) {
		rafId = requestAnimationFrame(update);
	}

	return () => {
		cancelAnimationFrame(rafId);
		window.removeEventListener("resize", resize);
		container.removeEventListener("mousemove", handleMouseMove);
		container.removeEventListener("mouseleave", handleMouseLeave);
		container.removeChild(gl.canvas);
		gl.getExtension("WEBGL_lose_context")?.loseContext();
	};
}

export function Orb({
	hue = 0,
	hoverIntensity = 0.2,
	rotateOnHover = true,
	forceHoverState = false,
	backgroundColor = "#000000",
	className,
}: Partial<OrbOptions> & { className?: string }) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) {
			return;
		}
		return startOrb(container, {
			backgroundColor,
			forceHoverState,
			hoverIntensity,
			hue,
			rotateOnHover,
		});
	}, [hue, hoverIntensity, rotateOnHover, forceHoverState, backgroundColor]);

	return (
		<div
			className={cn("relative z-0 h-full w-full", className)}
			ref={containerRef}
		/>
	);
}
