import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChargingStation: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="charging-station, electric-current, power, e-charge"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M8.59206 6.65363C8.83448 6.35059 9.31469 6.52592 9.31469 6.91746V8.66673H10.4918C10.8355 8.66673 11.0247 9.07516 10.8071 9.34719L8.4079 12.3464C8.16547 12.6494 7.68526 12.4741 7.68526 12.0825V10.3333H6.5081C6.16445 10.3333 5.97521 9.92484 6.19283 9.65281L8.59206 6.65363Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H10.25C12.3211 3 14 4.67893 14 6.75V19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V6.75ZM6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75V14H12.5V6.75C12.5 5.50736 11.4926 4.5 10.25 4.5H6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M16.6738 4.26988C16.939 3.95167 17.4119 3.90868 17.7301 4.17385L19.6507 5.77431C20.5057 6.48679 21 7.54222 21 8.65514V14.5C21 15.8807 19.8807 17 18.5 17C17.1193 17 16 15.8807 16 14.5V10.75C16 10.3358 16.3358 10 16.75 10C17.1642 10 17.5 10.3358 17.5 10.75V14.5C17.5 15.0523 17.9477 15.5 18.5 15.5C19.0523 15.5 19.5 15.0523 19.5 14.5V8.65514C19.5 7.98739 19.2034 7.35413 18.6904 6.92665L16.7699 5.32618C16.4517 5.06101 16.4087 4.58809 16.6738 4.26988Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M13.25 14.75V6.75C13.25 5.09315 11.9069 3.75 10.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V14.75M13.25 14.75V20.25H3.75V14.75M13.25 14.75H3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 20.25H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.75 10.75V14.5C16.75 15.4665 17.5335 16.25 18.5 16.25C19.4665 16.25 20.25 15.4665 20.25 14.5V8.65512C20.25 7.76479 19.8545 6.92044 19.1706 6.35046L17.25 4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.31627 6.91746C9.31627 6.52592 8.83606 6.35059 8.59364 6.65363L6.19441 9.65281C5.9768 9.92484 6.16603 10.3333 6.50969 10.3333H7.68685V12.0825C7.68685 12.4741 8.16706 12.6494 8.40948 12.3464L10.8087 9.34719C11.0263 9.07516 10.8371 8.66673 10.4934 8.66673H9.31627V6.91746Z"
					fill="currentColor"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChargingStation;
