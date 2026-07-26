import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBroom: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="broom, brush, clear, clean">
		{variant === "filled" ? (
			<>
				<path
					d="M19.5076 2.28125C20.8461 3.0232 21.3289 4.71026 20.5855 6.04799L17.8148 11.0342L17.9285 11.097C19.7422 12.0994 20.3997 14.3833 19.3929 16.1946C19.3675 16.2403 19.3421 16.286 19.3167 16.3317C19.1157 16.6932 18.6598 16.8235 18.298 16.623L7.90606 10.8626C7.54344 10.6616 7.4127 10.2045 7.61419 9.8422L7.68619 9.71272C8.69084 7.90599 10.9681 7.25308 12.7775 8.25303L12.9337 8.33938L15.7536 3.34222C16.5012 2.01755 18.1772 1.54384 19.5076 2.28125Z"
					fill="currentColor"
				/>
				<path
					d="M7.58444 11.9141C7.13469 12.2793 6.6794 12.527 6.20939 12.681C5.43579 12.9344 4.5332 12.963 3.41153 12.7249C2.73006 12.5803 2.11081 13.1601 2.21455 13.849C2.78886 17.6629 6.29574 20.65 9.69242 21.5749C11.4167 22.0444 13.2678 22.0292 14.8012 21.182C16.1208 20.4529 17.0691 19.1836 17.5061 17.401L7.58444 11.9141Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12.2536 9.24455C10.8074 8.44713 8.98872 8.96845 8.1845 10.4108C8.08654 10.5865 7.98858 10.7622 7.89062 10.9379L18.1482 16.5906C18.2313 16.4416 18.3262 16.2713 18.4279 16.0888C19.2365 14.6375 18.7107 12.805 17.2558 12.0028L12.2536 9.24455Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.9883 9.00512L15.8934 3.92207C16.5242 2.81843 17.9311 2.42534 19.0478 3.04074C20.1729 3.66076 20.5795 5.07016 19.9558 6.18872L17.0911 11.3267"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.92867 11.8184C7.2347 13.8083 5.31367 14.409 2.75 13.8659C3.77941 20.6894 15.6222 25.1274 16.652 16.4253"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBroom;
