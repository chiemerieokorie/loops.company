import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMoveFolder: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="move-folder">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8.59863 3C9.6546 3.00001 10.6449 3.49497 11.2793 4.3291L11.5234 4.6709C12.1579 5.50503 13.1481 5.99999 14.2041 6H18.25C20.3211 6 22 7.67893 22 9.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V6.75C2 4.67893 3.67893 3 5.75 3H8.59863ZM13.0303 10.7197C12.7374 10.4269 12.2626 10.427 11.9697 10.7197C11.677 11.0126 11.677 11.4874 11.9697 11.7803L13.1895 13.001H8.75C8.33579 13.001 8 13.3368 8 13.751C8.00038 14.1649 8.33602 14.501 8.75 14.501H13.1875L11.9697 15.7197C11.677 16.0126 11.6769 16.4884 11.9697 16.7812C12.2625 17.0736 12.7375 17.0736 13.0303 16.7812L15.5303 14.2812C15.823 13.9884 15.8229 13.5126 15.5303 13.2197L13.0303 10.7197Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M11.25 19.25H5.75C4.09315 19.25 2.75 17.9069 2.75 16.25V6.75C2.75 5.09315 4.09315 3.75 5.75 3.75H8.39445C9.39751 3.75 10.3342 4.2513 10.8906 5.0859L11.1094 5.4141C11.6658 6.2487 12.6025 6.75 13.6056 6.75H18.25C19.9069 6.75 21.25 8.09315 21.25 9.75V11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 17.25H18H21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 14.5L22 17.25L19.25 20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMoveFolder;
