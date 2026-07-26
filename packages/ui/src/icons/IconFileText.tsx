import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFileText: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="file-text, document">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 7.25C12 8.76878 13.2312 10 14.75 10H20V18.25C20 20.3211 18.3211 22 16.25 22H7.75C5.67893 22 4 20.3211 4 18.25V5.75C4 3.67893 5.67893 2 7.75 2H12V7.25ZM8.75 17.5C8.33579 17.5 8 17.8358 8 18.25C8 18.6642 8.33579 19 8.75 19H15.25C15.6642 19 16 18.6642 16 18.25C16 17.8358 15.6642 17.5 15.25 17.5H8.75ZM8.75 13.5C8.33579 13.5 8 13.8358 8 14.25C8 14.6642 8.33579 15 8.75 15H12.25C12.6642 15 13 14.6642 13 14.25C13 13.8358 12.6642 13.5 12.25 13.5H8.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M13.5732 2.5127L19.4873 8.42676C19.5111 8.45056 19.5344 8.475 19.5566 8.5H14.75C14.0597 8.5 13.5 7.94032 13.5 7.25V2.44336C13.525 2.46564 13.5494 2.48889 13.5732 2.5127Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11.9216 2.75H7.75C6.09315 2.75 4.75 4.09315 4.75 5.75V18.25C4.75 19.9069 6.09315 21.25 7.75 21.25H16.25C17.9069 21.25 19.25 19.9069 19.25 18.25V10.0784C19.25 9.54799 19.0393 9.03929 18.6642 8.66421L13.3358 3.33579C12.9607 2.96071 12.452 2.75 11.9216 2.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 3.25V7.25C12.75 8.35457 13.6454 9.25 14.75 9.25H18.75"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 13.25H12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 17.25H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFileText;
