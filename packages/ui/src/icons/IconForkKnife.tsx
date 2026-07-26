import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconForkKnife: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="fork-knife, cable, restaurant, cutlery"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M10 3.75C10 3.33579 10.3358 3 10.75 3C11.1642 3 11.5 3.33579 11.5 3.75V9.83612C11.5 10.761 11.1582 11.6533 10.5402 12.3416L10.4598 12.4311C9.84182 13.1193 9.5 14.0116 9.5 14.9366V19.25C9.5 20.2165 8.7165 21 7.75 21C6.7835 21 6 20.2165 6 19.25V14.9366C6 14.0116 5.65818 13.1193 5.04021 12.4311L4.95979 12.3416C4.34182 11.6533 4 10.761 4 9.83612V3.75C4 3.33579 4.33579 3 4.75 3C5.16421 3 5.5 3.33579 5.5 3.75V10C5.5 10.4142 5.83579 10.75 6.25 10.75C6.66421 10.75 7 10.4142 7 10V3.75C7 3.33579 7.33579 3 7.75 3C8.16421 3 8.5 3.33579 8.5 3.75V10C8.5 10.4142 8.83579 10.75 9.25 10.75C9.66421 10.75 10 10.4142 10 10V3.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M20 3.74544C20 3.33374 19.6663 3 19.2546 3C18.9603 3 18.6697 3.12954 18.4553 3.2468C18.2102 3.3808 17.9377 3.57081 17.6518 3.81201C17.0782 4.29592 16.4153 5.01564 15.7735 5.9928C13.2421 9.84744 11.5 16 16.5213 16V19.2606C16.5213 20.2213 17.3 21 18.2606 21C19.2213 21 20 20.2213 20 19.2606V3.74544Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 3.75V9.89139C4.75 10.5823 5.019 11.2462 5.5 11.7422C5.981 12.2382 6.25 12.902 6.25 13.593V18.75C6.25 19.5784 6.92157 20.25 7.75 20.25C8.57843 20.25 9.25 19.5784 9.25 18.75V13.593C9.25 12.902 9.519 12.2382 10 11.7422C10.481 11.2462 10.75 10.5823 10.75 9.89139V3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 3.75V10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 18.75V3.75C18.5444 3.75 14.9484 6.27371 13.7885 12.5186C13.5157 13.9872 14.7294 15.25 16.2319 15.25V18.75C16.2319 19.5784 16.9075 20.25 17.7409 20.25C18.5744 20.25 19.25 19.5784 19.25 18.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconForkKnife;
