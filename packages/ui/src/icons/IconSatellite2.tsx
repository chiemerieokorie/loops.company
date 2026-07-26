import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSatellite2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="satellite-2, radar, feed">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M18.5695 10.4443C19.6369 9.36925 19.6339 7.63337 18.5626 6.56212L17.4379 5.4374C16.3667 4.36617 14.6308 4.36307 13.5557 5.43048L6.93944 11.9998C5.65426 12.0041 4.37042 12.4965 3.38986 13.4771C3.2492 13.6177 3.17019 13.8085 3.17019 14.0074C3.17019 14.2063 3.2492 14.3971 3.38986 14.5377L5.89569 17.0436L4.21981 18.7194C3.92692 19.0123 3.92692 19.4872 4.21981 19.7801C4.51271 20.073 4.98758 20.073 5.28047 19.7801L6.95635 18.1042L9.46223 20.6101C9.75512 20.903 10.23 20.903 10.5229 20.6101C11.5035 19.6295 11.9959 18.3456 12.0002 17.0604L18.5695 10.4443Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M8.50026 2.49978C7.53377 1.53328 5.96676 1.53328 5.00027 2.49978L3.50026 3.99978C2.53377 4.96627 2.53377 6.53328 3.50026 7.49978L8.50026 2.49978Z"
					fill="currentColor"
				/>
				<path
					d="M9.50026 3.49978L4.50026 8.49978L6.25026 10.2498L11.2503 5.24978L9.50026 3.49978Z"
					fill="currentColor"
				/>
				<path
					d="M18.7503 12.7498L13.7503 17.7498L15.5003 19.4998L20.5003 14.4998L18.7503 12.7498Z"
					fill="currentColor"
				/>
				<path
					d="M21.5003 15.4998L16.5003 20.4998C17.4668 21.4663 19.0338 21.4663 20.0003 20.4998L21.5003 18.9998C22.4668 18.0333 22.4668 16.4663 21.5003 15.4998Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M7.5 12.4998L14 5.99981C15.1046 4.89524 16.8954 4.89524 18 5.99981C19.1046 7.10438 19.1046 8.89524 18 9.99981L11.5 16.4998"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.5 17.5L4.75 19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.99229 20.08C11.6691 18.4032 11.6691 15.6845 9.99229 14.0076C8.31545 12.3308 5.59676 12.3308 3.91992 14.0076L9.99229 20.08Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.2696 4L8.94789 2.66859C8.17 1.885 6.90427 1.88004 6.12026 2.65751L4.17571 4.58581C3.38907 5.36589 3.38641 6.63679 4.16977 7.42015L5.49962 8.75M10.2696 4L12.9996 6.75M10.2696 4L5.49962 8.75M5.49962 8.75L8.24962 11.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20 13.75L21.3298 15.0798C22.1132 15.8632 22.1105 17.1341 21.3239 17.9142L19.3794 19.8425C18.5953 20.62 17.3296 20.615 16.5517 19.8314L15.23 18.5M20 13.75L17.25 11M20 13.75L15.23 18.5M15.23 18.5L12.5 15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSatellite2;
