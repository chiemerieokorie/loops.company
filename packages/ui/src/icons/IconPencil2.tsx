import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPencil2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="pencil-2, edit, write, prompt">
		{variant === "filled" ? (
			<>
				<path
					d="M18.4253 11.4866L10.3697 19.5442C9.79443 20.1194 9.05671 20.5051 8.25638 20.6506L3.67826 21.4827C3.35546 21.5413 3.02451 21.4383 2.79251 21.2063C2.56063 20.9743 2.4575 20.6433 2.51615 20.3206L3.34818 15.7424C3.49378 14.9422 3.87948 14.2043 4.45462 13.6292L12.5113 5.57251L18.4253 11.4866Z"
					fill="currentColor"
				/>
				<path
					d="M14.5425 3.54224C16.1756 1.90948 18.8235 1.90936 20.4566 3.54224C22.0896 5.17529 22.0894 7.82311 20.4566 9.4563L19.4859 10.426L13.5718 4.51197L14.5425 3.54224Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M15.0294 3.82353L4.95922 13.8937C4.51709 14.3359 4.22415 14.9051 4.12136 15.5218L3.25 20.75L8.47816 19.8786C9.09492 19.7758 9.66415 19.4829 10.1063 19.0408L20.1765 8.97059C21.5978 7.54927 21.5978 5.24485 20.1765 3.82353C18.7552 2.40221 16.4507 2.40221 15.0294 3.82353Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path d="M14 5L19 10" stroke="currentColor" strokeWidth="1.5" />
			</>
		)}
	</CentralIconBase>
);

export default IconPencil2;
