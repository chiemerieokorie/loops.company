import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconUserBlock: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="user-block, people, person, member, blocked"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M18 13C20.3472 13 22.25 14.9028 22.25 17.25C22.25 19.5972 20.3472 21.5 18 21.5C15.6528 21.5 13.75 19.5972 13.75 17.25C13.75 14.9028 15.6528 13 18 13ZM16.6572 19.6475C17.0546 19.8705 17.5118 20 18 20C19.5188 20 20.75 18.7688 20.75 17.25C20.75 16.7618 20.6205 16.3046 20.3975 15.9072L16.6572 19.6475ZM18 14.5C16.4812 14.5 15.25 15.7312 15.25 17.25C15.25 17.7352 15.3771 18.1902 15.5977 18.5859L19.3359 14.8477C18.9402 14.6271 18.4852 14.5 18 14.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M8.06934 12.1094C9.14306 12.979 10.5107 13.5 12 13.5C12.6707 13.5 13.3163 13.393 13.9219 13.1973C12.8888 14.2368 12.25 15.6686 12.25 17.25C12.25 18.6834 12.776 19.993 13.6436 21H6.5957C5.16224 20.9998 4.00024 19.8378 4 18.4043C4 15.6021 5.6706 13.1915 8.06934 12.1094Z"
					fill="currentColor"
				/>
				<path
					d="M12 2.5C14.6234 2.5 16.75 4.62665 16.75 7.25C16.75 9.87335 14.6234 12 12 12C9.37665 12 7.25 9.87335 7.25 7.25C7.25 4.62665 9.37665 2.5 12 2.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="7.75"
					r="4.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.0018 12.25C8.22236 12.25 5.87133 14.4212 4.94874 17.2952C4.44232 18.8728 5.84498 20.25 7.50184 20.25H11.252"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="18"
					cy="17.25"
					r="3.5"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M15.7461 19.5L20.2461 15"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconUserBlock;
