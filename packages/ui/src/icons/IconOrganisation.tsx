import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconOrganisation: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="organisation, organimgram">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2C8.96243 2 6.5 4.46243 6.5 7.5C6.5 10.2832 8.56724 12.5835 11.25 12.9493V14.0805C9.91903 14.3711 8.87113 15.419 8.58054 16.75H7.91946C7.57612 15.1774 6.17556 14 4.5 14C2.567 14 1 15.567 1 17.5C1 19.433 2.567 21 4.5 21C6.17556 21 7.57612 19.8226 7.91946 18.25H8.58054C8.92388 19.8226 10.3244 21 12 21C13.6756 21 15.0761 19.8226 15.4195 18.25H16.0805C16.4239 19.8226 17.8244 21 19.5 21C21.433 21 23 19.433 23 17.5C23 15.567 21.433 14 19.5 14C17.8244 14 16.4239 15.1774 16.0805 16.75H15.4195C15.1289 15.419 14.081 14.3711 12.75 14.0805V12.9493C15.4328 12.5835 17.5 10.2832 17.5 7.5C17.5 4.46243 15.0376 2 12 2Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M16.75 7.5C16.75 10.1234 14.6234 12.25 12 12.25C9.37665 12.25 7.25 10.1234 7.25 7.5C7.25 4.87665 9.37665 2.75 12 2.75C14.6234 2.75 16.75 4.87665 16.75 7.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M7.25 17.5C7.25 19.0188 6.01878 20.25 4.5 20.25C2.98122 20.25 1.75 19.0188 1.75 17.5C1.75 15.9812 2.98122 14.75 4.5 14.75C6.01878 14.75 7.25 15.9812 7.25 17.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 17.5C14.75 19.0188 13.5188 20.25 12 20.25C10.4812 20.25 9.25 19.0188 9.25 17.5C9.25 15.9812 10.4812 14.75 12 14.75C13.5188 14.75 14.75 15.9812 14.75 17.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M22.25 17.5C22.25 19.0188 21.0188 20.25 19.5 20.25C17.9812 20.25 16.75 19.0188 16.75 17.5C16.75 15.9812 17.9812 14.75 19.5 14.75C21.0188 14.75 22.25 15.9812 22.25 17.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path d="M12 12V15" stroke="currentColor" strokeWidth="1.5" />
				<path d="M9.5 17.5H7" stroke="currentColor" strokeWidth="1.5" />
				<path d="M14.5 17.5H17" stroke="currentColor" strokeWidth="1.5" />
			</>
		)}
	</CentralIconBase>
);

export default IconOrganisation;
