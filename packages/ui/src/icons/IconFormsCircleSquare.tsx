import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFormsCircleSquare: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="forms-circle-square, shapes, designs, templates"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M17.4395 8.00391C19.4225 8.10256 21 9.74245 21 11.75V17.25C21 19.3211 19.3211 21 17.25 21H11.75C9.74245 21 8.10256 19.4225 8.00391 17.4395C8.33074 17.4776 8.66292 17.5 9 17.5C13.6944 17.5 17.5 13.6944 17.5 9C17.5 8.66292 17.4776 8.33074 17.4395 8.00391Z"
					fill="currentColor"
				/>
				<path
					d="M9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M17.75 8.75C19.1307 8.75 20.25 9.86929 20.25 11.25V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H11.25C9.86929 20.25 8.75 19.1307 8.75 17.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="9"
					cy="9"
					r="6.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFormsCircleSquare;
