export function PillsDiagramIllustration({
	activeItem,
}: {
	activeItem: number | null;
}) {
	return (
		<svg
			className="h-full [--color-layer-border-2:--alpha(var(--color-foreground)/50%)] [--color-layer-border:--alpha(var(--color-foreground)/15%)] lg:w-164"
			fill="none"
			viewBox="0 0 627 441"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="scene-frame">
				<path
					d="M149.911 296.963L170.401 293.793L155.401 285.133L149.911 296.963ZM161.602 290.213L162.901 290.963L281.114 222.713L279.815 221.963L278.516 221.213L160.303 289.463L161.602 290.213Z"
					fill="var(--color-layer-border)"
				/>
				<path
					d="M625.507 330.594L625.006 330.882L521.083 390.859L520.583 391.147L520.083 390.859L104.438 150.663L103.938 150.374V69.2197L104.438 68.9316L208.361 8.95404L208.862 8.66595L209.362 8.95404L625.007 249.15L625.507 249.439V330.594Z"
					fill="var(--color-background)"
					stroke="var(--color-border)"
					strokeWidth="1"
				/>
				<path
					d="M208.862 9.69525L624.554 249.695L624.554 330.004L208.862 90.0036L208.862 9.69525Z"
					fill="var(--color-background)"
				/>
				<path
					d="M104.938 69.9223L208.862 9.9223L208.862 89.9223L104.938 149.922L104.938 69.9223Z"
					fill="var(--color-background)"
				/>
				<path
					d="M208.862 89.9223L624.554 329.922L520.631 389.922L104.939 149.922L208.862 89.9223Z"
					fill="var(--color-background)"
				/>
				<path
					d="M104.313 150.297L209.313 89.5473M209.313 89.5473L624.85 330.079M209.313 89.5473V9.1723"
					stroke="var(--color-border)"
					strokeDasharray="2 6"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
			</g>
			<g
				id="device-server"
				style={{
					opacity: activeItem === null || activeItem === 0 ? 1 : 0.3,
					transition: "opacity 0.5s ease",
				}}
			>
				<path
					d="M250 121.963H161.282V144.963L161.305 144.963C161.305 149.357 167.428 152.892 179.676 159.963C191.923 167.034 198.047 170.57 205.657 170.57C213.266 170.57 219.39 167.034 231.637 159.963C243.885 152.892 250.009 149.357 250.009 144.963C250.009 144.871 250.006 144.778 250 144.686V121.963Z"
					fill="url(#deviceStripesPattern)"
					stroke="var(--color-layer-border-2)"
				/>
				<path
					d="M179.676 106.963C191.923 99.8923 198.047 96.3568 205.657 96.3568C213.266 96.3568 219.39 99.8923 231.637 106.963C243.885 114.034 250.008 117.57 250.008 121.963C250.008 126.357 243.885 129.892 231.637 136.963C219.39 144.034 213.266 147.57 205.657 147.57C198.047 147.57 191.923 144.034 179.676 136.963C167.428 129.892 161.305 126.357 161.305 121.963C161.305 117.57 167.428 114.034 179.676 106.963Z"
					fill="var(--color-background)"
					stroke="var(--color-layer-border-2)"
				/>
			</g>
			<g
				id="device-router"
				style={{
					opacity: activeItem === null || activeItem === 1 ? 1 : 0.3,
					transition: "opacity 0.5s ease",
				}}
			>
				<path
					d="M337.844 171.835H249.125V196.835L249.148 196.835C249.148 201.228 255.272 204.764 267.519 211.835C279.767 218.906 285.89 222.441 293.5 222.441C301.11 222.441 307.233 218.906 319.481 211.835C331.728 204.764 337.852 201.228 337.852 196.835C337.852 196.742 337.849 196.65 337.844 196.558V171.835Z"
					fill="url(#deviceStripesPattern)"
					stroke="var(--color-layer-border-2)"
				/>
				<path
					d="M267.519 156.835C279.767 149.764 285.89 146.228 293.5 146.228C301.11 146.228 307.233 149.764 319.481 156.835C331.728 163.906 337.852 167.441 337.852 171.835C337.852 176.228 331.728 179.764 319.481 186.835C307.233 193.906 301.11 197.441 293.5 197.441C285.89 197.441 279.767 193.906 267.519 186.835C255.272 179.764 249.148 176.228 249.148 171.835C249.148 167.441 255.272 163.906 267.519 156.835Z"
					fill="var(--color-background)"
					stroke="var(--color-layer-border-2)"
				/>
			</g>
			<g
				id="device-database"
				style={{
					opacity: activeItem === null || activeItem === 2 ? 1 : 0.3,
					transition: "opacity 0.5s ease",
				}}
			>
				<path
					d="M350.04 230.335L393.341 255.335L393.341 280.335L350.04 255.335L350.04 230.335Z"
					fill="url(#deviceStripesPattern)"
					stroke="var(--color-layer-border-2)"
				/>
				<path
					d="M393.341 255.335L436.642 230.335L436.642 255.335L393.341 280.335L393.341 255.335Z"
					fill="url(#deviceStripesPattern)"
					stroke="var(--color-layer-border-2)"
				/>
				<path
					d="M393.341 205.335L436.642 230.335L393.341 255.335L350.04 230.335L393.341 205.335Z"
					fill="var(--color-background)"
				/>
			</g>
			<g
				id="device-mobile"
				style={{
					opacity: activeItem === null || activeItem === 4 ? 1 : 0.3,
					transition: "opacity 0.5s ease",
				}}
			>
				<path
					d="M213.745 357.485C215.658 356.381 218.76 356.381 220.673 357.485L253.535 376.459C255.448 377.563 255.448 379.354 253.535 380.459L186.851 418.959C184.938 420.063 181.836 420.063 179.923 418.959L147.06 399.986C145.147 398.881 145.147 397.09 147.06 395.986L213.745 357.485Z"
					fill="var(--color-background)"
					stroke="var(--color-layer-border)"
				/>
				<path
					d="M214.866 362.426C216.226 361.641 218.431 361.641 219.792 362.426L244.311 376.582C245.671 377.368 245.671 378.641 244.311 379.426L196.409 407.082C195.049 407.868 192.843 407.868 191.483 407.082L166.964 392.926C165.604 392.141 165.604 390.868 166.964 390.082L214.866 362.426Z"
					fill="var(--color-muted)"
					stroke="var(--color-layer-border)"
				/>
			</g>
			<g
				id="device-tab"
				style={{
					opacity: activeItem === null || activeItem === 3 ? 1 : 0.3,
					transition: "opacity 0.5s ease",
				}}
			>
				<path
					d="M85.7108 281.146C87.624 280.042 90.7259 280.042 92.639 281.146L180.974 332.146C182.887 333.251 182.887 335.042 180.974 336.146L114.289 374.646C112.376 375.751 109.274 375.751 107.361 374.646L19.0264 323.646C17.1133 322.542 17.1133 320.751 19.0264 319.646L85.7108 281.146Z"
					fill="var(--color-background)"
					stroke="var(--color-layer-border)"
				/>
				<path
					d="M86.8319 286.087C88.1922 285.302 90.3977 285.302 91.758 286.087L172.135 332.493C173.496 333.279 173.496 334.552 172.135 335.337L113.409 369.243C112.048 370.029 109.843 370.029 108.483 369.243L28.1051 322.837C26.7448 322.052 26.7448 320.779 28.1051 319.993L86.8319 286.087Z"
					fill="var(--color-muted)"
					stroke="var(--color-layer-border)"
				/>
			</g>
			<defs>
				<pattern
					height="4"
					id="deviceStripesPattern"
					patternTransform="rotate(0)"
					patternUnits="userSpaceOnUse"
					width="6"
				>
					<rect fill="var(--color-border)" height="1" width="1" />
					<rect fill="var(--color-border)" height="5" width="1" x="3" />
				</pattern>
			</defs>
		</svg>
	);
}
