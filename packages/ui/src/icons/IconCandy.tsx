import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCandy: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="candy, sweet">
		{variant === "filled" ? (
			<>
				<path
					d="M5.91529 14.2873C6.57321 16.037 7.96352 17.4272 9.71314 18.0852C9.49558 19.2603 9.14374 20.43 8.61841 21.3703C8.12197 22.259 6.95636 22.2063 6.23658 21.4866L2.51392 17.7639C1.79443 17.0441 1.74151 15.8782 2.63013 15.3821C3.57063 14.8571 4.74086 14.505 5.91529 14.2873Z"
					fill="currentColor"
				/>
				<path
					d="M12.0002 7.00022C14.7617 7.00022 17.0002 9.2388 17.0002 12.0002C17.0002 14.7616 14.7617 17.0002 12.0002 17.0002C9.23896 17.0001 7.00026 14.7615 7.00025 12.0002C7.00025 9.23889 9.23895 7.00037 12.0002 7.00022Z"
					fill="currentColor"
				/>
				<path
					d="M15.3831 2.63011C15.8792 1.74154 17.0442 1.79442 17.7639 2.5139L21.4866 6.23655C22.2063 6.95634 22.2592 8.12224 21.3704 8.61839C20.4296 9.14348 19.2589 9.4945 18.0842 9.71214C17.426 7.96294 16.0368 6.57304 14.2874 5.91526C14.505 4.74072 14.858 3.5707 15.3831 2.63011Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="12"
					r="5.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.9643 10.2498C18.19 9.95022 19.5641 9.44338 20.6762 8.69134C21.5196 8.12098 21.4557 6.95551 20.7358 6.23557L17.7642 3.26396C17.0443 2.54402 15.8788 2.48018 15.3084 3.32358C14.5564 4.43563 14.0495 5.8098 13.75 7.03548"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.2493 16.9643C9.94973 18.19 9.44289 19.5641 8.69085 20.6762C8.12049 21.5196 6.95502 21.4557 6.23508 20.7358L3.26348 17.7642C2.54354 17.0443 2.4797 15.8788 3.32309 15.3084C4.43514 14.5564 5.80931 14.0495 7.03499 13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCandy;
