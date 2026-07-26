import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconStepForwards: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="step-forwards,continue">
		{variant === "filled" ? (
			<>
				<path
					d="M17.7803 2.71967C17.4874 2.42678 17.0126 2.42678 16.7197 2.71967C16.4268 3.01256 16.4268 3.48744 16.7197 3.78033L18.4393 5.5H9.75C5.88401 5.5 2.75 8.63401 2.75 12.5C2.75 16.366 5.88401 19.5 9.75 19.5H18.25C18.6642 19.5 19 19.1642 19 18.75C19 18.3358 18.6642 18 18.25 18H9.75C6.71243 18 4.25 15.5376 4.25 12.5C4.25 9.46243 6.71243 7 9.75 7H18.4393L16.7197 8.71967C16.4268 9.01256 16.4268 9.48744 16.7197 9.78033C17.0126 10.0732 17.4874 10.0732 17.7803 9.78033L20.7803 6.78033C21.0732 6.48744 21.0732 6.01256 20.7803 5.71967L17.7803 2.71967Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.25L20.25 6.25L17.25 9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.5 6.25H9.75C6.29822 6.25 3.5 9.04822 3.5 12.5C3.5 15.9518 6.29822 18.75 9.75 18.75H18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconStepForwards;
