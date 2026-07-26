import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconProjects: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="projects, stack, templates, timeline">
		{variant === "filled" ? (
			<>
				<path
					d="M19.1564 10C20.9595 10 22.2754 11.7065 21.8166 13.4502L20.5646 18.2041C20.1311 19.8514 18.6421 20.9999 16.9386 21H7.06364C5.36027 20.9998 3.87117 19.8514 3.43766 18.2041L2.18571 13.4502C1.72688 11.7065 3.04287 10.0001 4.84587 10H19.1564Z"
					fill="currentColor"
				/>
				<path
					d="M19.2511 6.5C19.6654 6.5 20.0011 6.83579 20.0011 7.25C20.0011 7.66421 19.6654 8 19.2511 8H4.75114C4.33701 7.9999 4.00114 7.66415 4.00114 7.25C4.00114 6.83585 4.33701 6.5001 4.75114 6.5H19.2511Z"
					fill="currentColor"
				/>
				<path
					d="M17.2511 3C17.6654 3 18.0011 3.33579 18.0011 3.75C18.0011 4.16421 17.6654 4.5 17.2511 4.5H6.75114C6.33701 4.4999 6.00114 4.16415 6.00114 3.75C6.00114 3.33585 6.33701 3.0001 6.75114 3H17.2511Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 3.75H17.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 7.25H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.1556 10.75H4.84441C3.53306 10.75 2.57653 11.9908 2.91026 13.259L4.16144 18.0135C4.50827 19.3314 5.69986 20.25 7.06267 20.25H16.9373C18.3001 20.25 19.4917 19.3314 19.8386 18.0135L21.0897 13.259C21.4235 11.9908 20.4669 10.75 19.1556 10.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconProjects;
