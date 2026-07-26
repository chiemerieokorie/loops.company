import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFolderOpenFront: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="folder-open-front">
		{variant === "filled" ? (
			<>
				<path
					d="M20.4794 11C22.2506 11 23.5596 12.6501 23.1572 14.375L22.3407 17.875C22.0503 19.1195 20.9409 19.9999 19.663 20H4.33684C3.05892 19.9999 1.94956 19.1195 1.6591 17.875L0.842697 14.375C0.440204 12.6501 1.74919 11 3.52043 11H20.4794Z"
					fill="currentColor"
				/>
				<path
					d="M8.72551 3C9.70226 3.00002 10.6407 3.38136 11.3407 4.0625L11.6493 4.3623C12.0694 4.77098 12.6326 5 13.2187 5H18.2499C20.321 5.00004 21.9999 6.67896 21.9999 8.75V9.5H1.99992V6.75C1.99992 4.67893 3.67886 3 5.74992 3H8.72551Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 9V6.75C2.75 5.09315 4.09315 3.75 5.75 3.75H8.72581C9.50723 3.75 10.2578 4.0549 10.8179 4.59982L11.1266 4.90018C11.6866 5.4451 12.4372 5.75 13.2186 5.75H18.25C19.9069 5.75 21.25 7.09315 21.25 8.75V9"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.52041 11.75C2.23223 11.75 1.28001 12.95 1.57273 14.2045L2.38943 17.7045C2.60064 18.6096 3.40762 19.25 4.33711 19.25H19.663C20.5925 19.25 21.3995 18.6096 21.6107 17.7044L22.4273 14.2044C22.72 12.95 21.7678 11.75 20.4796 11.75H3.52041Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFolderOpenFront;
