import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTrainFrontView: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="train-front-view, tram">
		{variant === "filled" ? (
			<>
				<path
					d="M7.83615 2C6.95889 2 6.10939 2.30756 5.43546 2.86917L4.34931 3.77429C3.49434 4.48677 3 5.5422 3 6.65512V10.5H21V6.65512C21 5.5422 20.5057 4.48677 19.6507 3.7743L18.5645 2.86917C17.8906 2.30756 17.0411 2 16.1638 2H7.83615Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M3 14.25V12H21V14.25C21 16.2916 19.3685 17.9521 17.3382 17.999L19.3387 22H17.6616L15.6616 18H8.33867L6.33867 22H4.66162L6.66213 17.999C4.63165 17.9523 3 16.2917 3 14.25ZM7 16C7.55228 16 8 15.5523 8 15C8 14.4477 7.55228 14 7 14C6.44772 14 6 14.4477 6 15C6 15.5523 6.44772 16 7 16ZM18 15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15C16 14.4477 16.4477 14 17 14C17.5523 14 18 14.4477 18 15Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.9156 3.44534C6.45474 2.99605 7.13434 2.75 7.83615 2.75H16.1638C16.8657 2.75 17.5453 2.99605 18.0844 3.44534L19.1706 4.35046C19.8545 4.92044 20.25 5.76479 20.25 6.65512V14.25C20.25 15.9069 18.9069 17.25 17.25 17.25H6.75C5.09315 17.25 3.75 15.9069 3.75 14.25V6.65512C3.75 5.76479 4.14547 4.92044 4.82945 4.35046L5.9156 3.44534Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.16222 17L4.84312 21.6382C4.76001 21.8044 4.88088 22 5.06673 22H6.18476C6.27946 22 6.36602 21.9465 6.40837 21.8618L8.67157 17.3354L7.16222 17Z"
					fill="currentColor"
				/>
				<path
					d="M15.3299 17.3354L17.5931 21.8618C17.6355 21.9465 17.722 22 17.8167 22H18.9348C19.1206 22 19.2415 21.8044 19.1584 21.6382L16.8393 17L15.3299 17.3354Z"
					fill="currentColor"
				/>
				<path
					d="M4 11.25H20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle cx="8" cy="14.25" fill="currentColor" r="1" />
				<circle cx="16" cy="14.25" fill="currentColor" r="1" />
			</>
		)}
	</CentralIconBase>
);

export default IconTrainFrontView;
