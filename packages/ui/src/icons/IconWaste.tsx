import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWaste: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="waste, trash-can">
		{variant === "filled" ? (
			<>
				<path
					d="M8.42004 2C7.17093 2 6.00383 2.62195 5.30726 3.65879L5.07803 4H3.75C3.33579 4 3 4.33579 3 4.75C3 5.16421 3.33579 5.5 3.75 5.5H20.25C20.6642 5.5 21 5.16421 21 4.75C21 4.33579 20.6642 4 20.25 4H18.9218L18.6926 3.65879C17.996 2.62195 16.8289 2 15.5798 2H8.42004Z"
					fill="currentColor"
				/>
				<path
					d="M8.59084 22C6.61734 22 4.98156 20.4704 4.84928 18.5014L4.0766 7H19.8861L19.042 15.3766C18.3707 14.9785 17.587 14.75 16.75 14.75C14.2647 14.75 12.25 16.7647 12.25 19.25C12.25 20.2856 12.5998 21.2395 13.1878 22H8.59084Z"
					fill="currentColor"
				/>
				<path
					d="M19.75 19.25C19.75 20.9069 18.4069 22.25 16.75 22.25C15.0931 22.25 13.75 20.9069 13.75 19.25C13.75 17.5931 15.0931 16.25 16.75 16.25C18.4069 16.25 19.75 17.5931 19.75 19.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M15 21.25H8.59093C7.01213 21.25 5.70351 20.0263 5.59768 18.4511L4.75 5.83333L5.92991 4.07703C6.48716 3.24756 7.42084 2.75 8.42012 2.75H15.5799C16.5792 2.75 17.5128 3.24756 18.0701 4.07704L19.25 5.83333L18.5 17.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 6H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19 19C19 20.3807 17.8807 21.5 16.5 21.5C15.1193 21.5 14 20.3807 14 19C14 17.6193 15.1193 16.5 16.5 16.5C17.8807 16.5 19 17.6193 19 19Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWaste;
