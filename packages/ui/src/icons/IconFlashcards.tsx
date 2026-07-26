import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFlashcards: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="flashcards, cards, pages">
		{variant === "filled" ? (
			<>
				<path
					d="M3.39194 11.7751C3.17545 9.71535 4.66969 7.87012 6.72942 7.65364L9.21572 7.39231C11.2754 7.17583 13.1207 8.67007 13.3372 10.7298L14.02 17.2261C14.2364 19.2859 12.7422 21.1311 10.6825 21.3476L8.19617 21.6089C6.13645 21.8254 4.29122 20.3311 4.07473 18.2714L3.39194 11.7751Z"
					fill="currentColor"
				/>
				<path
					d="M10.7744 5.72983C10.9909 3.6701 12.8367 2.17545 14.8964 2.39194L17.3828 2.65365C19.4422 2.8703 20.936 4.71526 20.7197 6.77475L20.0371 13.2718C19.8204 15.3312 17.9754 16.825 15.916 16.6087L15.458 16.5599L14.8291 10.5726C14.5868 8.26958 12.8896 6.47246 10.747 5.99643L10.7744 5.72983Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M10.625 7.17745L10.7505 5.98357C10.9237 4.33579 12.3999 3.1404 14.0476 3.31359L18.0257 3.7317C19.6735 3.90489 20.8689 5.38107 20.6957 7.02885L19.964 13.9905C19.7908 15.6383 18.3146 16.8337 16.6669 16.6605L14.0021 16.3804"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.26671 11.0288C3.09352 9.38107 4.28891 7.90489 5.93669 7.7317L9.91478 7.31359C11.5626 7.1404 13.0387 8.33579 13.2119 9.98357L13.9436 16.9452C14.1168 18.593 12.9214 20.0692 11.2736 20.2424L7.29556 20.6605C5.64778 20.8337 4.1716 19.6383 3.99841 17.9905L3.26671 11.0288Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFlashcards;
