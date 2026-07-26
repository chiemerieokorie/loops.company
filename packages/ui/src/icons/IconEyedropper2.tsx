import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconEyedropper2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="eyedropper-2, color-picker, pipette, suction-tube, labor"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.5303 6.46967L11.5 7.43937L14.4697 4.46973C15.6925 3.24695 17.58 3.0941 18.969 4.01119C19.1674 4.1422 19.3556 4.29505 19.5303 4.46973C20.7531 5.69251 20.906 7.58006 19.9889 8.96903C19.8579 9.16746 19.705 9.35571 19.5303 9.53039L16.5607 12.5L17.5303 13.4697C17.8232 13.7626 17.8232 14.2374 17.5303 14.5303C17.2374 14.8232 16.7626 14.8232 16.4697 14.5303L15.5 13.5607L8.57322 20.4875C8.24503 20.8157 7.79991 21.0001 7.33579 21.0001H4.75C3.7835 21.0001 3 20.2166 3 19.2501V16.6643C3 16.2001 3.18437 15.755 3.51256 15.4268L10.4394 8.50003L9.46967 7.53033C9.17678 7.23744 9.17678 6.76256 9.46967 6.46967C9.76256 6.17678 10.2374 6.17678 10.5303 6.46967ZM11.5 9.56072L14.4393 12.5001L11.9394 15H6.06072L11.5 9.56072Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15 5L4.04289 15.9571C3.85536 16.1446 3.75 16.399 3.75 16.6642V19.25C3.75 19.8023 4.19772 20.25 4.75 20.25H7.33579C7.601 20.25 7.85536 20.1446 8.04289 19.9571L19 9C20.1046 7.89543 20.1046 6.10457 19 5C17.8954 3.89543 16.1046 3.89543 15 5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10 7L17 14"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconEyedropper2;
