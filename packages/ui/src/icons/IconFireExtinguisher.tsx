import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFireExtinguisher: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="fire-extinguisher, urgent">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M9.24762 1.75C10.6281 1.75023 11.7476 2.86943 11.7476 4.25V5.25H13.5914C13.7866 4.6766 14.2717 4.22867 14.8912 4.09961L18.8912 3.2666C19.9775 3.04084 20.9974 3.8699 20.9976 4.97949V6.99512C20.9975 8.1191 19.9526 8.95175 18.857 8.70117L14.857 7.78418C14.2921 7.65476 13.8447 7.26004 13.6324 6.75H11.7476V8.07031C13.5981 8.42153 14.9976 10.0474 14.9976 12V18.25C14.9976 20.3209 13.3185 21.9998 11.2476 22H10.7476C8.67655 22 6.99762 20.3211 6.99762 18.25V12C6.99762 10.0472 8.39698 8.42138 10.2476 8.07031V6.75H10.023L9.81305 6.75488C7.66126 6.84769 5.85176 8.3627 5.35504 10.4219C5.25781 10.8242 4.85217 11.0714 4.44976 10.9746C4.0471 10.8775 3.79893 10.472 3.89605 10.0693C4.34987 8.18837 5.63759 6.65423 7.33062 5.85352C6.967 5.41936 6.74762 4.86062 6.74762 4.25C6.74762 2.86929 7.8669 1.75 9.24762 1.75ZM9.24762 3.25C8.69533 3.25 8.24762 3.69772 8.24762 4.25C8.24762 4.80228 8.69533 5.25 9.24762 5.25H10.2476V4.25C10.2476 3.69786 9.7997 3.25023 9.24762 3.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M14.25 18.25V12C14.25 10.2051 12.7949 8.75 11 8.75C9.20507 8.75 7.75 10.2051 7.75 12V18.25C7.75 19.9069 9.09315 21.25 10.75 21.25H11.25C12.9069 21.25 14.25 19.9069 14.25 18.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11 8.5V4.25C11 3.2835 10.2165 2.5 9.25 2.5C8.2835 2.5 7.5 3.2835 7.5 4.25C7.5 5.2165 8.2835 6 9.25 6H10.625"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.9971 6H10.022C7.4281 6 5.21794 7.78728 4.625 10.2456"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 6.99501V4.9798C20.25 4.34549 19.667 3.87145 19.046 4.00082L15.046 4.83416C14.5823 4.93077 14.25 5.33946 14.25 5.81314V6.07867C14.25 6.54492 14.5722 6.9493 15.0267 7.05342L19.0267 7.96976C19.6529 8.11321 20.25 7.63744 20.25 6.99501Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFireExtinguisher;
