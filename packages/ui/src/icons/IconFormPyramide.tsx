import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFormPyramide: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="form-pyramide, prism">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.5802 2.6726C11.279 1.71069 12.7134 1.7107 13.4123 2.6726L22.174 14.7351C22.8007 15.598 22.5163 16.8159 21.5724 17.3122L12.8107 21.9187C12.3009 22.1865 11.6915 22.1867 11.1818 21.9187L2.42007 17.3122C1.47646 16.8159 1.19216 15.5979 1.81851 14.7351L10.5802 2.6726ZM11.9962 20.6199C12.0361 20.6199 12.0761 20.6105 12.1125 20.5915L20.8742 15.9851C21.009 15.9142 21.0495 15.7402 20.9601 15.6169L12.1984 3.55443C12.1484 3.48563 12.0725 3.4508 11.9962 3.45092V20.6199Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.42919 15.1761L11.1909 3.11386C11.5902 2.56412 12.4098 2.56412 12.8091 3.11386L21.5708 15.1761C21.929 15.6692 21.7665 16.3653 21.2271 16.6489L12.4654 21.2553C12.174 21.4085 11.826 21.4085 11.5346 21.2553L2.77292 16.6489C2.23346 16.3653 2.071 15.6692 2.42919 15.1761Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 4V20.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFormPyramide;
