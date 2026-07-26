import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBookmark: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bookmark, banner, flag, tag">
		{variant === "filled" ? (
			<>
				<path
					d="M7.75 2C5.67893 2 4 3.67893 4 5.75V20.2515C4 21.6527 5.56475 22.4857 6.72719 21.7032L10.7436 18.9997C11.5032 18.4885 12.4968 18.4885 13.2564 18.9998L17.2728 21.7032C18.4353 22.4857 20 21.6527 20 20.2515V5.75C20 3.67893 18.3211 2 16.25 2H7.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 20.2515V5.75C19.25 4.09315 17.9069 2.75 16.25 2.75H7.75C6.09315 2.75 4.75 4.09315 4.75 5.75V20.2515C4.75 21.0522 5.64414 21.5281 6.30839 21.081L10.3248 18.3776C11.3376 17.6959 12.6624 17.6959 13.6752 18.3776L17.6916 21.081C18.3559 21.5282 19.25 21.0522 19.25 20.2515Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBookmark;
