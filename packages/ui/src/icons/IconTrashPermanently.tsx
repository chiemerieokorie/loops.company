import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTrashPermanently: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="trash-permanently, remove">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 1.75C14.003 1.75 15.6819 3.13507 16.1318 5H20.75C21.1642 5 21.5 5.33579 21.5 5.75C21.5 6.16421 21.1642 6.5 20.75 6.5H20C20 6.5174 19.9993 6.53512 19.998 6.55273L19.1582 18.5127C19.0203 20.4768 17.3869 21.9998 15.418 22H8.58203C6.61309 21.9998 4.97973 20.4768 4.8418 18.5127L4.00195 6.55273C4.00072 6.53512 4.00002 6.5174 4 6.5H3.25C2.83579 6.5 2.5 6.16421 2.5 5.75C2.5 5.33579 2.83579 5 3.25 5H7.86816C8.31813 3.13509 9.99703 1.75003 12 1.75ZM14.7803 10.4697C14.5057 10.1951 14.0709 10.1777 13.7764 10.418L13.7197 10.4697L12 12.1895L10.2803 10.4697L10.2236 10.418C9.92905 10.1777 9.49433 10.1951 9.21973 10.4697C8.94512 10.7443 8.92766 11.1791 9.16797 11.4736L9.21973 11.5303L10.9395 13.25L9.21973 14.9697C8.92683 15.2626 8.92683 15.7374 9.21973 16.0303C9.51262 16.3232 9.98738 16.3232 10.2803 16.0303L12 14.3105L13.7197 16.0303L13.7764 16.082C14.0709 16.3223 14.5057 16.3049 14.7803 16.0303C15.0549 15.7557 15.0723 15.3209 14.832 15.0264L14.7803 14.9697L13.0605 13.25L14.7803 11.5303L14.832 11.4736C15.0723 11.1791 15.0549 10.7443 14.7803 10.4697ZM12 3.25C10.8343 3.25003 9.83746 3.97588 9.4375 5H14.5625C14.1625 3.97588 13.1657 3.25 12 3.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 6.5L5.58982 18.4601C5.70016 20.0316 7.00714 21.25 8.58245 21.25H15.4175C16.9929 21.25 18.2998 20.0316 18.4102 18.4601L19.25 6.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.25 5.75H20.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.52466 5.58289C8.73085 3.84652 10.2082 2.5 12.0001 2.5C13.7919 2.5 15.2693 3.84652 15.4755 5.58289"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 11L14.25 15.5M14.25 11L9.75 15.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTrashPermanently;
