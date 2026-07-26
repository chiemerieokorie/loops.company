import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBubbles: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bubbles, messages, chat, communicate">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M18.752 3C20.5469 3 22.002 4.45507 22.002 6.25V11.75C22.002 13.5449 20.5469 15 18.752 15H18.002V15.75C18.002 17.5449 16.5469 19 14.752 19H10.6963L6.36619 21.4056C6.13389 21.5347 5.85064 21.5312 5.62161 21.3964C5.39257 21.2616 5.25195 21.0157 5.25195 20.75V19C3.45703 19 2.00195 17.5449 2.00195 15.75V10.25C2.00195 8.45507 3.45703 7 5.25195 7H6.25195V6.25C6.25195 4.45507 7.70703 3 9.50195 3H18.752ZM7.75195 7H14.752C16.5469 7 18.002 8.45507 18.002 10.25V13.5H18.752C19.7185 13.5 20.502 12.7165 20.502 11.75V6.25C20.502 5.2835 19.7185 4.5 18.752 4.5H9.50195C8.53545 4.5 7.75195 5.2835 7.75195 6.25V7Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.25195 7.75H14.752C16.1327 7.75 17.252 8.86929 17.252 10.25V15.75C17.252 17.1307 16.1327 18.25 14.752 18.25H10.502L6.00195 20.75V18.25H5.25195C3.87124 18.25 2.75195 17.1307 2.75195 15.75V10.25C2.75195 8.86929 3.87124 7.75 5.25195 7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.2498 14.25H18.752C20.1327 14.25 21.252 13.1307 21.252 11.75V6.25C21.252 4.86929 20.1327 3.75 18.752 3.75H9.50195C8.12124 3.75 7.00195 4.86929 7.00195 6.25V7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBubbles;
