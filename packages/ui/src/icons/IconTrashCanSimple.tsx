import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTrashCanSimple: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="trash-can-simple, delete, remove, garbage, waste"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.86853 5H3.25C2.83579 5 2.5 5.33579 2.5 5.75C2.5 6.16421 2.83579 6.5 3.25 6.5H3.99997C3.99999 6.5174 4.00061 6.53492 4.00184 6.55253L4.84166 18.5127C4.97959 20.477 6.61331 22 8.58245 22H15.4176C17.3867 22 19.0204 20.477 19.1583 18.5127L19.9982 6.55253C19.9994 6.53492 20 6.5174 20 6.5H20.75C21.1642 6.5 21.5 6.16421 21.5 5.75C21.5 5.33579 21.1642 5 20.75 5H16.1316C15.6816 3.13507 14.0031 1.75 12.0001 1.75C9.99707 1.75 8.3185 3.13507 7.86853 5ZM9.43734 5H14.5628C14.1628 3.97583 13.1658 3.25 12.0001 3.25C10.8343 3.25 9.8373 3.97583 9.43734 5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 6.5L5.58982 18.4601C5.70016 20.0316 7.00714 21.25 8.58245 21.25H15.4175C16.9929 21.25 18.2998 20.0316 18.4102 18.4601L19.25 6.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.25 5.75H20.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.52466 5.58289C8.73085 3.84652 10.2082 2.5 12.0001 2.5C13.7919 2.5 15.2693 3.84652 15.4755 5.58289"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTrashCanSimple;
