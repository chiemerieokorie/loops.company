import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTextEdit: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="text-edit, prompts, comment, draft">
		{variant === "filled" ? (
			<>
				<path
					d="M21.2114 5.78858C19.7758 4.35303 17.4483 4.35302 16.0128 5.78858L8.09835 13.703C7.39509 14.4063 7 15.3601 7 16.3547V19.2499C7 19.6642 7.33579 19.9999 7.75 19.9999H10.6453C11.6399 19.9999 12.5937 19.6049 13.2969 18.9016L21.2114 10.9872C22.6469 9.55162 22.6469 7.22413 21.2114 5.78858Z"
					fill="currentColor"
				/>
				<path
					d="M1.75 4.99994C1.33579 4.99994 1 5.33573 1 5.74994C1 6.16416 1.33579 6.49994 1.75 6.49994H9.25C9.66421 6.49994 10 6.16416 10 5.74994C10 5.33573 9.66421 4.99994 9.25 4.99994H1.75Z"
					fill="currentColor"
				/>
				<path
					d="M1.75 8.99994C1.33579 8.99994 1 9.33573 1 9.74994C1 10.1642 1.33579 10.4999 1.75 10.4999H6.25C6.66421 10.4999 7 10.1642 7 9.74994C7 9.33573 6.66421 8.99994 6.25 8.99994H1.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M1.75 5.75H9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M1.75 9.75H6.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.7666 18.3713L20.681 10.4568C21.8237 9.31418 21.8237 7.46157 20.681 6.31891C19.5384 5.17625 17.6858 5.17625 16.5431 6.31891L8.62868 14.2333C8.06607 14.7959 7.75 15.559 7.75 16.3547V19.2499H10.6453C11.4409 19.2499 12.204 18.9339 12.7666 18.3713Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTextEdit;
