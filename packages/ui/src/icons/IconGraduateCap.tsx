import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconGraduateCap: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="graduate-cap, study, education, academic, student"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M12.3172 3.07036C12.1161 2.97655 11.8839 2.97655 11.6828 3.07036L0.432836 8.32036C0.16878 8.44359 0 8.70861 0 9C0 9.29139 0.16878 9.55641 0.432836 9.67964L11.6828 14.9296C11.8839 15.0235 12.1161 15.0235 12.3172 14.9296L22.5 10.1776V15.25C22.5 15.6642 22.8358 16 23.25 16C23.6642 16 24 15.6642 24 15.25V9C24 8.70861 23.8312 8.44359 23.5672 8.32036L12.3172 3.07036Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M4.5 12.73V15.1199C4.5 16.4677 5.22334 17.7119 6.39465 18.3788L10.1446 20.5137C11.2948 21.1686 12.7051 21.1686 13.8553 20.5137L17.6053 18.3788C18.7767 17.7119 19.5 16.4677 19.5 15.1199V12.73L12.9152 16.1189C12.3409 16.4145 11.6591 16.4145 11.0848 16.1189L4.5 12.73Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M23.25 8.99626L12 14.2425L0.75 8.99626L12 3.75L23.25 8.99626ZM23.25 8.99626V15.2418M4.75002 10.9636V14.8742C4.75002 15.9594 5.33687 16.9598 6.28438 17.4899L10.5344 19.8679C11.4449 20.3774 12.5551 20.3774 13.4656 19.8679L17.7157 17.4899C18.6632 16.9598 19.25 15.9594 19.25 14.8742V10.9636"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconGraduateCap;
