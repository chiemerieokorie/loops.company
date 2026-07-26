import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDeliveryBike: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="delivery-bike">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 4.75C12 4.33579 12.3358 4 12.75 4H12.9325C14.4886 4 15.8829 4.96093 16.4369 6.41502L17.6644 9.63731C18.0954 9.54732 18.542 9.5 18.9998 9.5H19.25C19.6642 9.5 20 9.83579 20 10.25C20 10.6642 19.6642 11 19.25 11H18.9998C16.9949 11 15.2641 12.18 14.4669 13.8866C13.9771 14.935 12.9552 15.9988 11.5424 15.9988H10L10 16C10 18.2091 8.20914 20 6 20C3.79086 20 2 18.2091 2 16C2 15.945 2.00593 15.8913 2.01718 15.8396C1.4167 15.5624 1 14.9548 1 14.25V11.75C1 9.67893 2.67893 8 4.75 8H7.25C9.32107 8 11 9.67893 11 11.75V14.25C11 14.3344 10.994 14.4175 10.9825 14.4988H11.5424C12.1387 14.4988 12.7473 14.0236 13.1078 13.2517C13.7511 11.8747 14.8637 10.7596 16.2405 10.1131L15.0351 6.94901C14.7028 6.07656 13.8662 5.5 12.9325 5.5H12.75C12.3358 5.5 12 5.16421 12 4.75ZM8.5 16H3.5C3.5 17.3807 4.61929 18.5 6 18.5C7.38071 18.5 8.5 17.3807 8.5 16ZM19 13.5C17.6193 13.5 16.5 14.6193 16.5 16C16.5 17.3807 17.6193 18.5 19 18.5C20.3807 18.5 21.5 17.3807 21.5 16C21.5 14.6193 20.3807 13.5 19 13.5ZM15 16C15 13.7909 16.7909 12 19 12C21.2091 12 23 13.7909 23 16C23 18.2091 21.2091 20 19 20C16.7909 20 15 18.2091 15 16Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<circle
					cx="19"
					cy="16"
					r="3.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.13672 15.2488H11.5434C12.5479 15.2488 13.3632 14.4793 13.7883 13.5692C14.7042 11.6085 16.6938 10.25 19.0007 10.25H19.251"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 16C9.25 17.7949 7.79493 19.25 6 19.25C4.20507 19.25 2.75 17.7949 2.75 16"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 4.75H12.9325C14.1774 4.75 15.2929 5.51875 15.736 6.68201L17 10"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 15.25H2.75C2.19772 15.25 1.75 14.8023 1.75 14.25V11.75C1.75 10.0931 3.09315 8.75 4.75 8.75H7.25C8.90685 8.75 10.25 10.0931 10.25 11.75V14.25C10.25 14.8023 9.80229 15.25 9.25 15.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDeliveryBike;
