import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconEmojiNeutral: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="emoji-neutral">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM8.75 14.75C8.33579 14.75 8 15.0858 8 15.5C8 15.9142 8.33579 16.25 8.75 16.25H15.25C15.6642 16.25 16 15.9142 16 15.5C16 15.0858 15.6642 14.75 15.25 14.75H8.75ZM9.25 7.5C8.42157 7.5 7.75 8.29582 7.75 9.40039C7.75016 10.5047 8.42167 11.25 9.25 11.25C10.0783 11.25 10.7498 10.5047 10.75 9.40039C10.75 8.29582 10.0784 7.5 9.25 7.5ZM14.75 7.5C13.9216 7.5 13.25 8.29582 13.25 9.40039C13.2502 10.5047 13.9217 11.25 14.75 11.25C15.5783 11.25 16.2498 10.5047 16.25 9.40039C16.25 8.29582 15.5784 7.5 14.75 7.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M10.75 9.9C10.75 11.0046 10.0784 11.75 9.25 11.75C8.42157 11.75 7.75 11.0046 7.75 9.9C7.75 8.79543 8.42157 8 9.25 8C10.0784 8 10.75 8.79543 10.75 9.9Z"
					fill="currentColor"
				/>
				<path
					d="M16.25 9.9C16.25 11.0046 15.5784 11.75 14.75 11.75C13.9216 11.75 13.25 11.0046 13.25 9.9C13.25 8.79543 13.9216 8 14.75 8C15.5784 8 16.25 8.79543 16.25 9.9Z"
					fill="currentColor"
				/>
				<path
					d="M8.75 15.25H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconEmojiNeutral;
