import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconListBulletsSquare: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="list-bullets-square">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M21 6.75C21 4.67893 19.3211 3 17.25 3H6.75C4.67893 3 3 4.67893 3 6.75V17.25C3 19.3211 4.67893 21 6.75 21H17.25C19.3211 21 21 19.3211 21 17.25V6.75ZM9 8C9 8.69036 8.44036 9.25 7.75 9.25C7.05964 9.25 6.5 8.69036 6.5 8C6.5 7.30964 7.05964 6.75 7.75 6.75C8.44036 6.75 9 7.30964 9 8ZM9 12C9 12.6904 8.44036 13.25 7.75 13.25C7.05964 13.25 6.5 12.6904 6.5 12C6.5 11.3096 7.05964 10.75 7.75 10.75C8.44036 10.75 9 11.3096 9 12ZM7.75 17.25C8.44036 17.25 9 16.6904 9 16C9 15.3096 8.44036 14.75 7.75 14.75C7.05964 14.75 6.5 15.3096 6.5 16C6.5 16.6904 7.05964 17.25 7.75 17.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8 14.75C8.69036 14.75 9.25 15.3096 9.25 16C9.25 16.6904 8.69036 17.25 8 17.25C7.30964 17.25 6.75 16.6904 6.75 16C6.75 15.3096 7.30964 14.75 8 14.75Z"
					fill="currentColor"
				/>
				<path
					d="M8 10.75C8.69036 10.75 9.25 11.3096 9.25 12C9.25 12.6904 8.69036 13.25 8 13.25C7.30964 13.25 6.75 12.6904 6.75 12C6.75 11.3096 7.30964 10.75 8 10.75Z"
					fill="currentColor"
				/>
				<path
					d="M8 6.75C8.69036 6.75 9.25 7.30964 9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30964 7.30964 6.75 8 6.75Z"
					fill="currentColor"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconListBulletsSquare;
