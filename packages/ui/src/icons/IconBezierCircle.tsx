import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBezierCircle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bezier-circle, vector, nodes">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M11.25 2C10.0074 2 9 3.00736 9 4.25V4.85222C7.13197 5.63709 5.63709 7.13197 4.85222 9H4.25C3.00736 9 2 10.0074 2 11.25V12.75C2 13.9926 3.00736 15 4.25 15H4.85222C5.63709 16.868 7.13197 18.3629 9 19.1478V19.75C9 20.9926 10.0074 22 11.25 22H12.75C13.9926 22 15 20.9926 15 19.75V19.1478C16.868 18.3629 18.3629 16.868 19.1478 15H19.75C20.9926 15 22 13.9926 22 12.75V11.25C22 10.0074 20.9926 9 19.75 9H19.1478C18.3629 7.13197 16.868 5.63709 15 4.85222V4.25C15 3.00736 13.9926 2 12.75 2H11.25ZM6.45526 9.11275C7.04745 7.9781 7.9781 7.04745 9.11275 6.45526C9.40864 7.35244 10.2537 8 11.25 8H12.75C13.7463 8 14.5914 7.35244 14.8873 6.45526C16.0219 7.04745 16.9525 7.9781 17.5447 9.11275C16.6476 9.40864 16 10.2537 16 11.25V12.75C16 13.7463 16.6476 14.5914 17.5447 14.8873C16.9525 16.0219 16.0219 16.9525 14.8873 17.5447C14.5914 16.6476 13.7463 16 12.75 16H11.25C10.2537 16 9.40864 16.6476 9.11275 17.5447C7.9781 16.9525 7.04746 16.0219 6.45526 14.8873C7.35245 14.5914 8 13.7463 8 12.75V11.25C8 10.2537 7.35244 9.40864 6.45526 9.11275Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M9.75 18.25C9.75 17.4216 10.4216 16.75 11.25 16.75H12.75C13.5784 16.75 14.25 17.4216 14.25 18.25V19.75C14.25 20.5784 13.5784 21.25 12.75 21.25H11.25C10.4216 21.25 9.75 20.5784 9.75 19.75V18.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 4.25C9.75 3.42157 10.4216 2.75 11.25 2.75H12.75C13.5784 2.75 14.25 3.42157 14.25 4.25V5.75C14.25 6.57843 13.5784 7.25 12.75 7.25H11.25C10.4216 7.25 9.75 6.57843 9.75 5.75V4.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.75 9.75C20.5784 9.75 21.25 10.4216 21.25 11.25V12.75C21.25 13.5784 20.5784 14.25 19.75 14.25H18.25C17.4216 14.25 16.75 13.5784 16.75 12.75V11.25C16.75 10.4216 17.4216 9.75 18.25 9.75H19.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 9.75C6.57843 9.75 7.25 10.4216 7.25 11.25V12.75C7.25 13.5784 6.57843 14.25 5.75 14.25H4.25C3.42157 14.25 2.75 13.5784 2.75 12.75V11.25C2.75 10.4216 3.42157 9.75 4.25 9.75H5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.5 9.39691C6.2104 7.62463 7.62463 6.2104 9.39691 5.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.6035 5.5C16.3758 6.2104 17.79 7.62463 18.5004 9.39691"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.5004 14.603C17.79 16.3753 16.3758 17.7895 14.6035 18.4999"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.39691 18.4999C7.62463 17.7895 6.2104 16.3753 5.5 14.603"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBezierCircle;
