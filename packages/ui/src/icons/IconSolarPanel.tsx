import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSolarPanel: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="solar-panel, Photovoltaics, energy, electricity"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M12.7508 15H16.6254C18.9778 15 20.7494 12.8592 20.3092 10.5483L20.1571 9.75H12.7508V15Z"
					fill="currentColor"
				/>
				<path
					d="M11.2508 15V19.5H4.75079C4.33658 19.5 4.00079 19.8358 4.00079 20.25C4.00079 20.6642 4.33658 21 4.75079 21H19.2508C19.665 21 20.0008 20.6642 20.0008 20.25C20.0008 19.8358 19.665 19.5 19.2508 19.5H12.7508V15H11.2508Z"
					fill="currentColor"
				/>
				<path
					d="M11.2508 15V9.75H3.84446L3.6924 10.5483C3.25224 12.8592 5.02377 15 7.37617 15H11.2508Z"
					fill="currentColor"
				/>
				<path
					d="M12.7508 8.25H19.8714L19.4521 6.04833C19.1152 4.27963 17.5688 3 15.7683 3H12.7508V8.25Z"
					fill="currentColor"
				/>
				<path
					d="M11.2508 3V8.25H4.13018L4.54955 6.04833C4.88644 4.27963 6.43282 3 8.23331 3H11.2508Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 20.25H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.28606 6.18866C5.55558 4.7737 6.79268 3.75 8.23308 3.75H15.7681C17.2085 3.75 18.4456 4.77371 18.7151 6.18866L19.5722 10.6887C19.9244 12.5373 18.5071 14.25 16.6252 14.25H7.37594C5.49402 14.25 4.07679 12.5373 4.42892 10.6887L5.28606 6.18866Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 3.75V14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 9H4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 14.5V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSolarPanel;
