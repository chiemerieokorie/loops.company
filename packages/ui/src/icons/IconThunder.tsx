import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconThunder: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="thunder,zap, flash">
		{variant === "filled" ? (
			<>
				<path
					d="M16.4532 2.33297C17.048 0.559968 14.8014 -0.834145 13.5028 0.582963L3.46462 11.5371C2.43906 12.6563 3.21864 14.4841 4.7545 14.4841H9.58449C9.74862 14.4841 9.87912 14.6486 9.82429 14.8223L7.65434 21.6978C7.09393 23.4735 9.34492 24.8272 10.6246 23.4067L20.5464 12.3928C21.5577 11.2702 20.7752 9.45692 19.2464 9.45692H14.4165C14.2506 9.45692 14.1196 9.28888 14.1782 9.11419L16.4532 2.33297Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<g clipPath="url(#clip0_9885_24922)">
					<path
						d="M19.246 10.2049H14.416C13.7305 10.2049 13.2474 9.52744 13.4666 8.87354L15.7416 2.0875C16.0875 1.05571 14.7886 0.280501 14.0554 1.08116L4.01728 12.0431C3.4254 12.6895 3.8808 13.7357 4.75403 13.7357H9.58402C10.262 13.7357 10.7442 14.3992 10.5391 15.0497L8.36915 21.9301C8.0434 22.9629 9.34388 23.7158 10.0667 22.9128L19.9885 11.8911C20.5722 11.2427 20.1152 10.2049 19.246 10.2049Z"
						stroke="currentColor"
						strokeLinejoin="round"
						strokeWidth="1.5"
					/>
				</g>
				<defs>
					<clipPath id="clip0_9885_24922">
						<rect fill="white" height="24" width="24" />
					</clipPath>
				</defs>
			</>
		)}
	</CentralIconBase>
);

export default IconThunder;
