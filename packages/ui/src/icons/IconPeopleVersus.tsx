import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPeopleVersus: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="people-versus, vs, match, 1v1">
		{variant === "filled" ? (
			<>
				<path
					d="M16.0303 2.0549C16.4142 2.21052 16.5992 2.64787 16.4436 3.03173L8.94359 21.5317C8.78797 21.9156 8.35062 22.1006 7.96676 21.945C7.58289 21.7894 7.39786 21.352 7.55348 20.9682L15.0535 2.46818C15.2091 2.08431 15.6464 1.89928 16.0303 2.0549Z"
					fill="currentColor"
				/>
				<path
					d="M16.9984 9.74995C15.3415 9.74995 13.9984 11.0931 13.9984 12.75C13.9984 14.4068 15.3415 15.75 16.9984 15.75C18.6552 15.75 19.9984 14.4068 19.9984 12.75C19.9984 11.0931 18.6552 9.74995 16.9984 9.74995Z"
					fill="currentColor"
				/>
				<path
					d="M16.9984 16.25C15.084 16.25 13.5555 17.2865 12.712 18.8094C12.263 19.6199 12.4286 20.4669 12.9127 21.0672C13.3775 21.6435 14.1296 22 14.9316 22H19.0653C19.8672 22 20.6194 21.6435 21.0842 21.0672C21.5683 20.4669 21.7338 19.6199 21.2849 18.8094C20.4413 17.2865 18.9128 16.25 16.9984 16.25Z"
					fill="currentColor"
				/>
				<path
					d="M6.99842 8.49995C8.47868 8.49995 9.72819 9.11965 10.6088 10.1047L8.92827 14.25H4.93159C4.12963 14.25 3.37746 13.8935 2.91266 13.3172C2.42858 12.7169 2.26302 11.8699 2.71196 11.0594C3.55555 9.53647 5.084 8.49995 6.99842 8.49995Z"
					fill="currentColor"
				/>
				<path
					d="M6.99839 1.99995C5.34153 1.99995 3.99839 3.3431 3.99839 4.99995C3.99839 6.65681 5.34153 7.99995 6.99839 7.99995C8.65524 7.99995 9.99839 6.65681 9.99839 4.99995C9.99839 3.3431 8.65524 1.99995 6.99839 1.99995Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 12.75C19.25 13.9926 18.2426 15 17 15C15.7574 15 14.75 13.9926 14.75 12.75C14.75 11.5074 15.7574 10.5 17 10.5C18.2426 10.5 19.25 11.5074 19.25 12.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.9981 17C15.3803 17 14.0911 17.8668 13.3677 19.1729C12.799 20.1995 13.7577 21.25 14.9312 21.25H19.0649C20.2385 21.25 21.1971 20.1995 20.6285 19.1729C19.905 17.8668 18.6159 17 16.9981 17Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 5C9.25 6.24264 8.24264 7.25 7 7.25C5.75736 7.25 4.75 6.24264 4.75 5C4.75 3.75736 5.75736 2.75 7 2.75C8.24264 2.75 9.25 3.75736 9.25 5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.49808 10.0892C8.81622 9.56026 7.96597 9.25 6.99808 9.25C5.38029 9.25 4.09115 10.1168 3.36769 11.4229C2.79905 12.4495 3.75768 13.5 4.93125 13.5H7.99808"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.25 21.25L15.75 2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPeopleVersus;
