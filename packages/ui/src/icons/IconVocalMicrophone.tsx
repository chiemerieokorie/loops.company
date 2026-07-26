import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVocalMicrophone: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="vocal-microphone, singing, karaoke">
		{variant === "filled" ? (
			<>
				<path
					d="M14.7517 13.25L6.53589 20.5391C5.67432 21.3034 4.36595 21.2646 3.55151 20.4502C2.73709 19.6358 2.69827 18.3274 3.46264 17.4658L10.7517 9.25L14.7517 13.25Z"
					fill="currentColor"
				/>
				<path
					d="M16.5017 2.5C19.263 2.50015 21.5017 4.73867 21.5017 7.5C21.5017 10.2613 19.263 12.4998 16.5017 12.5C16.3023 12.5 16.1052 12.4885 15.9119 12.4658L11.5359 8.08984C11.5132 7.89639 11.5017 7.69956 11.5017 7.5C11.5017 4.73858 13.7403 2.5 16.5017 2.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					clipRule="evenodd"
					d="M16.375 12C18.7912 12 20.75 10.0412 20.75 7.625C20.75 5.20875 18.7912 3.25 16.375 3.25C13.9588 3.25 12 5.20875 12 7.625C12 7.79966 12.0102 7.97193 12.0301 8.14125L15.8588 11.9699C16.0281 11.9898 16.2003 12 16.375 12Z"
					fillRule="evenodd"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.38158"
				/>
				<path
					d="M12.0008 8L3.92404 16.927C3.12678 17.8082 3.16055 19.1597 4.00082 20C4.8411 20.8403 6.19267 20.874 7.07386 20.0768L16.0008 12"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVocalMicrophone;
