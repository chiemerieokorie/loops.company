import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChairModern: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chair-modern, seat">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.2446 2C8.49168 2 6.97264 3.21434 6.58663 4.92421L4.659 13.4629C4.42419 13.4031 4.18636 13.3408 3.94525 13.2758C3.5453 13.1681 3.13373 13.405 3.026 13.8049C2.91827 14.2049 3.15516 14.6165 3.55512 14.7242C4.81194 15.0627 5.98734 15.3339 7.11372 15.5377L5.28867 21.0128C5.15769 21.4058 5.37006 21.8305 5.76302 21.9615C6.15597 22.0925 6.58071 21.8801 6.7117 21.4872L8.61641 15.773C10.9237 16.0757 13.0767 16.0757 15.384 15.773L17.2887 21.4872C17.4197 21.8801 17.8444 22.0925 18.2374 21.9615C18.6303 21.8305 18.8427 21.4058 18.7117 21.0128L16.8866 15.5377C18.013 15.3339 19.1884 15.0627 20.4453 14.7242C20.8452 14.6165 21.0821 14.2049 20.9744 13.8049C20.8666 13.405 20.4551 13.1681 20.0551 13.2758C19.814 13.3408 19.5762 13.4031 19.3414 13.4629L17.4137 4.92421C17.0277 3.21434 15.5087 2 13.7558 2H10.2446Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M18.75 14.25L16.682 5.08937C16.3732 3.72147 15.1579 2.75 13.7556 2.75H10.2444C8.84207 2.75 7.62684 3.72147 7.31804 5.08937L5.25 14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 14C14.0625 15.6667 9.9375 15.6667 3.75 14"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8 15.25L6 21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16 15.25L18 21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChairModern;
