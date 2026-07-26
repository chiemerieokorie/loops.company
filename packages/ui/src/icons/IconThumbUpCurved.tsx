import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconThumbUpCurved: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="thumb-up-curved">
		{variant === "filled" ? (
			<>
				<path
					d="M13.1181 2.04792C12.6817 1.94211 12.2504 2.20028 12.0773 2.61462C11 6.50002 8 8.55501 8 11.2699V17.7252C8 18.8717 8.66361 20.0005 9.83559 20.4273C12.4864 21.3926 14.2335 21.589 16.9595 21.3527C19.0504 21.1715 20.6221 19.5685 21.0577 17.6326L21.9024 13.8781C22.4651 11.3773 20.5633 9.00007 18 9.00007L15 9.00002C15.4693 6.18434 16.615 2.89587 13.1181 2.04792Z"
					fill="currentColor"
				/>
				<path
					d="M2 11.5C2 10.3954 2.89543 9.5 4 9.5H4.5C5.88071 9.5 7 10.6193 7 12V18C7 19.3807 5.88071 20.5 4.5 20.5H4C2.89543 20.5 2 19.6046 2 18.5V11.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12.413 2.80853L11.9418 2.75C10.5 7.5 7.75 8.46342 7.75 11.2837V17.945C7.75 18.7474 8.21423 19.489 8.97294 19.7636C11.5477 20.6953 14.2409 20.8946 16.9636 20.6601C18.6263 20.5169 19.9292 19.2409 20.2956 17.6228L21.1727 13.7486C21.6109 11.8131 20.1299 9.97331 18.1336 9.97331H13.5185L14.5039 6.79075C15.0734 4.95159 14.3343 3.0472 12.413 2.80853Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 11.75C2.75 10.6454 3.64543 9.75 4.75 9.75C6.40685 9.75 7.75 11.0931 7.75 12.75V17.25C7.75 18.9069 6.40685 20.25 4.75 20.25C3.64543 20.25 2.75 19.3546 2.75 18.25V11.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconThumbUpCurved;
