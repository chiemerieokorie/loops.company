import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBookmarkRemove: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bookmark-remove, off">
		{variant === "filled" ? (
			<>
				<path
					d="M7.75 2C5.67893 2 4 3.67893 4 5.75V13.6282L1.49227 14.5456C1.10328 14.688 0.903302 15.1187 1.04562 15.5077C1.18793 15.8967 1.61865 16.0966 2.00765 15.9543L22.5076 8.45433C22.8966 8.31202 23.0966 7.8813 22.9543 7.4923C22.812 7.10331 22.3813 6.90333 21.9923 7.04565L20 7.77453V5.75C20 3.67893 18.3211 2 16.25 2H7.75Z"
					fill="currentColor"
				/>
				<path
					d="M4 20.2515V16.8227L20 10.969V20.2515C20 21.6527 18.4353 22.4857 17.2728 21.7032L13.2564 18.9998C12.4968 18.4885 11.5032 18.4885 10.7436 18.9997L6.72719 21.7032C5.56475 22.4857 4 21.6527 4 20.2515Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 8.84756V5.75C19.25 4.09315 17.9069 2.75 16.25 2.75H7.75C6.09315 2.75 4.75 4.09315 4.75 5.75V14.1524M19.25 12.75V20.2515C19.25 21.0522 18.3559 21.5282 17.6916 21.081L13.6752 18.3776C12.6624 17.6959 11.3376 17.6959 10.3248 18.3776L6.30839 21.081C5.64414 21.5281 4.75 21.0522 4.75 20.2515V18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M1.75 15.25L22.25 7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBookmarkRemove;
