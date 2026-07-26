import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWrite3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="write-3, fountain-pen, vector, ink">
		{variant === "filled" ? (
			<>
				<path
					d="M18.8965 11.4863C19.644 12.5175 19.8174 13.8577 19.3564 15.0449L17.2568 20.4502H19.249C19.6909 20.4502 20.0488 20.8082 20.0488 21.25C20.0488 21.6918 19.6909 22.0498 19.249 22.0498H4.74902C4.3072 22.0498 3.94922 21.6918 3.94922 21.25C3.94922 20.8082 4.3072 20.4502 4.74902 20.4502H6.74121L4.6416 15.0449C4.18059 13.8577 4.35398 12.5175 5.10156 11.4863L11.249 3.00684V11.6143C10.2347 11.9328 9.49902 12.8806 9.49902 14C9.49902 15.3807 10.6183 16.5 11.999 16.5C13.3797 16.4999 14.499 15.3807 14.499 14C14.499 12.8806 13.7633 11.9328 12.749 11.6143V3.00684L18.8965 11.4863Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 21.25H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.6"
				/>
				<path
					d="M7.85714 21.25L5.32568 14.7322C4.96562 13.8052 5.08839 12.7599 5.65348 11.9415L12 2.75L18.3465 11.9415C18.9116 12.7599 19.0344 13.8052 18.6743 14.7322L16.1429 21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
				<path d="M12 12V3" stroke="currentColor" strokeWidth="1.5" />
			</>
		)}
	</CentralIconBase>
);

export default IconWrite3;
