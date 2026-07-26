import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCopyright: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="copyright">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM14.3767 9.62334C13.0641 8.31074 10.9359 8.31074 9.62333 9.62334C8.31073 10.9359 8.31073 13.0641 9.62333 14.3767C10.9359 15.6893 13.0641 15.6893 14.3767 14.3767C14.6696 14.0838 15.1444 14.0838 15.4373 14.3767C15.7302 14.6696 15.7302 15.1444 15.4373 15.4373C13.5389 17.3357 10.4611 17.3357 8.56267 15.4373C6.66429 13.5389 6.66429 10.4611 8.56267 8.56268C10.4611 6.66429 13.5389 6.66429 15.4373 8.56268C15.7302 8.85557 15.7302 9.33044 15.4373 9.62334C15.1444 9.91623 14.6696 9.91623 14.3767 9.62334Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.75 11.75C20.75 16.7206 16.7206 20.75 11.75 20.75C6.77944 20.75 2.75 16.7206 2.75 11.75C2.75 6.77944 6.77944 2.75 11.75 2.75C16.7206 2.75 20.75 6.77944 20.75 11.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.5784 14.5784C13.0163 16.1405 10.4837 16.1405 8.92157 14.5784C7.35948 13.0163 7.35948 10.4837 8.92157 8.92157C10.4837 7.35948 13.0163 7.35948 14.5784 8.92157"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCopyright;
