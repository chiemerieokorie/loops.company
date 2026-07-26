import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconScript2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="script-2, paper, page, contract, file, document, skills"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M19.25 3C19.2499 3 19.2501 3 19.25 3C20.7535 3 22 4.24646 22 5.75V7.25015C22 8.76901 20.7687 10 19.25 10H18V18.2496C18 19.7684 16.7688 20.9996 15.25 20.9996L5.7829 21C5.04485 21 4.33701 20.7069 3.81503 20.1851C3.29283 19.6631 3 18.9551 3 18.2175V17.7501C3 16.2314 4.23116 15 5.75 15H6V5.7464C6 5.01757 6.28957 4.31843 6.80645 3.80312C7.32262 3.28775 8.02211 3 8.75035 3H19.25ZM18 5.75V8.5H19.25C19.9404 8.5 20.5 7.94043 20.5 7.25015V5.75C20.5 5.07489 19.9251 4.5 19.25 4.5C19.2499 4.5 19.2501 4.5 19.25 4.5C18.9185 4.50007 18.6003 4.63183 18.3662 4.86609C18.1317 5.10061 18 5.41854 18 5.75ZM12.5 17.4798C12.4987 16.9385 12.0594 16.5 11.5178 16.5H5.75C5.0597 16.5 4.5 17.0597 4.5 17.7501V18.2175C4.5 18.5576 4.63507 18.8839 4.8755 19.1243C5.11615 19.3648 5.44252 19.5 5.7829 19.5H12.8C12.6082 19.1249 12.5 18.6999 12.5 18.2496V17.4798Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 15.4807C6.75 15.4807 6.75 8.02504 6.75 5.7464C6.75 5.21648 6.96052 4.70846 7.33617 4.33406C7.71104 3.95966 8.21974 3.75 8.75035 3.75C11.9215 3.75 18.4997 3.75 18.4997 3.75"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeMiterlimit="1.5"
					strokeWidth="1.5"
				/>
				<path
					d="M14.5 20.25H5.7829C5.24368 20.25 4.72658 20.0359 4.34526 19.6547C3.96395 19.2735 3.75 18.7564 3.75 18.2175C3.75 18.0704 3.75 17.9124 3.75 17.7501C3.75 16.6455 4.64587 15.75 5.75044 15.75C7.65864 15.75 9.34136 15.75 11.2496 15.75C12.3541 15.75 13.25 16.6454 13.25 17.75L13.25 18.252C13.25 19.355 14.145 20.25 15.248 20.25H15.252C16.355 20.25 17.25 19.355 17.25 18.252V9.5"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeMiterlimit="1.5"
					strokeWidth="1.5"
				/>
				<path
					clipRule="evenodd"
					d="M19.25 3.75C20.3393 3.75 21.25 4.66068 21.25 5.75C21.25 6.20633 21.25 6.73951 21.25 7.25015C21.25 8.35472 20.3546 9.25 19.25 9.25H17.25V5.75C17.25 5.21954 17.4608 4.71092 17.8357 4.33585C18.2107 3.96077 18.7196 3.75 19.25 3.75Z"
					fillRule="evenodd"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="1.5"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconScript2;
