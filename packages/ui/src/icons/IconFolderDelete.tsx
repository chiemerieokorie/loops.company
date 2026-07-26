import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFolderDelete: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="folder-delete">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 6.75C2 4.67893 3.67893 3 5.75 3H8.39445C9.64827 3 10.8191 3.62663 11.5146 4.66987L12.0303 5.44338C12.2621 5.79112 12.6524 6 13.0704 6H18.25C20.3211 6 22 7.67893 22 9.75V16.25C22 18.3211 20.3211 20 18.25 20H9.37187C9.65101 19.2085 9.47405 18.2921 8.84099 17.659L8.18198 17L8.84099 16.341C9.71967 15.4623 9.71967 14.0377 8.84099 13.159C7.96231 12.2803 6.53769 12.2803 5.65901 13.159L5 13.818L4.34099 13.159C3.70793 12.526 2.79149 12.349 2 12.6281V6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M7.78033 14.2197C8.07322 14.5126 8.07322 14.9874 7.78033 15.2803L6.06066 17L7.78033 18.7197C8.07322 19.0126 8.07322 19.4874 7.78033 19.7803C7.48744 20.0732 7.01256 20.0732 6.71967 19.7803L5 18.0607L3.28033 19.7803C2.98744 20.0732 2.51256 20.0732 2.21967 19.7803C1.92678 19.4874 1.92678 19.0126 2.21967 18.7197L3.93934 17L2.21967 15.2803C1.92678 14.9874 1.92678 14.5126 2.21967 14.2197C2.51256 13.9268 2.98744 13.9268 3.28033 14.2197L5 15.9393L6.71967 14.2197C7.01256 13.9268 7.48744 13.9268 7.78033 14.2197Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M10.25 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V9.75C21.25 8.09315 19.9069 6.75 18.25 6.75H13.0704C12.4017 6.75 11.7772 6.4158 11.4063 5.8594L10.5937 4.6406C10.2228 4.0842 9.59834 3.75 8.92963 3.75H5.75C4.09315 3.75 2.75 5.09315 2.75 6.75V11.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.25 14.75L5 17L2.75 19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 14.75L5 17L7.25 19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFolderDelete;
