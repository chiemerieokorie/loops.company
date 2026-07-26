import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCherryOnTop: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="cherry-on-top, cake, birthday">
		{variant === "filled" ? (
			<>
				<path
					d="M22 17.0002C21.9999 19.2093 20.2091 21.0002 18 21.0002H6C3.9603 21.0002 2.27842 19.4732 2.03223 17.5002H15.25C15.6642 17.5002 15.9999 17.1643 16 16.7502C16 16.336 15.6642 16.0002 15.25 16.0002H2V12.5002H22V17.0002Z"
					fill="currentColor"
				/>
				<path
					d="M12.71 2.80879C13.754 2.3407 15.0009 2.31785 16.0703 2.96015C19.0363 4.74179 20.8724 7.2224 21.9551 10.7033C21.9853 10.8005 21.999 10.9008 21.999 11.0002H2C2.0003 10.6865 2.14866 10.3833 2.41211 10.1916L6.23438 7.41035C6.91232 8.65525 8.2327 9.50019 9.75 9.50019C11.959 9.50019 13.7498 7.70918 13.75 5.50019C13.75 4.46406 13.3563 3.51929 12.71 2.80879Z"
					fill="currentColor"
				/>
				<path
					d="M9.75 3.00019C11.1307 3.00019 12.25 4.11948 12.25 5.50019C12.2499 6.88083 11.1307 8.00019 9.75 8.00019C8.36934 8.00019 7.25009 6.88083 7.25 5.50019C7.25 4.11948 8.36929 3.00019 9.75 3.00019Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M7.375 7.61631L3.98365 10.0867C3.20849 10.6513 2.75 11.5525 2.75 12.5115V17.25C2.75 18.9069 4.09315 20.25 5.75 20.25H18.25C19.9069 20.25 21.25 18.9069 21.25 17.25V11.4404C21.25 11.1387 21.2061 10.8378 21.1097 10.5519C20.0452 7.3987 18.3242 5.18562 15.6139 3.56687C14.6811 3.00969 13.5114 3.14635 12.6331 3.78613L12 4.24733"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 11.75H21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 16H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10 9.25C11.5188 9.25 12.75 8.01878 12.75 6.5C12.75 4.98122 11.5188 3.75 10 3.75C8.48122 3.75 7.25 4.98122 7.25 6.5C7.25 8.01878 8.48122 9.25 10 9.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCherryOnTop;
