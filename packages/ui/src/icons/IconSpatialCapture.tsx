import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSpatialCapture: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="spatial-capture">
		{variant === "filled" ? (
			<>
				<path
					d="M10.1301 1.96019C11.2877 1.29436 12.712 1.29436 13.8696 1.96019L16.85 3.67453L8.49844 8.49633V2.89872L10.1301 1.96019Z"
					fill="currentColor"
				/>
				<path
					d="M6.99844 3.76151L4.2201 5.3596C3.05688 6.02868 2.33984 7.26831 2.33984 8.61023V10.715L6.99844 13.4047V3.76151Z"
					fill="currentColor"
				/>
				<path
					d="M2.33984 12.4471V15.3897C2.33984 16.7316 3.05688 17.9712 4.2201 18.6403L6.07782 19.7088L10.4977 17.157L2.33984 12.4471Z"
					fill="currentColor"
				/>
				<path
					d="M7.58062 20.5732L10.1301 22.0397C11.2877 22.7055 12.712 22.7055 13.8696 22.0397L15.4984 21.1028V16.0019L7.58062 20.5732Z"
					fill="currentColor"
				/>
				<path
					d="M16.9984 20.24L19.7796 18.6403C20.9428 17.9712 21.6598 16.7316 21.6598 15.3897V13.7865L16.9984 11.0953V20.24Z"
					fill="currentColor"
				/>
				<path
					d="M21.6598 12.0545V8.61023C21.6598 7.26831 20.9428 6.02868 19.7796 5.3596L18.3528 4.53894L13.4977 7.34205L21.6598 12.0545Z"
					fill="currentColor"
				/>
				<path
					d="M11.9977 16.291L8.49844 14.2707V10.2284L11.9977 8.20808L15.4984 10.2292V14.2698L11.9977 16.291Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M13.4956 2.61032C12.5696 2.07765 11.4301 2.07765 10.504 2.61032L4.59405 6.00973C3.66348 6.54499 3.08984 7.5367 3.08984 8.61023V15.3897C3.08984 16.4632 3.66347 17.4549 4.59404 17.9902L10.504 21.3896C11.4301 21.9222 12.5696 21.9222 13.4956 21.3896L19.4056 17.9902C20.3362 17.4549 20.9098 16.4632 20.9098 15.3897V8.61023C20.9098 7.5367 20.3362 6.54499 19.4056 6.00973L13.4956 2.61032Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.15234 9.56298L16.2498 4.88794"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.578 16.9139L3.52051 12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 10.2677V19.2028"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8 19.4661L15.8524 14.9325"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 4.54065V14.2055"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.3779 7.56067L20.5001 12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSpatialCapture;
