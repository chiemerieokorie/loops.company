import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBag3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bag-3, luggage, suitcase, work">
		{variant === "filled" ? (
			<>
				<path
					d="M22 17.25C22 19.3211 20.3211 21 18.25 21H5.75C3.67893 21 2 19.3211 2 17.25V11.4961L11.25 13.5986V13.75C11.25 14.1642 11.5858 14.5 12 14.5C12.4142 14.5 12.75 14.1642 12.75 13.75V13.5986L22 11.4961V17.25Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M13.25 2C15.3211 2 17 3.67893 17 5.75V6H18.25C20.3211 6 22 7.67893 22 9.75V9.95801L12.75 12.0596V12C12.75 11.5858 12.4142 11.25 12 11.25C11.5858 11.25 11.25 11.5858 11.25 12V12.0596L2 9.95801V9.75C2 7.67893 3.67893 6 5.75 6H7V5.75C7 3.67893 8.67893 2 10.75 2H13.25ZM10.75 3.5C9.50736 3.5 8.5 4.50736 8.5 5.75V6H15.5V5.75C15.5 4.50736 14.4926 3.5 13.25 3.5H10.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 20.25C19.9069 20.25 21.25 18.9069 21.25 17.25V9.75C21.25 8.09315 19.9069 6.75 18.25 6.75H5.75C4.09315 6.75 2.75 8.09315 2.75 9.75V17.25C2.75 18.9069 4.09315 20.25 5.75 20.25H18.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 6.75V5.75C7.75 4.09315 9.09315 2.75 10.75 2.75H13.25C14.9069 2.75 16.25 4.09315 16.25 5.75V6.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 12V13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path d="M3 11L12 13L21 11" stroke="currentColor" strokeWidth="1.5" />
			</>
		)}
	</CentralIconBase>
);

export default IconBag3;
