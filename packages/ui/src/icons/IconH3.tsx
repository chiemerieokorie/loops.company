import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconH3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="h3, heading, headline">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2.75 4C3.16421 4 3.5 4.33579 3.5 4.75V11.25H12.5V4.75C12.5 4.33579 12.8358 4 13.25 4C13.6642 4 14 4.33579 14 4.75V19.25C14 19.6642 13.6642 20 13.25 20C12.8358 20 12.5 19.6642 12.5 19.25V12.75H3.5V19.25C3.5 19.6642 3.16421 20 2.75 20C2.33579 20 2 19.6642 2 19.25V4.75C2 4.33579 2.33579 4 2.75 4Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M19.9728 11.5C19.3836 11.5 18.8915 11.798 18.6375 12.2077C18.4193 12.5597 17.957 12.6682 17.6049 12.4499C17.2529 12.2317 17.1444 11.7694 17.3627 11.4173C17.8962 10.5567 18.8761 10 19.9728 10C21.595 10 23.0001 11.2391 23.0001 12.875C23.0001 13.733 22.6136 14.4818 22.0119 15C22.6136 15.5182 23.0001 16.267 23.0001 17.125C23.0001 18.7609 21.595 20 19.9728 20C18.8761 20 17.8962 19.4433 17.3627 18.5827C17.1444 18.2306 17.2529 17.7683 17.6049 17.5501C17.957 17.3318 18.4193 17.4403 18.6375 17.7923C18.8915 18.202 19.3836 18.5 19.9728 18.5C20.866 18.5 21.5001 17.8363 21.5001 17.125C21.5001 16.4137 20.866 15.75 19.9728 15.75C19.5586 15.75 19.2228 15.4142 19.2228 15C19.2228 14.5858 19.5586 14.25 19.9728 14.25C20.866 14.25 21.5001 13.5863 21.5001 12.875C21.5001 12.1637 20.866 11.5 19.9728 11.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M13.25 4.75V12V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.25 12H2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 4.75V12V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 18.1875C18.3938 18.8227 19.1297 19.25 19.9727 19.25C21.2304 19.25 22.25 18.2986 22.25 17.125C22.25 15.9514 21.2304 15 19.9727 15C21.2304 15 22.25 14.0486 22.25 12.875C22.25 11.7014 21.2304 10.75 19.9727 10.75C19.1297 10.75 18.3938 11.1773 18 11.8125"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconH3;
