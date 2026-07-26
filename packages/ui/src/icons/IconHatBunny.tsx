import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconHatBunny: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="hat-bunny, surprise, magic hat">
		{variant === "filled" ? (
			<>
				<path
					d="M11 10.0001H6C5.15408 6.61645 5.43865 4.19023 6.38068 1.62896C6.62994 0.951257 7.50427 0.810071 7.94014 1.38576C9.84142 3.89692 10.7409 6.67368 11 10.0001Z"
					fill="currentColor"
				/>
				<path
					d="M18 10.0001H13C13.0654 7.49783 13.5483 1.70463 17.4966 2.9194C19.1707 3.43446 20.385 4.73838 21.4276 6.13642C21.933 6.81409 21.3806 7.76724 20.5379 7.70065L18 7.50014C18 7.50014 18.5 9.00014 18 10.0001Z"
					fill="currentColor"
				/>
				<path
					d="M2.75 12.5002H4V18.2502C4 20.3213 5.67893 22.0002 7.75 22.0002H16.25C18.3211 22.0002 20 20.3213 20 18.2502V12.5002H21.25C21.6642 12.5002 22 12.1645 22 11.7502C22 11.336 21.6642 11.0002 21.25 11.0002H2.75C2.33579 11.0002 2 11.336 2 11.7502C2 12.1645 2.33579 12.5002 2.75 12.5002Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 11.75V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V11.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 11.75H2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.0024 11.3409C13.0428 7.97648 13.5658 5.53358 15.0544 4.04673C16.6027 2.50024 20.7072 7.12797 20.7072 7.12797L17.4999 8.00027C17.4999 8.90998 17.6263 9.99294 16.8754 11.3409"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.03491 11.3407C6.86947 10.7169 6.72751 10.1523 6.61698 9.37715C6.05195 5.41447 7.66719 1.75 7.66719 1.75C7.66719 1.75 10.1985 4.51031 10.7636 8.47299C10.9201 9.57102 10.9972 10.4328 11.0025 11.3407"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconHatBunny;
