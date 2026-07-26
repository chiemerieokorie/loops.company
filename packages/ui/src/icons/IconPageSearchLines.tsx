import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPageSearchLines: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="page-search-lines">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.00394 5.74511C3.00395 3.67404 4.68288 1.99512 6.75394 1.99512H16.249C18.3201 1.99512 19.999 3.67405 19.999 5.74512V13.7765C17.9758 12.5304 15.2903 12.7841 13.5367 14.5377C11.4865 16.5879 11.4865 19.9121 13.5367 21.9623L13.5708 21.9961H6.75391C4.68283 21.9961 3.0039 20.3171 3.00391 18.2461L3.00394 5.74511ZM7.74904 6C7.33483 6 6.99904 6.33579 6.99904 6.75C6.99904 7.16421 7.33483 7.5 7.74904 7.5H15.249C15.6633 7.5 15.999 7.16421 15.999 6.75C15.999 6.33579 15.6633 6 15.249 6H7.74904ZM7.74904 10C7.33483 10 6.99904 10.3358 6.99904 10.75C6.99904 11.1642 7.33483 11.5 7.74904 11.5H11.249C11.6633 11.5 11.999 11.1642 11.999 10.75C11.999 10.3358 11.6633 10 11.249 10H7.74904ZM7.74904 14C7.33483 14 6.99904 14.3358 6.99904 14.75C6.99904 15.1642 7.33483 15.5 7.74904 15.5H9.24904C9.66325 15.5 9.99904 15.1642 9.99904 14.75C9.99904 14.3358 9.66325 14 9.24904 14H7.74904Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M19.9007 15.591C18.4362 14.1265 16.0618 14.1265 14.5974 15.591C13.1329 17.0554 13.1329 19.4298 14.5974 20.8943C15.8802 22.1771 17.8613 22.3362 19.3173 21.3716L20.7187 22.773C21.0116 23.0659 21.4865 23.0659 21.7794 22.773C22.0722 22.4801 22.0722 22.0052 21.7794 21.7123L20.378 20.3109C21.3426 18.8549 21.1835 16.8738 19.9007 15.591ZM15.658 16.6516C16.5367 15.773 17.9613 15.773 18.84 16.6516C19.7187 17.5303 19.7187 18.9549 18.84 19.8336C17.9613 20.7123 16.5367 20.7123 15.658 19.8336C14.7794 18.9549 14.7794 17.5303 15.658 16.6516Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.3713 20.364C18.1997 21.5356 16.3003 21.5356 15.1287 20.364C13.9571 19.1924 13.9571 17.2929 15.1287 16.1214C16.3003 14.9498 18.1997 14.9498 19.3713 16.1214C20.5429 17.2929 20.5429 19.1924 19.3713 20.364Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.249 12.5V5.74512C19.249 4.08826 17.9059 2.74512 16.249 2.74512H6.75394C5.09709 2.74512 3.75395 4.08826 3.75394 5.74511L3.75391 18.2461C3.7539 19.9029 5.09705 21.2461 6.75391 21.2461H11.999"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 14.75H9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 6.75H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 10.75H11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.3711 20.3638L21.2498 22.2425"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPageSearchLines;
