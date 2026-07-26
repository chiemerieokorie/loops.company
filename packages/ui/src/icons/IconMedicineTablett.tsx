import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMedicineTablett: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="medicine-tablett, pill">
		{variant === "filled" ? (
			<>
				<path
					d="M11.4683 3.97024C13.8322 1.60628 17.665 1.60627 20.0289 3.97024C22.3929 6.3342 22.3929 10.1669 20.0289 12.5309L16.8093 15.7506L8.24861 7.18991L11.4683 3.97024Z"
					fill="currentColor"
				/>
				<path
					d="M7.18795 8.25057L3.96828 11.4702C1.60432 13.8342 1.60432 17.6669 3.96828 20.0309C6.33224 22.3949 10.165 22.3949 12.5289 20.0309L15.7486 16.8112L7.18795 8.25057Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11.9986 4.50057L4.49861 12.0006C2.42755 14.0716 2.42755 17.4295 4.49861 19.5006C6.56968 21.5716 9.92755 21.5716 11.9986 19.5006L19.4986 12.0006C21.5697 9.9295 21.5697 6.57163 19.4986 4.50057C17.4275 2.4295 14.0697 2.4295 11.9986 4.50057Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path d="M8.5 8.5L15.5 15.5" stroke="currentColor" strokeWidth="1.5" />
			</>
		)}
	</CentralIconBase>
);

export default IconMedicineTablett;
