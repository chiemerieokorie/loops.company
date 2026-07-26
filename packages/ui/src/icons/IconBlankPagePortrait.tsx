import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBlankPagePortrait: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="blank-page-portrait">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.75 22C5.67893 22 4 20.3211 4 18.25V5.75C4 3.67893 5.67893 2 7.75 2H16.25C18.3211 2 20 3.67893 20 5.75V15.9643C20 16.8896 19.6988 17.7898 19.1421 18.5295C17.4977 20.7148 14.9176 22 12.1786 22H7.75ZM18.5 15.5972C18.5 16.0451 18.3509 16.3271 18.1446 16.5235C17.9204 16.737 17.5737 16.8989 17.122 16.9784C16.1935 17.1417 15.104 16.9096 14.5088 16.5142C14.2118 16.3169 13.8169 16.3559 13.5643 16.6077L12.4598 17.7085C11.7568 18.4091 11.1265 19.2651 10.3371 19.8737C9.83664 20.2595 9.24738 20.5 8 20.5H7.75C6.50736 20.5 5.5 19.4926 5.5 18.25V5.75C5.5 4.50736 6.50736 3.5 7.75 3.5H16.25C17.4926 3.5 18.5 4.50736 18.5 5.75V15.5972Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 18.25V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V15.5972V15.9643C19.25 16.7267 19.0019 17.4686 18.5429 18.0786C17.0405 20.075 14.6826 21.25 12.1786 21.25H8H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 15.5977C19.25 18.1671 15.6406 18.1671 14.0938 17.1393L12.9892 18.2401C11.0552 20.1676 10.735 21.2504 8 21.2504"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBlankPagePortrait;
