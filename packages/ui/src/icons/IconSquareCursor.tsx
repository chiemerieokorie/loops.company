import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSquareCursor: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="square-cursor, cursor box, arrow">
		{variant === "filled" ? (
			<>
				<path
					d="M6.75 3C4.67893 3 3 4.67893 3 6.75V17.25C3 19.3211 4.67893 21 6.75 21H10.75C11.1642 21 11.5 20.6642 11.5 20.25C11.5 19.8358 11.1642 19.5 10.75 19.5H6.75C5.50736 19.5 4.5 18.4926 4.5 17.25V6.75C4.5 5.50736 5.50736 4.5 6.75 4.5H17.25C18.4926 4.5 19.5 5.50736 19.5 6.75V10.75C19.5 11.1642 19.8358 11.5 20.25 11.5C20.6642 11.5 21 11.1642 21 10.75V6.75C21 4.67893 19.3211 3 17.25 3H6.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M13.2008 11.3624C12.0852 11.0631 11.0641 12.0842 11.3634 13.1999L13.4644 21.0309C13.7527 22.1056 15.196 22.2963 15.7535 21.3333L17.7998 17.7988L21.3342 15.7525C22.2972 15.195 22.1066 13.7517 21.0319 13.4634L13.2008 11.3624ZM12.8121 12.8112L20.0615 14.7561L17.0482 16.5006C16.8214 16.632 16.6329 16.8204 16.5016 17.0472L14.7571 20.0605L12.8121 12.8112Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 10.75V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.087 13.0057L14.188 20.8367C14.3033 21.2666 14.8806 21.3429 15.1036 20.9577L17.1499 17.4232C17.2155 17.3098 17.3098 17.2155 17.4232 17.1499L20.9577 15.1036C21.3429 14.8806 21.2666 14.3033 20.8367 14.188L13.0057 12.087C12.4479 11.9373 11.9373 12.4479 12.087 13.0057Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSquareCursor;
