import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTelescope: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="telescope, deep-search, research">
		{variant === "filled" ? (
			<>
				<path
					d="M15.0343 4.52781C13.9963 4.9056 13.4611 6.05328 13.8389 7.09124L15.72 12.2595C16.0978 13.2975 17.2455 13.8327 18.2835 13.4549L22.0422 12.0868C23.0802 11.709 23.6154 10.5613 23.2376 9.52339L21.3565 4.35508C20.9787 3.31712 19.831 2.78195 18.793 3.15973L15.0343 4.52781Z"
					fill="currentColor"
				/>
				<path
					d="M7.13337 10.5961C6.75558 9.55817 7.29076 8.41048 8.32871 8.0327L12.0875 6.66462L14.6526 13.7123L11.4991 14.8601V19.4999H13.7491C14.1633 19.4999 14.4991 19.8357 14.4991 20.2499C14.4991 20.6642 14.1633 20.9999 13.7491 20.9999H7.74913C7.33492 20.9999 6.99913 20.6642 6.99913 20.2499C6.99913 19.8357 7.33492 19.4999 7.74913 19.4999H9.99913V15.1903C9.26372 15.1119 8.60044 14.6269 8.33044 13.885L7.13337 10.5961Z"
					fill="currentColor"
				/>
				<path
					d="M1.36725 13.7587C0.989468 12.7208 1.52464 11.5731 2.5626 11.1953L5.38168 10.1692L7.26279 15.3375L4.44371 16.3636C3.40575 16.7414 2.25807 16.2062 1.88028 15.1683L1.36725 13.7587Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.87482 10.7456L2.46785 11.9856C1.68938 12.269 1.288 13.1297 1.57134 13.9082L1.99886 15.0828C2.2822 15.8613 3.14297 16.2627 3.92143 15.9793L7.32841 14.7393"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.2873 7.64258L7.38682 9.06222C6.34886 9.44001 5.81369 10.5877 6.19147 11.6256L7.00377 13.8574C7.38155 14.8954 8.52924 15.4305 9.56719 15.0528L13.4676 13.6331"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.2745 5.78896L18.1855 4.00151C18.964 3.71818 19.8247 4.11956 20.1081 4.89802L21.9892 10.0663C22.2725 10.8448 21.8711 11.7056 21.0927 11.9889L16.1817 13.7763C14.8843 14.2486 13.4497 13.5796 12.9774 12.2822L11.7804 8.99324C11.3081 7.69579 11.9771 6.26119 13.2745 5.78896Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path d="M10.75 20.25V14.75" stroke="currentColor" strokeWidth="1.5" />
				<path
					d="M7.75 20.25L13.75 20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTelescope;
