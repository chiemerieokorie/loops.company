import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconEmojiWinkTongue: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="emoji-wink-tongue, fun">
		{variant === "filled" ? (
			<>
				<path
					d="M13.25 15.75C13.25 16.4404 12.6904 17 12 17C11.3096 17 10.75 16.4404 10.75 15.75V14.5H13.25V15.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM7.75 13C7.33579 13 7 13.3358 7 13.75C7 14.1642 7.33579 14.5 7.75 14.5H9.25V15.75C9.25 17.2688 10.4812 18.5 12 18.5C13.5188 18.5 14.75 17.2688 14.75 15.75V14.5H16.25C16.6642 14.5 17 14.1642 17 13.75C17 13.3358 16.6642 13 16.25 13H7.75ZM9.25 8C8.42157 8 7.75 8.79582 7.75 9.90039C7.75016 11.0047 8.42167 11.75 9.25 11.75C10.0783 11.75 10.7498 11.0047 10.75 9.90039C10.75 8.79582 10.0784 8 9.25 8ZM14.625 9C13.5895 9 12.75 9.52167 12.75 10.2461C12.75 11.5 13.5895 10.6885 14.625 10.6885C15.6605 10.6885 16.5 11.5 16.5 10.2461C16.5 9.52167 15.6605 9 14.625 9Z"
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
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.75 9.9C10.75 11.0046 10.0784 11.75 9.25 11.75C8.42157 11.75 7.75 11.0046 7.75 9.9C7.75 8.79543 8.42157 8 9.25 8C10.0784 8 10.75 8.79543 10.75 9.9Z"
					fill="currentColor"
				/>
				<path
					d="M7.75 13.75H16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10 14.5V15.75C10 16.8546 10.8954 17.75 12 17.75C13.1046 17.75 14 16.8546 14 15.75V14.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.5 10.2461C16.5 11.5 15.6605 10.6886 14.625 10.6886C13.5895 10.6886 12.75 11.5 12.75 10.2461C12.75 9.52169 13.5895 9 14.625 9C15.6605 9 16.5 9.52169 16.5 10.2461Z"
					fill="currentColor"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconEmojiWinkTongue;
