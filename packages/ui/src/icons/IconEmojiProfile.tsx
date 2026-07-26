import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconEmojiProfile: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="emoji-profile">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM8.75 10.5C9.44036 10.5 10 9.94036 10 9.25C10 8.55964 9.44036 8 8.75 8C8.05964 8 7.5 8.55964 7.5 9.25C7.5 9.94036 8.05964 10.5 8.75 10.5ZM15 9.25C15 9.94036 14.4404 10.5 13.75 10.5C13.0596 10.5 12.5 9.94036 12.5 9.25C12.5 8.55964 13.0596 8 13.75 8C14.4404 8 15 8.55964 15 9.25ZM18.1915 12.8575C18.2479 12.4471 17.9609 12.0688 17.5505 12.0124C17.1402 11.956 16.7618 12.243 16.7055 12.6534C16.4168 14.7547 14.7511 16.4193 12.6492 16.7061C12.2388 16.7621 11.9515 17.1402 12.0075 17.5506C12.0635 17.961 12.4416 18.2483 12.852 18.1923C15.6209 17.8144 17.8113 15.6257 18.1915 12.8575Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M9.25 9.25C9.25 9.52614 9.02614 9.75 8.75 9.75C8.47386 9.75 8.25 9.52614 8.25 9.25C8.25 8.97386 8.47386 8.75 8.75 8.75C9.02614 8.75 9.25 8.97386 9.25 9.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.5 9.25H9"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.25 9.25C14.25 9.52614 14.0261 9.75 13.75 9.75C13.4739 9.75 13.25 9.52614 13.25 9.25C13.25 8.97386 13.4739 8.75 13.75 8.75C14.0261 8.75 14.25 8.97386 14.25 9.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.5 9.25H14"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.4486 12.7507C17.1161 15.1864 15.1891 17.1146 12.7539 17.4487"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconEmojiProfile;
