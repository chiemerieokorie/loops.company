import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconHotDrinkCup: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="hot-drink-cup,coffee-mug,dup, mug">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8.60127 3.5C7.65513 3.5 6.81006 4.09191 6.48673 4.9811L6.47986 5H17.5201L17.5132 4.98106C17.1899 4.09189 16.3448 3.5 15.3987 3.5H8.60127ZM19.1277 5.03156L18.9229 4.46843C18.384 2.98649 16.9756 2 15.3987 2H8.60127C7.02436 2 5.61592 2.98652 5.07703 4.4685L4.87229 5.03157C3.80948 5.21121 3 6.13607 3 7.25C3 8.03475 3.40175 8.72567 4.0108 9.12829L4.9118 18.6049C5.09481 20.5298 6.71139 22 8.64497 22H15.3555C17.2888 22 18.9053 20.5302 19.0886 18.6055L19.9913 9.1269C20.5992 8.72407 21 8.03385 21 7.25C21 6.13607 20.1905 5.21121 19.1277 5.03156ZM5.25 6.5C4.83579 6.5 4.5 6.83579 4.5 7.25C4.5 7.66421 4.83579 8 5.25 8H18.75C19.1642 8 19.5 7.66421 19.5 7.25C19.5 6.83579 19.1642 6.5 18.75 6.5H5.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M18.75 5.75H5.25C4.42157 5.75 3.75 6.42157 3.75 7.25C3.75 8.07843 4.42157 8.75 5.25 8.75H18.75C19.5784 8.75 20.25 8.07843 20.25 7.25C20.25 6.42157 19.5784 5.75 18.75 5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.5 5.5L5.78188 4.7248C6.21299 3.53922 7.33974 2.75 8.60127 2.75H15.3987C16.6602 2.75 17.787 3.53919 18.2181 4.72474L18.5 5.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 8.97913L5.65843 18.5339C5.80484 20.0738 7.09811 21.25 8.64497 21.25H15.3555C16.9021 21.25 18.1953 20.0741 18.342 18.5344L19.25 8.99996"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconHotDrinkCup;
