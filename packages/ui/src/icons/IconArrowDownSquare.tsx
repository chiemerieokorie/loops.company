import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowDownSquare: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-down-square, bottom">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.25 3C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75C3 4.67893 4.67893 3 6.75 3H17.25ZM12 7C11.5858 7 11.25 7.33579 11.25 7.75V14.4395L9.28027 12.4697C8.98738 12.1768 8.51262 12.1768 8.21973 12.4697C7.92683 12.7626 7.92683 13.2374 8.21973 13.5303L11.4697 16.7803C11.7626 17.0732 12.2374 17.0732 12.5303 16.7803L15.7803 13.5303C16.0732 13.2374 16.0732 12.7626 15.7803 12.4697C15.4874 12.1768 15.0126 12.1768 14.7197 12.4697L12.75 14.4395V7.75C12.75 7.33579 12.4142 7 12 7Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 13L12 16.25L8.75 13"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 7.75V15.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowDownSquare;
