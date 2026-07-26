import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconThumbsUp: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="thumbs-up, thumb, hand, yes, pro">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M11.611 2C10.9567 2 10.3546 2.36515 10.054 2.94858L6.42148 10H3.75C2.7835 10 2 10.7835 2 11.75V19.25C2 20.2165 2.7835 21 3.75 21H17.422C19.2752 21 20.8505 19.6463 21.1293 17.8142L21.9663 12.3142C22.3117 10.0444 20.5548 8 18.2589 8H13.8921L14.3328 5.17364C14.5932 3.50371 13.2962 2 11.611 2ZM6 11.5V19.5H3.75C3.61193 19.5 3.5 19.3881 3.5 19.25V11.75C3.5 11.6119 3.61193 11.5 3.75 11.5H6Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 10.75H3.75C3.19772 10.75 2.75 11.1977 2.75 11.75V19.25C2.75 19.8023 3.19772 20.25 3.75 20.25H6.75M6.75 20.25V11L10.7208 3.29204C10.8922 2.95918 11.2365 2.75 11.611 2.75C12.8384 2.75 13.7808 3.84535 13.5917 5.0581L13.0161 8.75H18.2589C20.0956 8.75 21.5011 10.3856 21.2248 12.2013L20.3878 17.7013C20.1648 19.167 18.9046 20.25 17.422 20.25H6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconThumbsUp;
