import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCap: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="cap, fan">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.336 4.62071C6.45334 5.29133 3.5 8.67577 3.5 12.75V13.806C4.97965 13.1956 6.42642 12.7399 7.85699 12.439C7.96151 9.37908 9.21524 6.44152 10.336 4.62071ZM12 4.8185C10.9599 6.28992 9.55991 9.17852 9.37131 12.1775C11.129 11.9408 12.871 11.9408 14.6287 12.1775C14.4401 9.17852 13.0401 6.28992 12 4.8185ZM16.143 12.439C17.5736 12.7399 19.0204 13.1956 20.5 13.806V12.75C20.5 8.67577 17.5467 5.29133 13.664 4.62071C14.7848 6.44152 16.0385 9.37908 16.143 12.439ZM2 12.75C2 7.36522 6.36522 3 11.75 3H12.25C17.6348 3 22 7.36522 22 12.75V18.1792C22 19.4764 20.6696 20.2758 19.5307 19.8236C14.4571 17.8092 9.5429 17.8092 4.46933 19.8236C3.33038 20.2758 2 19.4764 2 18.1792V12.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 12.75V18.1792C2.75 18.911 3.51244 19.3966 4.19257 19.1265C9.4439 17.0416 14.5561 17.0416 19.8074 19.1265C20.4876 19.3966 21.25 18.911 21.25 18.1792V12.75C21.25 7.77944 17.2206 3.75 12.25 3.75H11.75C6.77944 3.75 2.75 7.77944 2.75 12.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3 14.837C9.23113 12.0543 14.7689 12.0543 21 14.837"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.3984 4.09717C13.593 5.65113 15.3984 9.21418 15.3984 12.8472"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.6016 4.09717C10.407 5.65113 8.60156 9.21418 8.60156 12.8472"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCap;
