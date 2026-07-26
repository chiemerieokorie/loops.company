import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTestTube2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="test-tube 2, test, lab, filter">
		{variant === "filled" ? (
			<>
				<path
					d="M20.25 13.9999C20.6642 13.9999 21 14.3357 21 14.7499V17.2499C21 19.321 19.321 20.9999 17.25 20.9999H13.75C13.3358 20.9999 13 20.6641 13 20.2499C13 19.8357 13.3358 19.4999 13.75 19.4999H17.25C18.4926 19.4999 19.5 18.4926 19.5 17.2499V14.7499C19.5 14.3357 19.8358 13.9999 20.25 13.9999Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M13.2197 2.71967C13.5126 2.42678 13.9874 2.42678 14.2803 2.71967L21.2803 9.71967C21.5731 10.0126 21.5731 10.4874 21.2803 10.7802C20.9874 11.0731 20.5126 11.073 20.2197 10.7802L19.25 9.81049L9.78027 19.2802C8.38287 20.6775 6.11716 20.6774 4.71973 19.2802C3.32246 17.8828 3.32247 15.6171 4.71973 14.2197L14.1895 4.74994L13.2197 3.78022C12.9268 3.48733 12.9269 3.01257 13.2197 2.71967ZM10.0605 10.9999H15.9395L18.1895 8.74994L15.25 5.81049L10.0605 10.9999Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M9.25 2.99994C9.66421 2.99994 10 3.33573 10 3.74994C9.99997 4.16413 9.66419 4.49994 9.25 4.49994H6.75C5.50736 4.49994 4.5 5.5073 4.5 6.74994V10.2499C4.49997 10.6641 4.16419 10.9999 3.75 10.9999C3.33581 10.9999 3.00003 10.6641 3 10.2499V6.74994C3 4.67888 4.67893 2.99994 6.75 2.99994H9.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.0003 9L9.2503 18.75C8.14573 19.8546 6.35487 19.8546 5.2503 18.75C4.14573 17.6454 4.14573 15.8546 5.2503 14.75L15.0003 5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 3.25L20.75 10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.5 11.75H16"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 20.25L17.25 20.25C18.9069 20.25 20.25 18.9069 20.25 17.25L20.25 14.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTestTube2;
