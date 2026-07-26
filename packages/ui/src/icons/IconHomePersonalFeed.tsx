import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconHomePersonalFeed: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="home-personal-feed, for-you">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M14.2056 3.67671C12.8907 2.72039 11.1093 2.72039 9.79436 3.67671L4.54436 7.49489C3.57406 8.20056 3 9.32789 3 10.5277V17.25C3 19.3214 4.68049 21 6.75118 21H7.02469C7.27556 18.4733 9.40733 16.5 12 16.5C14.5927 16.5 16.7244 18.4733 16.9753 21H17.2488C19.3195 21 21 19.3214 21 17.25V10.5277C21 9.32789 20.4259 8.20056 19.4556 7.4949L14.2056 3.67671ZM12 9.75C10.6193 9.75 9.5 10.8693 9.5 12.25C9.5 13.6307 10.6193 14.75 12 14.75C13.3807 14.75 14.5 13.6307 14.5 12.25C14.5 10.8693 13.3807 9.75 12 9.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 10.5277V17.25C3.75 18.9069 5.09432 20.25 6.75118 20.25H17.2488C18.9057 20.25 20.25 18.9069 20.25 17.25V10.5277C20.25 9.56788 19.7907 8.66601 19.0145 8.10148L13.7645 4.2833C12.7126 3.51824 11.2874 3.51824 10.2355 4.28329L4.98548 8.10148C4.20925 8.66601 3.75 9.56788 3.75 10.5277Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 20C16.25 17.6528 14.3472 15.75 12 15.75C9.65279 15.75 7.75 17.6528 7.75 20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.25 11.5C14.25 12.7426 13.2426 13.75 12 13.75C10.7574 13.75 9.75 12.7426 9.75 11.5C9.75 10.2574 10.7574 9.25 12 9.25C13.2426 9.25 14.25 10.2574 14.25 11.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconHomePersonalFeed;
