import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFire1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="fire-1, flame, hot, heat">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.5 13.8626C3.5 9.8884 5.58169 6.80366 7.5889 4.75074C8.78384 3.5286 10.1393 2.45286 11.6196 1.59613C11.8531 1.46103 12.1419 1.46968 12.3701 1.61355C13.8269 2.53223 15.1905 3.50233 16.4111 4.75074C18.4183 6.80366 20.5 9.8884 20.5 13.8626C20.5 16.5404 19.4371 18.5976 17.8128 19.9739C16.2049 21.3364 14.088 21.9992 12.0003 21.9999C9.91252 22.0007 7.79538 21.3393 6.18728 19.977C4.56274 18.6009 3.5 16.5428 3.5 13.8626ZM12.3516 11.9648C12.1366 11.8197 11.8634 11.8197 11.6484 11.9648C10.7609 12.564 8.5 14.3591 8.5 17.0973C8.5 21.6356 15.5 21.6307 15.5 17.0973C15.5 14.3591 13.2391 12.564 12.3516 11.9648Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.75 13.8679C19.75 23.7053 4.25 23.7161 4.25 13.8679C4.25 6.4747 12 2.25 12 2.25C12 2.25 19.75 6.4747 19.75 13.8679Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 17.4618C15.75 22.51 8.25 22.5155 8.25 17.4618C8.25 13.6679 12 11.5 12 11.5C12 11.5 15.75 13.6679 15.75 17.4618Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFire1;
