import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconApples: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="apples, fruit">
		{variant === "filled" ? (
			<>
				<path
					d="M9.28805 1.58598C8.9213 1.39344 8.46791 1.53466 8.27537 1.90141C8.08283 2.26815 8.22405 2.72154 8.5908 2.91408C9.45139 3.36589 10.0476 3.90189 10.4608 4.53893C10.6872 4.8879 10.8672 5.28044 11.0033 5.7266C8.37666 4.96411 6.32437 5.49114 4.93407 6.93496C3.39784 8.53031 2.86242 11.061 3.02924 13.483C3.19697 15.9183 4.08532 18.4441 5.64312 20.1124C6.4294 20.9545 7.40072 21.5919 8.54386 21.8609C9.6075 22.1112 10.7695 22.0305 11.9988 21.5653C13.2284 22.0305 14.3906 22.1112 15.4545 21.8609C16.5979 21.5919 17.5694 20.9546 18.3559 20.1125C19.9141 18.4441 20.8027 15.9183 20.9705 13.4831C21.1373 11.061 20.6018 8.53026 19.0652 6.93491C17.6034 5.41718 15.41 4.91253 12.5866 5.85399C12.4117 5.07108 12.1327 4.35996 11.7193 3.72263C11.1444 2.83635 10.3385 2.13749 9.28805 1.58598Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11.9989 20.7572C2.31195 24.87 -0.237657 1.73584 11.9991 6.87681C24.2385 1.73586 21.6885 24.87 11.9989 20.7572Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.93945 2.25C10.8505 3.25332 11.7435 4.71974 11.999 6.87682"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconApples;
