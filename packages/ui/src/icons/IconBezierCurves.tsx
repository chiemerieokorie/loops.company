import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBezierCurves: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="bezier-curves, animation, motion, spring"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.75 3C4.67893 3 3 4.67893 3 6.75V17.25C3 19.3211 4.67893 21 6.75 21H17.25C19.3211 21 21 19.3211 21 17.25V6.75C21 4.67893 19.3211 3 17.25 3H6.75ZM16.1967 7C14.857 7.00033 13.8805 7.70314 13.1397 8.60136C12.4279 9.46444 11.8656 10.5906 11.3517 11.6198L11.329 11.6653C10.788 12.7488 10.2952 13.7269 9.70308 14.4448C9.12941 15.1402 8.53806 15.5 7.80312 15.5H7.75C7.33579 15.5 7 15.8358 7 16.25C7 16.6642 7.33579 17 7.75 17H7.80312C9.14285 17 10.1194 16.2974 10.8602 15.3993C11.5721 14.5362 12.1345 13.41 12.6484 12.3807L12.671 12.3355C13.212 11.252 13.7048 10.2738 14.297 9.55575C14.8706 8.86017 15.462 8.50024 16.1969 8.5H16.25C16.6642 8.5 17 8.16421 17 7.75C17 7.33579 16.6642 7 16.25 7H16.1967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M16.25 7.75H16.1969C12.0476 7.75101 11.9524 16.25 7.80312 16.25H7.75M6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V6.75C3.75 5.09315 5.09315 3.75 6.75 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBezierCurves;
