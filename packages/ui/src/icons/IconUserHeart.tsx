import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconUserHeart: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="user-heart, people, person, member, favorite"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M18 14C18.9164 13.6165 19.892 13.4387 20.6875 13.8936C21.633 14.4343 22.2529 15.4687 22.2529 16.6904C22.2527 18.3433 21.111 19.5059 20.2285 20.1699C19.5451 20.6841 18.7938 21.0659 18.001 21.3779C17.2087 21.0652 16.4576 20.684 15.7744 20.1699C14.8919 19.5059 13.7502 18.3434 13.75 16.6904C13.75 15.4666 14.3339 14.4549 15.3154 13.8936C16.1108 13.4388 17.0837 13.6168 18 14Z"
					fill="currentColor"
				/>
				<path
					d="M8.06934 12.1094C9.14306 12.979 10.5107 13.5 12 13.5C12.5747 13.5 13.1307 13.4207 13.6592 13.2754C12.755 14.1458 12.2501 15.3549 12.25 16.6904C12.2506 18.7335 13.4527 20.1658 14.416 21H6.5957C5.16224 20.9998 4.00024 19.8378 4 18.4043C4 15.6021 5.6706 13.1915 8.06934 12.1094Z"
					fill="currentColor"
				/>
				<path
					d="M12 2.5C14.6234 2.5 16.75 4.62665 16.75 7.25C16.75 9.87335 14.6234 12 12 12C9.37665 12 7.25 9.87335 7.25 7.25C7.25 4.62665 9.37665 2.5 12 2.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M16.5 7.75C16.5 10.2353 14.4853 12.25 12 12.25C9.51472 12.25 7.5 10.2353 7.5 7.75C7.5 5.26472 9.51472 3.25 12 3.25C14.4853 3.25 16.5 5.26472 16.5 7.75Z"
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
				<path
					d="M21.2237 16.7646C21.2237 19.1763 17.8618 20.5 17.8618 20.5C17.8618 20.5 14.5 19.1763 14.5 16.7646C14.5 14.9571 16.307 13.881 17.8618 14.8852C19.4167 13.881 21.2237 14.9571 21.2237 16.7646Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconUserHeart;
