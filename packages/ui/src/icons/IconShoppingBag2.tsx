import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShoppingBag2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="shopping-bag-2">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8.00012 6C8.00012 3.79086 9.79098 2 12.0001 2C14.2093 2 16.0001 3.79086 16.0001 6V7.09439C17.4775 7.43248 18.6411 8.646 18.8713 10.2004L19.9825 17.7004C20.318 19.9656 18.5628 22 16.2729 22H7.72732C5.43743 22 3.68222 19.9656 4.0178 17.7004L5.12891 10.2004C5.3592 8.646 6.52277 7.43249 8.00012 7.09439V6ZM9.50012 7H14.5001V6C14.5001 4.61929 13.3808 3.5 12.0001 3.5C10.6194 3.5 9.50012 4.61929 9.50012 6V7Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.25 7.75V6C15.25 4.20507 13.7949 2.75 12 2.75C10.2051 2.75 8.74998 4.20507 8.74998 6V7.75M7.72716 21.25H16.2728C18.1047 21.25 19.5089 19.6225 19.2404 17.8104L18.1293 10.3104C17.9114 8.83936 16.6487 7.75 15.1617 7.75H8.83828C7.35122 7.75 6.08859 8.83936 5.87066 10.3104L4.75955 17.8104C4.49109 19.6225 5.89525 21.25 7.72716 21.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShoppingBag2;
