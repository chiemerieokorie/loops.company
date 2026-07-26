import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBezierPointer: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bezier-pointer">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M11.5406 13.1223C11.2649 12.1572 12.1572 11.2649 13.1223 11.5406L19.9539 13.4925C21.0577 13.8079 21.2197 15.3049 20.209 15.8492L17.3751 17.3751L15.8492 20.209C15.3049 21.2197 13.8079 21.0577 13.4925 19.9539L11.5406 13.1223ZM13.092 13.092L14.7857 19.02L16.0858 16.6057C16.2045 16.3853 16.3852 16.2045 16.6057 16.0858L19.02 14.7857L13.092 13.092Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M5.25 3C4.00736 3 3 4.00736 3 5.25V6.75C3 7.99264 4.00736 9 5.25 9V15C4.00736 15 3 16.0074 3 17.25V18.75C3 19.9926 4.00736 21 5.25 21H6.5C7.74264 21 8.75 19.9926 8.75 18.75H10.25C10.6642 18.75 11 18.4142 11 18C11 17.5858 10.6642 17.25 10.25 17.25H8.75C8.75 16.0919 7.87499 15.1381 6.75 15.0137V9C7.99264 9 9 7.99264 9 6.75H15C15 7.99264 16.0074 9 17.25 9V10.25C17.25 10.6642 17.5858 11 18 11C18.4142 11 18.75 10.6642 18.75 10.25V9C19.9926 9 21 7.99264 21 6.75V5.25C21 4.00736 19.9926 3 18.75 3H17.25C16.0074 3 15 4.00736 15 5.25H9C9 4.00736 7.99264 3 6.75 3H5.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 5.25C3.75 4.42157 4.42157 3.75 5.25 3.75H6.75C7.57843 3.75 8.25 4.42157 8.25 5.25V6.75C8.25 7.57843 7.57843 8.25 6.75 8.25H5.25C4.42157 8.25 3.75 7.57843 3.75 6.75V5.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 5.25C15.75 4.42157 16.4216 3.75 17.25 3.75H18.75C19.5784 3.75 20.25 4.42157 20.25 5.25V6.75C20.25 7.57843 19.5784 8.25 18.75 8.25H18H17.25C16.4216 8.25 15.75 7.57843 15.75 6.75V6V5.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 17.25C3.75 16.4216 4.42157 15.75 5.25 15.75H6.5C7.32843 15.75 8 16.4216 8 17.25V18V18.75C8 19.5784 7.32843 20.25 6.5 20.25H5.25C4.42157 20.25 3.75 19.5784 3.75 18.75V17.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.7473 14.2136L12.9157 12.2617C12.5164 12.1476 12.1471 12.5169 12.2613 12.9162L14.2131 19.7478C14.3436 20.2045 14.9631 20.2716 15.1883 19.8533L16.7456 16.9612C16.7947 16.87 16.8695 16.7952 16.9607 16.7461L19.8528 15.1888C20.2711 14.9636 20.204 14.3441 19.7473 14.2136Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 6H8.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 8.25V15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 8.25V10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8 18H10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBezierPointer;
