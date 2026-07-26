import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBold: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bold">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5 7.3125C5 4.96273 6.87119 3 9.25 3H12.9167C15.8017 3 18.0833 5.38246 18.0833 8.25C18.0833 9.49245 17.655 10.6438 16.9349 11.5498C18.1942 12.5131 19 14.0459 19 15.75C19 18.6175 16.7184 21 13.8333 21H9.25C6.87119 21 5 19.0373 5 16.6875V7.3125Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M12.9167 10.5C14.0817 10.5 15.0833 9.5246 15.0833 8.25C15.0833 6.9754 14.0817 6 12.9167 6H9.25C8.59124 6 8 6.55567 8 7.3125V10.5H12.9167Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M8 13.5H13.8333C14.9984 13.5 16 14.4754 16 15.75C16 17.0246 14.9984 18 13.8333 18H9.25C8.59124 18 8 17.4443 8 16.6875V13.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.252 8V7.75C17.252 5.54086 15.4611 3.75 13.252 3.75H8.74219C7.08533 3.75 5.74219 5.09315 5.74219 6.75V9C5.74219 10.6569 7.08533 12 8.74219 12H13.252C15.4611 12 17.252 10.2091 17.252 8Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.74219 12V17.25C5.74219 18.9069 7.08533 20.25 8.74219 20.25H12.502"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13 20.25H14.25C16.4591 20.25 18.25 18.4591 18.25 16.25V16C18.25 13.7909 16.4591 12 14.25 12H13"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBold;
