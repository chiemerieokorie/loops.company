import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCoinsAdd: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="coins-add, money">
		{variant === "filled" ? (
			<>
				<path
					d="M6.5 14C6.5 9.51385 9.9754 5.83942 14.3807 5.52222C13.0967 3.98095 11.1629 3 9 3C5.13401 3 2 6.13401 2 10C2 13.147 4.07675 15.809 6.93455 16.6903C6.65266 15.8448 6.5 14.9402 6.5 14Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M15 21C18.866 21 22 17.866 22 14C22 10.134 18.866 7 15 7C11.134 7 8 10.134 8 14C8 17.866 11.134 21 15 21ZM15.75 11.75C15.75 11.3358 15.4142 11 15 11C14.5858 11 14.25 11.3358 14.25 11.75V13.25H12.75C12.3358 13.25 12 13.5858 12 14C12 14.4142 12.3358 14.75 12.75 14.75H14.25V16.25C14.25 16.6642 14.5858 17 15 17C15.4142 17 15.75 16.6642 15.75 16.25V14.75H17.25C17.6642 14.75 18 14.4142 18 14C18 13.5858 17.6642 13.25 17.25 13.25H15.75V11.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15 11.75V14M15 14V16.25M15 14H12.75M15 14H17.25M14.6766 7.38126C13.686 5.23749 11.5167 3.75 9 3.75C5.54822 3.75 2.75 6.54822 2.75 10C2.75 13.3961 5.45873 16.1596 8.83359 16.2478M21.25 14C21.25 17.4518 18.4518 20.25 15 20.25C12.3406 20.25 10.0691 18.589 9.16641 16.2478C8.89745 15.5503 8.75 14.7924 8.75 14C8.75 10.6039 11.4587 7.84038 14.8336 7.75217C14.8889 7.75073 14.9444 7.75 15 7.75C18.4518 7.75 21.25 10.5482 21.25 14Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCoinsAdd;
