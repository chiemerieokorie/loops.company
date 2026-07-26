export function GlobeIllustration({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 280 280"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="140"
				cy="140"
				fill="none"
				r="120"
				stroke="currentColor"
				strokeWidth="0.5"
			/>
			{Array.from({ length: 18 }).map((_, row) =>
				Array.from({ length: 28 }).map((_, col) => {
					const x = 20 + col * 8.5;
					const y = 30 + row * 12;
					const dx = x - 140;
					const dy = y - 140;
					if (dx * dx + dy * dy < 120 * 120) {
						return (
							<circle
								cx={x}
								cy={y}
								fill="currentColor"
								key={`${row}-${col}`}
								opacity="0.4"
								r="1.5"
							/>
						);
					}
					return null;
				})
			)}
			<ellipse
				cx="140"
				cy="140"
				fill="none"
				rx="120"
				ry="30"
				stroke="currentColor"
				strokeOpacity="0.3"
				strokeWidth="0.3"
			/>
			<ellipse
				cx="140"
				cy="140"
				fill="none"
				rx="120"
				ry="70"
				stroke="currentColor"
				strokeOpacity="0.2"
				strokeWidth="0.3"
			/>
			<ellipse
				cx="140"
				cy="140"
				fill="none"
				rx="120"
				ry="105"
				stroke="currentColor"
				strokeOpacity="0.2"
				strokeWidth="0.3"
			/>
			<line
				stroke="currentColor"
				strokeOpacity="0.3"
				strokeWidth="0.3"
				x1="140"
				x2="140"
				y1="20"
				y2="260"
			/>
		</svg>
	);
}
