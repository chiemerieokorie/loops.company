import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAiSlop: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="ai-slop, trash">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12.9688 2C14.5021 2 15.8817 2.9337 16.4512 4.35742L17.1074 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H20V11.75C20 12.5288 19.6737 13.2283 19.1533 13.7275L18.7207 18.583C18.5482 20.5171 16.9271 21.9997 14.9854 22H9.01367C7.07141 22 5.45046 20.5166 5.27832 18.582L4.9668 15.0908C4.37596 14.5864 4 13.8378 4 13V7.5H3.75C3.33579 7.5 3 7.16421 3 6.75C3 6.33579 3.33579 6 3.75 6H6.89258L7.54883 4.35742C8.11832 2.9337 9.49786 2 11.0312 2H12.9688ZM13.5 13.75C13.5 14.4404 14.0596 15 14.75 15C15.4404 15 16 14.4404 16 13.75V11.75C16 12.4404 16.5596 13 17.25 13C17.9404 13 18.5 12.4404 18.5 11.75V7.5H13.5V13.75ZM5.5 13C5.5 13.3817 5.67168 13.7229 5.94141 13.9521C6.04288 13.9899 6.13316 14.0493 6.20898 14.125C6.37291 14.204 6.55586 14.25 6.75 14.25C7.44036 14.25 8 13.6904 8 13V7.5H5.5V13ZM11.0312 3.5C10.1114 3.5 9.28417 4.06005 8.94238 4.91406L8.50781 6H15.4922L15.0576 4.91406C14.7158 4.06005 13.8886 3.5 12.9688 3.5H11.0312Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 6.75H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.5 6.5L8.24567 4.63583C8.70126 3.49685 9.80439 2.75 11.0311 2.75H12.9689C14.1956 2.75 15.2987 3.49685 15.7543 4.63583L16.5 6.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.1975 14.5L17.9226 18.4579C17.8134 20.0303 16.506 21.25 14.9298 21.25H9.06642C7.49025 21.25 6.18285 20.0303 6.07364 18.4579L5.86523 15.4576"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 7V13.75C4.75 14.7165 5.5335 15.5 6.5 15.5C7.4665 15.5 8.25 14.7165 8.25 13.75V11.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 11.5V12.75C15.75 13.7165 16.5335 14.5 17.5 14.5C18.4665 14.5 19.25 13.7165 19.25 12.75V7"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 11.3257V14.875C15.75 15.7725 15.0225 16.5 14.125 16.5C13.2275 16.5 12.5 15.7725 12.5 14.875V9.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAiSlop;
