import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBlankPageLandscape: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="blank-page-landscape">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H18.25C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H8.03571C7.11036 20 6.21024 19.6988 5.47046 19.1421C3.28523 17.4977 2 14.9176 2 12.1786V7.75ZM8.40278 18.5C7.95491 18.5 7.67294 18.3509 7.47649 18.1446C7.26297 17.9204 7.10109 17.5737 7.02165 17.122C6.85834 16.1935 7.09036 15.104 7.4858 14.5088C7.68314 14.2118 7.64406 13.8169 7.39233 13.5643L6.29151 12.4598C5.59094 11.7568 4.7349 11.1265 4.12633 10.3371C3.74052 9.83664 3.5 9.24738 3.5 8V7.75C3.5 6.50736 4.50736 5.5 5.75 5.5H18.25C19.4926 5.5 20.5 6.50736 20.5 7.75V16.25C20.5 17.4926 19.4926 18.5 18.25 18.5H8.40278Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 4.75H18.25C19.9069 4.75 21.25 6.09315 21.25 7.75V16.25C21.25 17.9069 19.9069 19.25 18.25 19.25H8.40278H8.03571C7.27327 19.25 6.53139 19.0019 5.92143 18.5429C3.92497 17.0405 2.75 14.6826 2.75 12.1786V8V7.75C2.75 6.09315 4.09315 4.75 5.75 4.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.40278 19.25C5.83333 19.25 5.83333 15.6406 6.86111 14.0938L5.76029 12.9892C3.83283 11.0552 2.75 10.735 2.75 8"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBlankPageLandscape;
