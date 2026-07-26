import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowCornerRightDown: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-corner-right-down">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M14.7197 20.7803C15.0126 21.0732 15.4874 21.0732 15.7803 20.7803L19.7803 16.7803C20.0732 16.4874 20.0732 16.0126 19.7803 15.7197C19.4874 15.4268 19.0126 15.4268 18.7197 15.7197L16 18.4393V6.75C16 4.67893 14.3211 3 12.25 3H4.75C4.33579 3 4 3.33579 4 3.75C4 4.16421 4.33579 4.5 4.75 4.5H12.25C13.4926 4.5 14.5 5.50736 14.5 6.75V18.4393L11.7803 15.7197C11.4874 15.4268 11.0126 15.4268 10.7197 15.7197C10.4268 16.0126 10.4268 16.4874 10.7197 16.7803L14.7197 20.7803Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 3.75H12.25C13.9069 3.75 15.25 5.09315 15.25 6.75V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.25 16.25L15.25 20.25L19.25 16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowCornerRightDown;
