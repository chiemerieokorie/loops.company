import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTower: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="tower, terminal">
		{variant === "filled" ? (
			<>
				<path
					d="M14.4988 21.25C14.4988 21.6641 14.1628 21.9998 13.7488 22H10.2488C9.83455 22 9.49876 21.6642 9.49876 21.25V16.5H14.4988V21.25Z"
					fill="currentColor"
				/>
				<path
					d="M19.6521 10.5C20.5362 10.5 21.1412 11.3929 20.8132 12.2139L19.8132 14.7139C19.6234 15.1884 19.1632 15.5 18.6521 15.5H5.34447C4.83344 15.4999 4.37411 15.1884 4.18431 14.7139L3.18431 12.2139C2.85614 11.3929 3.46037 10.5002 4.34447 10.5H19.6521Z"
					fill="currentColor"
				/>
				<path
					d="M15.2488 2C15.6628 2.00021 15.9988 2.33591 15.9988 2.75C15.9988 3.16409 15.6628 3.49979 15.2488 3.5H12.7488V5H18.0749C18.9795 5.00001 19.5849 5.93121 19.2175 6.75781L17.9988 9.5H5.99876L4.78001 6.75781C4.41264 5.93126 5.01714 5.00014 5.92161 5H11.2488V3.5H8.74876C8.33455 3.5 7.99876 3.16421 7.99876 2.75C7.99876 2.33579 8.33455 2 8.74876 2L15.2488 2Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M9.75 2.75L14.25 2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 3V5.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.5 9.75L18.4933 7.10112C18.7385 6.44737 18.2552 5.75 17.557 5.75H6.443C5.74479 5.75 5.26151 6.44737 5.50667 7.10112L6.5 9.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.4612 9.75H4.53876C3.8151 9.75 3.33105 10.4949 3.62495 11.1561L4.73606 13.6561C4.89656 14.0173 5.25468 14.25 5.64987 14.25H18.3501C18.7453 14.25 19.1034 14.0173 19.2639 13.6561L20.375 11.1561C20.669 10.4949 20.1849 9.75 19.4612 9.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 14.25V21.25H14.25V14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTower;
