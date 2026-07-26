import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconOculus: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="oculus">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M1.96384 8.53134C2.87338 6.46698 4.91303 5 7.32528 5H16.6747C19.087 5 21.1266 6.46698 22.0362 8.53134L22.2151 8.34927C22.5055 8.05386 22.9803 8.04975 23.2757 8.34011C23.5711 8.63046 23.5752 9.10531 23.2849 9.40073L22.5013 10.198C22.7737 12.0599 22.4698 14.134 21.578 15.8036C20.6103 17.6152 18.9117 19 16.5041 19H7.49592C5.08834 19 3.38975 17.6152 2.42205 15.8036C1.53023 14.134 1.22634 12.0599 1.49875 10.198L0.715105 9.40073C0.424755 9.10531 0.42886 8.63046 0.724275 8.34011C1.01969 8.04975 1.49454 8.05386 1.7849 8.34927L1.96384 8.53134ZM10.75 8C10.3358 8 10 8.33579 10 8.75C10 9.16421 10.3358 9.5 10.75 9.5H13.25C13.6642 9.5 14 9.16421 14 8.75C14 8.33579 13.6642 8 13.25 8H10.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M10.75 8.75H13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.6978 9.94553L22.75 8.875M2.30218 9.94553L1.25 8.875"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.6748 5.75H7.32535C4.82018 5.75 2.76257 7.57229 2.30225 9.94553C1.60273 13.552 3.35428 18.25 7.49599 18.25H16.5042C20.6459 18.25 22.3974 13.552 21.6979 9.94553C21.2376 7.57229 19.18 5.75 16.6748 5.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconOculus;
