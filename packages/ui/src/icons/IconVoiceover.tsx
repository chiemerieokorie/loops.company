import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVoiceover: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="voiceover, sound">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM11.5 7.5C11.1852 7.5 10.889 7.64858 10.7002 7.90039L9.7998 9.09961C9.61095 9.35142 9.31476 9.5 9 9.5H8.5C7.94772 9.5 7.5 9.94772 7.5 10.5V13.5C7.5 14.0523 7.94772 14.5 8.5 14.5H9C9.31476 14.5 9.61095 14.6486 9.7998 14.9004L10.7002 16.0996C10.889 16.3514 11.1852 16.5 11.5 16.5C12.0523 16.5 12.5 16.0523 12.5 15.5V8.5C12.5 7.94772 12.0523 7.5 11.5 7.5ZM14.916 9.37598C14.5714 9.14621 14.1057 9.23934 13.876 9.58398C13.6462 9.92863 13.7393 10.3943 14.084 10.624C15.1387 11.3272 15.1387 12.6728 14.084 13.376C13.7393 13.6057 13.6462 14.0714 13.876 14.416C14.1057 14.7607 14.5714 14.8538 14.916 14.624C16.8613 13.3272 16.8613 10.6728 14.916 9.37598Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M7.5 13.5V10.5C7.5 9.94772 7.94772 9.5 8.5 9.5H9C9.31476 9.5 9.61115 9.35181 9.8 9.1L10.7 7.9C10.8889 7.64819 11.1852 7.5 11.5 7.5C12.0523 7.5 12.5 7.94772 12.5 8.5V15.5C12.5 16.0523 12.0523 16.5 11.5 16.5C11.1852 16.5 10.8889 16.3518 10.7 16.1L9.8 14.9C9.61115 14.6482 9.31476 14.5 9 14.5H8.5C7.94772 14.5 7.5 14.0523 7.5 13.5Z"
					fill="currentColor"
				/>
				<path
					d="M14.5 14C16 13 16 11 14.5 10"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVoiceover;
