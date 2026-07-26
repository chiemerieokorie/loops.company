import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconJudgeGavel: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="judge-gavel, legal, terms, law">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M1 13.2502C1 12.836 1.33579 12.5002 1.75 12.5002H4.25C4.66421 12.5002 5 12.836 5 13.2502C5 13.6644 4.66421 14.0002 4.25 14.0002H1.75C1.33579 14.0002 1 13.6644 1 13.2502Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M2.9 7.80021C3.14853 7.46884 3.61863 7.40169 3.95 7.65021L5.95 9.15021C6.28137 9.39874 6.34853 9.86884 6.1 10.2002C5.85147 10.5316 5.38137 10.5987 5.05 10.3502L3.05 8.85021C2.71863 8.60169 2.65147 8.13158 2.9 7.80021Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M18.4053 4.09488C17.353 3.04259 15.6469 3.04259 14.5946 4.09488L10.5946 8.09488C9.54235 9.14716 9.54235 10.8533 10.5946 11.9055C11.6469 12.9578 13.353 12.9578 14.4053 11.9055L15.875 10.4359L20.2196 14.7805C20.5125 15.0734 20.9874 15.0734 21.2803 14.7805C21.5732 14.4876 21.5732 14.0128 21.2803 13.7199L16.9356 9.37521L18.4053 7.90554C19.4576 6.85325 19.4576 5.14716 18.4053 4.09488Z"
					fill="currentColor"
				/>
				<path
					d="M6.91228 16.5002C5.29816 16.5002 3.86514 17.5331 3.35472 19.0644L3.20943 19.5002H2.75C2.33579 19.5002 2 19.836 2 20.2502C2 20.6644 2.33579 21.0002 2.75 21.0002H16.25C16.6642 21.0002 17 20.6644 17 20.2502C17 19.836 16.6642 19.5002 16.25 19.5002H15.7906L15.6453 19.0644C15.1349 17.5331 13.7018 16.5002 12.0877 16.5002H6.91228Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M15.25 20.25H16.25M15.25 20.25L14.9338 19.3013C14.5254 18.0763 13.379 17.25 12.0877 17.25H6.91228C5.62099 17.25 4.47457 18.0763 4.06623 19.3013L3.75 20.25M15.25 20.25H3.75M2.75 20.25H3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M1.75 13.25H4.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.5 9.75L3.5 8.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.8742 9.37521L13.8742 11.3752C13.1148 12.1346 11.8836 12.1346 11.1242 11.3752C10.3648 10.6158 10.3648 9.3846 11.1242 8.62521L15.1242 4.62521C15.8836 3.86582 17.1148 3.86582 17.8742 4.62521C18.6336 5.3846 18.6336 6.61582 17.8742 7.37521L15.8742 9.37521ZM15.8742 9.37521L20.7492 14.2502"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconJudgeGavel;
