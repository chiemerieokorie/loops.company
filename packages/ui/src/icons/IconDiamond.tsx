import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDiamond: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="diamond, pro, premium">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.03024 3.97197C6.72008 3.34647 7.61798 3 8.54918 3H15.4483C16.3795 3 17.2774 3.34647 17.9672 3.97197L21.6687 7.32827C23.2563 8.76776 23.3168 11.2426 21.8014 12.7579L14.6504 19.909C13.1859 21.3735 10.8115 21.3735 9.34708 19.909L2.19601 12.7579C0.680677 11.2426 0.741167 8.76776 2.32873 7.32827L6.03024 3.97197ZM9.02906 7.21967C9.32195 7.51256 9.32195 7.98744 9.02906 8.28033L7.30939 10L9.02906 11.7197C9.32195 12.0126 9.32195 12.4874 9.02906 12.7803C8.73616 13.0732 8.26129 13.0732 7.9684 12.7803L5.7184 10.5303C5.4255 10.2374 5.4255 9.76256 5.7184 9.46967L7.9684 7.21967C8.26129 6.92678 8.73616 6.92678 9.02906 7.21967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.5353 4.52758L2.83379 7.88387C1.56374 9.03547 1.51535 11.0153 2.72762 12.2276L9.87868 19.3787C11.0503 20.5503 12.9497 20.5503 14.1213 19.3787L21.2724 12.2276C22.4847 11.0153 22.4363 9.03547 21.1662 7.88387L17.4647 4.52758C16.9128 4.02717 16.1945 3.75 15.4495 3.75H8.55045C7.80549 3.75 7.08717 4.02717 6.5353 4.52758Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.5 7.75L6.25 10L8.5 12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDiamond;
