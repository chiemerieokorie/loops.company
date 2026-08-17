"use client";

import { Mesh, Program, Renderer, Triangle, Vec3 } from "ogl";
import { useEffect, useRef } from "react";

const vertex = `attribute vec2 position; attribute vec2 uv; varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position,0.,1.);}`;
const fragment = `precision highp float; uniform float time; uniform vec3 resolution; varying vec2 vUv; float hash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);} float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);} void main(){vec2 p=(vUv-.5)*2.;float r=length(p);float n=noise(vec3(p*2.,time*.18));float glow=smoothstep(1.15,.18,r+n*.16);vec3 a=vec3(.38,.12,.92),b=vec3(.05,.68,.98),c=vec3(.03,.02,.18);vec3 col=mix(c,mix(a,b,vUv.x+sin(time*.3)*.15),glow);col+=.12*sin(vec3(1.,2.,3.)*(r*12.-time));gl_FragColor=vec4(col,glow*.92);}`;

export function Orb() {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const container = ref.current;
		if (!container) return;
		const renderer = new Renderer({ alpha: true, dpr: Math.min(devicePixelRatio, 2) });
		const gl = renderer.gl;
		container.appendChild(gl.canvas);
		const program = new Program(gl, { vertex, fragment, uniforms: { time: { value: 0 }, resolution: { value: new Vec3() } } });
		const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
		const resize = () => { renderer.setSize(container.clientWidth, container.clientHeight); program.uniforms.resolution.value.set(gl.canvas.width, gl.canvas.height, 1); };
		resize(); addEventListener("resize", resize);
		let frame = 0;
		const render = (time: number) => { program.uniforms.time.value = time / 1000; renderer.render({ scene: mesh }); frame = requestAnimationFrame(render); };
		frame = requestAnimationFrame(render);
		return () => { cancelAnimationFrame(frame); removeEventListener("resize", resize); gl.canvas.remove(); gl.getExtension("WEBGL_lose_context")?.loseContext(); };
	}, []);
	return <div aria-hidden className="orb" ref={ref} />;
}
