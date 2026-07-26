import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSuitcase: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="suitcase, luggage, case">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8.07501 5H6.75C4.67893 5 3 6.67893 3 8.75V17.25C3 19.0642 4.28832 20.5775 6 20.925V21.25C6 21.6642 6.33579 22 6.75 22C7.16421 22 7.5 21.6642 7.5 21.25V21H16.5V21.25C16.5 21.6642 16.8358 22 17.25 22C17.6642 22 18 21.6642 18 21.25V20.925C19.7117 20.5775 21 19.0642 21 17.25V8.75C21 6.67893 19.3211 5 17.25 5H15.925C15.5775 3.28832 14.0642 2 12.25 2H11.75C9.93578 2 8.42247 3.28832 8.07501 5ZM9.62803 5H14.372C14.0631 4.12611 13.2297 3.5 12.25 3.5H11.75C10.7703 3.5 9.93691 4.12611 9.62803 5ZM8.75 9C9.16421 9 9.5 9.33579 9.5 9.75V16.25C9.5 16.6642 9.16421 17 8.75 17C8.33579 17 8 16.6642 8 16.25V9.75C8 9.33579 8.33579 9 8.75 9ZM15.25 9C15.6642 9 16 9.33579 16 9.75V16.25C16 16.6642 15.6642 17 15.25 17C14.8358 17 14.5 16.6642 14.5 16.25V9.75C14.5 9.33579 14.8358 9 15.25 9Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 8.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V8.75C3.75 7.09315 5.09315 5.75 6.75 5.75C7.85457 5.75 8.70859 4.76253 9.39218 3.89489C9.94151 3.19766 10.7935 2.75 11.75 2.75H12.25C13.2065 2.75 14.0585 3.19766 14.6078 3.89489C15.2914 4.76253 16.1454 5.75 17.25 5.75C18.9069 5.75 20.25 7.09315 20.25 8.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 20.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 20.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 5.75H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 9.75V16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 9.75V16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSuitcase;
