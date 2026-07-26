import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconImages1Alt: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="images-1-alt, photos, pictures, shot">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.25 3C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75C3 4.67893 4.67893 3 6.75 3H17.25ZM9.59082 13.5908C8.71218 12.7124 7.28782 12.7124 6.40918 13.5908L4.5 15.5V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H15.5L9.59082 13.5908ZM15 6.5C13.6193 6.5 12.5 7.61929 12.5 9C12.5 10.3807 13.6193 11.5 15 11.5C16.3807 11.5 17.5 10.3807 17.5 9C17.5 7.61929 16.3807 6.5 15 6.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M14.5 11.5C15.6046 11.5 16.5 10.6046 16.5 9.5C16.5 8.39543 15.6046 7.5 14.5 7.5C13.3954 7.5 12.5 8.39543 12.5 9.5C12.5 10.6046 13.3954 11.5 14.5 11.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M4.10156 15.9L5.88024 14.1213C7.05181 12.9497 8.95131 12.9497 10.1229 14.1213L15.9016 19.9"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconImages1Alt;
