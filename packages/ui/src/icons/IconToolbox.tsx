import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconToolbox: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="toolbox">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7 3.5C6.96795 3.5 6.9385 3.5176 6.9233 3.54581L5.76894 5.68963C5.59241 6.01747 5.5 6.384 5.5 6.75635V10H8.5V6.75635C8.5 6.384 8.40759 6.01747 8.23106 5.68963L7.0767 3.54581C7.0615 3.5176 7.03205 3.5 7 3.5ZM7 2C7.58387 2 8.12059 2.32058 8.3974 2.83466L9.55177 4.97848C9.84599 5.52489 10 6.13577 10 6.75635V10H12V4.75C12 3.23122 13.2312 2 14.75 2H17.25C18.7688 2 20 3.23122 20 4.75V10H21.25C21.6642 10 22 10.3358 22 10.75V17.25C22 19.3211 20.3211 21 18.25 21H5.75C3.67893 21 2 19.3211 2 17.25V10.75C2 10.3358 2.33579 10 2.75 10H4V6.75635C4 6.13577 4.15401 5.52488 4.44823 4.97848L5.6026 2.83466C5.87941 2.32058 6.41613 2 7 2ZM13.5 10H18.5V4.75C18.5 4.05964 17.9404 3.5 17.25 3.5H14.75C14.0596 3.5 13.5 4.05964 13.5 4.75V6H15.25C15.6642 6 16 6.33579 16 6.75C16 7.16421 15.6642 7.5 15.25 7.5H13.5V10Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 10.75H21.25V17.25C21.25 18.9069 19.9069 20.25 18.25 20.25H5.75C4.09315 20.25 2.75 18.9069 2.75 17.25V10.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 10.75V4.75C12.75 3.64543 13.6454 2.75 14.75 2.75H17.25C18.3546 2.75 19.25 3.64543 19.25 4.75V10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 6.75H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 10.75V6.75635C4.75 6.25989 4.87321 5.77118 5.10859 5.33405L6.26295 3.19024C6.40895 2.91909 6.69204 2.75 7 2.75C7.30796 2.75 7.59105 2.91909 7.73705 3.19024L8.89141 5.33405C9.12679 5.77118 9.25 6.25989 9.25 6.75635V10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconToolbox;
