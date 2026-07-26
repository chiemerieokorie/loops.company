import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCloudApi: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="cloud-api, cloud-network">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C14.6677 2 16.869 3.99 17.2041 6.56641C18.9386 6.89594 20.25 8.41963 20.25 10.25C20.25 12.3211 18.5711 14 16.5 14H12.75V15.5879C13.9424 15.8696 14.8804 16.8076 15.1621 18H21.25C21.6642 18 22 18.3358 22 18.75C22 19.1642 21.6642 19.5 21.25 19.5H15.1621C14.8235 20.9332 13.5367 22 12 22C10.4633 22 9.17655 20.9332 8.83789 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75C2 18.3358 2.33579 18 2.75 18H8.83789C9.11964 16.8076 10.0576 15.8696 11.25 15.5879V14H8.25C5.76472 14 3.75 11.9853 3.75 9.5C3.75 7.37663 5.22012 5.59795 7.19824 5.12402C8.01392 3.28444 9.85622 2 12 2ZM12 17C11.0335 17 10.25 17.7835 10.25 18.75C10.25 19.7165 11.0335 20.5 12 20.5C12.9665 20.5 13.75 19.7165 13.75 18.75C13.75 17.7835 12.9665 17 12 17Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.25 13.25C6.17893 13.25 4.5 11.5711 4.5 9.5C4.5 7.60044 5.91237 6.03077 7.74426 5.78381C8.35237 4.01838 10.0281 2.75 12 2.75C14.4853 2.75 16.5 4.76472 16.5 7.25C18.1569 7.25 19.5 8.59315 19.5 10.25C19.5 11.9069 18.1569 13.25 16.5 13.25H8.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="12"
					cy="18.75"
					r="2.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.5 18.75H2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 18.75H14.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 16V13.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCloudApi;
