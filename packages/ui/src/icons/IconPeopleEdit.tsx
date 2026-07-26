import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPeopleEdit: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="people-edit, edit-user, edit-rights, user-rights"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M14.5 22C14.2239 22 14 21.7761 14 21.5V21.0533C14 20.0587 14.3951 19.1049 15.0983 18.4016L18.7626 14.7374C19.446 14.054 20.554 14.054 21.2374 14.7374L21.2626 14.7626C21.946 15.446 21.946 16.554 21.2626 17.2374L17.5983 20.9016C16.8951 21.6049 15.9413 22 14.9467 22H14.5Z"
					fill="currentColor"
				/>
				<path
					d="M4.77277 16.7569C6.14047 14.213 8.73708 12.5 12 12.5C14.0086 12.5 15.7648 13.1492 17.1372 14.2417L14.0377 17.3412C13.0657 18.3132 12.5143 19.627 12.5003 21H7.79526C6.69558 21 5.67643 20.5105 5.05292 19.7348C4.41122 18.9365 4.19622 17.8293 4.77277 16.7569Z"
					fill="currentColor"
				/>
				<path
					d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="6.5"
					r="3.75"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.2497 20.25H7.79494C6.02717 20.25 4.59593 18.6691 5.43304 17.1121C6.67402 14.8039 9.02123 13.25 11.9997 13.25C12.7986 13.25 13.5521 13.3618 14.251 13.57"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 21.2499V20.7425C13.75 19.9469 14.0661 19.1838 14.6287 18.6212L18.375 14.8749C18.8582 14.3916 19.6418 14.3916 20.125 14.8749C20.6082 15.3581 20.6082 16.1416 20.125 16.6249L16.3787 20.3712C15.8161 20.9338 15.053 21.2499 14.2574 21.2499H13.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPeopleEdit;
