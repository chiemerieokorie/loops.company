import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCd: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="cd, disc, vinyl, dvd, dj, spin, music, album"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM17.96 13.0303C17.5638 12.9099 17.145 13.1332 17.0244 13.5293C16.5175 15.1971 15.2005 16.5153 13.5332 17.0234C13.1371 17.1443 12.9134 17.5638 13.0342 17.96C13.1552 18.3557 13.5748 18.5786 13.9707 18.458C16.1161 17.804 17.8066 16.1119 18.459 13.9658C18.5794 13.5696 18.3561 13.1508 17.96 13.0303ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM10.9648 6.04199C10.844 5.64579 10.4245 5.42214 10.0283 5.54297C7.88255 6.19746 6.19168 7.89105 5.54004 10.0381C5.42026 10.4342 5.64393 10.8534 6.04004 10.9736C6.43611 11.0937 6.85507 10.8695 6.97559 10.4736C7.48194 8.8053 8.79848 7.4872 10.4658 6.97852C10.8618 6.85774 11.0853 6.43804 10.9648 6.04199Z"
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
					d="M10.2473 6.26025C8.3406 6.84176 6.83684 8.3473 6.25781 10.2551M17.7418 13.7472C17.1622 15.6544 15.6584 17.1594 13.7518 17.7404"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="12"
					cy="12"
					r="2.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCd;
