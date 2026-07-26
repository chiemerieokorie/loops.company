import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSticker: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="sticker, badge">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 12C2 6.47715 6.47715 2 12 2C12.9072 2 13.7068 2.42482 14.2863 3.00434L20.9957 9.71368C21.5752 10.2932 22 11.0928 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM20.5073 11.4578C16.0071 12 12.0073 8 12.5494 3.5L20.5073 11.4578Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 11.3334 20.9367 10.7154 20.4653 10.244L13.756 3.53467C13.2846 3.0633 12.6666 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.0416 3C12.4995 7.5 16.4993 11.5 20.9995 10.9578"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M14 5.5L18.5 10"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="2"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSticker;
