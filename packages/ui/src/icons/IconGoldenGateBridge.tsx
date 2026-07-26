import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconGoldenGateBridge: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="golden-gate-bridge, silicon-valley, sf"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.9824 3.99943C18.3771 3.96082 18.7383 4.23858 18.7979 4.63517C19.0728 6.47136 20.5248 7.92564 22.3604 8.20256C22.7694 8.26472 23.0518 8.64685 22.9902 9.05607C22.9283 9.46517 22.5459 9.74625 22.1367 9.68498C20.8023 9.48366 19.6183 8.82442 18.75 7.87248V15.2504H22.25C22.6642 15.2504 23 15.5862 23 16.0004C22.9998 16.4145 22.6641 16.7504 22.25 16.7504H18.75V19.2504C18.7498 19.6645 18.4141 20.0004 18 20.0004C17.5859 20.0004 17.2502 19.6645 17.25 19.2504V16.7504H6.75V19.2504C6.74983 19.6645 6.41411 20.0004 6 20.0004C5.58589 20.0004 5.25017 19.6645 5.25 19.2504V16.7504H1.75C1.33589 16.7504 1.00017 16.4145 1 16.0004C1 15.5862 1.33579 15.2504 1.75 15.2504H5.25V7.8715C4.38144 8.82423 3.19764 9.48485 1.8623 9.68595C1.45299 9.74738 1.07161 9.46533 1.00977 9.05607C0.948083 8.64649 1.23008 8.26426 1.63965 8.20256C3.475 7.92598 4.92759 6.47281 5.20312 4.63713C5.26211 4.24427 5.61564 3.96807 6.00586 4.00041C6.39589 3.97892 6.74191 4.26319 6.79102 4.65666C7.11371 7.24582 9.32417 9.24943 12.001 9.24943C14.6773 9.24895 16.8873 7.24551 17.21 4.65666C17.2586 4.2672 17.5973 3.98421 17.9824 3.99943ZM17.25 8.23967C16.1606 9.58711 14.5644 10.5059 12.75 10.7065V15.2504H17.25V8.23967ZM6.75 15.2504H11.25V10.7065C9.43569 10.5058 7.83944 9.58703 6.75 8.23967V15.2504Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M1.75 16H22.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.9541 4.74951C17.5852 7.70944 15.0604 9.9999 12.0005 9.9999C8.94065 9.9999 6.41577 7.70944 6.04688 4.74951"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.0547 4.74658C18.3784 6.90847 20.0861 8.61777 22.2472 8.9438"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.94454 4.74805C5.62024 6.90966 3.9122 8.61849 1.75098 8.94397"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 4.75V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 4.75V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 10V16"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconGoldenGateBridge;
