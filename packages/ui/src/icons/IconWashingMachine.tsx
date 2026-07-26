import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWashingMachine: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="washing-machine, laundry, clean">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.75 3C4.67893 3 3 4.67893 3 6.75V17.25C3 19.3211 4.67893 21 6.75 21H17.25C19.3211 21 21 19.3211 21 17.25V6.75C21 4.67893 19.3211 3 17.25 3H6.75ZM6.25 5.25C5.69772 5.25 5.25 5.69772 5.25 6.25C5.25 6.80228 5.69772 7.25 6.25 7.25C6.80228 7.25 7.25 6.80228 7.25 6.25C7.25 5.69772 6.80228 5.25 6.25 5.25ZM7.55104 11.7318C8.30772 11.3143 9.06852 11.2126 9.81926 11.3272C10.6694 11.457 11.4743 11.8674 12.1291 12.2012L12.2772 12.2766C13.0234 12.655 13.6115 12.9264 14.1933 12.9799C14.7037 13.0268 15.2883 12.9096 16.022 12.2789L16.488 11.8783C15.9867 9.866 14.1675 8.375 12 8.375C9.88546 8.375 8.10236 9.79404 7.55104 11.7318ZM16.4558 14.2438C15.6396 14.733 14.8276 14.896 14.0241 14.8221C13.0389 14.7316 12.149 14.2858 11.4406 13.9267L11.3892 13.9006C10.6403 13.5208 10.0852 13.2392 9.54013 13.156C9.07631 13.0853 8.58885 13.1567 7.97797 13.6818L7.504 14.0893C7.99375 16.118 9.82088 17.625 12 17.625C14.1234 17.625 15.9126 16.194 16.4558 14.2438Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.25 7.25H7.26M7.5 7.25C7.5 7.38807 7.38807 7.5 7.25 7.5C7.11193 7.5 7 7.38807 7 7.25C7 7.11193 7.11193 7 7.25 7C7.38807 7 7.5 7.11193 7.5 7.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="12"
					cy="13"
					r="4.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M8.25 12.9956C10.88 10.7348 12.8149 15.5186 15.75 12.9956"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWashingMachine;
