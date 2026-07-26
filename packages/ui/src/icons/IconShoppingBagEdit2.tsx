import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShoppingBagEdit2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="shopping-bag-edit-2">
		{variant === "filled" ? (
			<>
				<path
					d="M16.9699 15.6367C17.9071 14.6995 19.4262 14.6996 20.3635 15.6367C21.3007 16.5739 21.3007 18.093 20.3635 19.0303L16.6135 22.7803C16.4728 22.9208 16.2821 23 16.0832 23H13.7502C13.336 22.9999 13.0002 22.6642 13.0002 22.25V19.917C13.0002 19.7181 13.0794 19.5274 13.2199 19.3867L16.9699 15.6367Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M12.0002 2C14.2093 2 16.0002 3.79086 16.0002 6V7.09473C17.4775 7.4328 18.6409 8.6459 18.8713 10.2002L19.3596 13.4951C18.1455 13.2772 16.8477 13.637 15.9094 14.5752L11.8664 18.6182C11.6322 18.8525 11.5003 19.1706 11.5002 19.502V22H7.72775C5.43797 21.9999 3.68224 19.9653 4.01778 17.7002L5.12911 10.2002C5.35947 8.64601 6.52312 7.43293 8.00021 7.09473V6C8.00021 3.79097 9.79122 2.00018 12.0002 2ZM12.0002 3.5C10.6196 3.50018 9.50021 4.6194 9.50021 6V7H14.5002V6C14.5002 4.61929 13.3809 3.5 12.0002 3.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.25 7.75V6C15.25 4.20507 13.7949 2.75 12 2.75C10.2051 2.75 8.75 4.20507 8.75 6V7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.75 21.25H7.72719C5.89528 21.25 4.49111 19.6225 4.75958 17.8104L5.87069 10.3104C6.08861 8.83936 7.35125 7.75 8.8383 7.75H15.1617C16.6488 7.75 17.9114 8.83936 18.1293 10.3104L18.4898 12.7437"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 22.2502V19.9168L17.5 16.1668C18.1443 15.5225 19.189 15.5225 19.8333 16.1668C20.4777 16.8112 20.4777 17.8558 19.8333 18.5002L16.0833 22.2502H13.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShoppingBagEdit2;
