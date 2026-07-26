import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronGrabberVertical: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chevron-grabber-vertical">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12.3536 6.41403C12.1583 6.21876 11.8417 6.21876 11.6464 6.41402L8.53033 9.53014C8.23744 9.82303 7.76256 9.82303 7.46967 9.53014C7.17678 9.23725 7.17678 8.76237 7.46967 8.46948L10.5858 5.35336C11.3668 4.57231 12.6332 4.57232 13.4142 5.35337L16.5303 8.46948C16.8232 8.76237 16.8232 9.23725 16.5303 9.53014C16.2374 9.82303 15.7626 9.82303 15.4697 9.53014L12.3536 6.41403ZM7.46967 14.4695C7.76256 14.1766 8.23744 14.1766 8.53033 14.4695L11.6464 17.5856C11.8417 17.7809 12.1583 17.7809 12.3536 17.5856L15.4697 14.4695C15.7626 14.1766 16.2374 14.1766 16.5303 14.4695C16.8232 14.7624 16.8232 15.2372 16.5303 15.5301L13.4142 18.6463C12.6332 19.4273 11.3668 19.4273 10.5858 18.6463L7.46967 15.5301C7.17678 15.2372 7.17678 14.7624 7.46967 14.4695Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8 8.99981L11.1161 5.88369C11.6043 5.39554 12.3957 5.39554 12.8839 5.8837L16 8.99981"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16 15L12.8839 18.1161C12.3957 18.6043 11.6043 18.6043 11.1161 18.1161L8 15"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronGrabberVertical;
