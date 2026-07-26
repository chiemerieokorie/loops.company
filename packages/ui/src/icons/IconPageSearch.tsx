import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPageSearch: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="page-search">
		{variant === "filled" ? (
			<>
				<path
					d="M7.75 2C5.67893 2 4 3.67893 4 5.75V18.25C4 20.3211 5.67893 22 7.75 22H12.5313C11.2856 20.9006 10.5 19.292 10.5 17.5C10.5 14.1863 13.1863 11.5 16.5 11.5C17.8062 11.5 19.0149 11.9174 20 12.626V5.75C20 3.67893 18.3211 2 16.25 2H7.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M16.5 13C14.0147 13 12 15.0147 12 17.5C12 19.9853 14.0147 22 16.5 22C17.4786 22 18.3849 21.687 19.1232 21.1567L19.9613 22.0218C20.2495 22.3193 20.7243 22.3269 21.0218 22.0387C21.3193 21.7505 21.3269 21.2757 21.0387 20.9782L20.1794 20.0912C20.696 19.3587 21 18.4644 21 17.5C21 15.0147 18.9853 13 16.5 13ZM13.5 17.5C13.5 15.8431 14.8431 14.5 16.5 14.5C18.1569 14.5 19.5 15.8431 19.5 17.5C19.5 18.32 19.172 19.0618 18.6384 19.6041C18.0934 20.158 17.3373 20.5 16.5 20.5C14.8431 20.5 13.5 19.1569 13.5 17.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 17.5C20.25 18.5246 19.8391 19.4533 19.173 20.1301C18.4928 20.8214 17.5464 21.25 16.5 21.25C14.4289 21.25 12.75 19.5711 12.75 17.5C12.75 15.4289 14.4289 13.75 16.5 13.75C18.5711 13.75 20.25 15.4289 20.25 17.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.5008 21.5002L19.1738 20.1304"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPageSearch;
