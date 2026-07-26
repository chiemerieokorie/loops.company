import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconUserGroup: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="user-group, team, club, member, friends, community"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M15.625 11.9414C16.7631 12.7976 17.5 14.1585 17.5 15.6924C17.5 17.5191 16.0191 19 14.1924 19H9.80762C7.98089 19 6.50004 17.5191 6.5 15.6924C6.5 14.1588 7.23625 12.7977 8.37402 11.9414C9.28508 12.901 10.5723 13.5 12 13.5C13.4274 13.5 14.714 12.9007 15.625 11.9414Z"
					fill="currentColor"
				/>
				<path
					d="M1.10156 12.6074C1.86084 13.3159 2.87956 13.75 4 13.75C4.48946 13.75 4.95909 13.6661 5.39648 13.5137C5.1414 14.1915 5 14.9254 5 15.6924C5.00002 16.521 5.20902 17.3009 5.57812 17.9814C5.47679 17.9929 5.37392 18 5.26953 18H2.73047C1.22254 17.9998 0.000162329 16.7775 0 15.2695C0 14.2302 0.421112 13.2894 1.10156 12.6074Z"
					fill="currentColor"
				/>
				<path
					d="M22.8975 12.6074C23.5782 13.2894 24 14.2299 24 15.2695C23.9998 16.7775 22.7775 17.9998 21.2695 18H18.7305C18.6258 18 18.5225 17.9929 18.4209 17.9814C18.7901 17.3008 19 16.5211 19 15.6924C19 14.9251 18.8578 14.1914 18.6025 13.5137C19.0402 13.6662 19.5103 13.75 20 13.75C21.1202 13.75 22.1382 13.3157 22.8975 12.6074Z"
					fill="currentColor"
				/>
				<path
					d="M4 6.75C5.51878 6.75 6.75 7.98122 6.75 9.5C6.75 11.0188 5.51878 12.25 4 12.25C2.48122 12.25 1.25 11.0188 1.25 9.5C1.25 7.98122 2.48122 6.75 4 6.75Z"
					fill="currentColor"
				/>
				<path
					d="M20 6.75C21.5188 6.75 22.75 7.98122 22.75 9.5C22.75 11.0188 21.5188 12.25 20 12.25C18.4812 12.25 17.25 11.0188 17.25 9.5C17.25 7.98122 18.4812 6.75 20 6.75Z"
					fill="currentColor"
				/>
				<path
					d="M12 5C13.933 5 15.5 6.567 15.5 8.5C15.5 10.433 13.933 12 12 12C10.067 12 8.5 10.433 8.5 8.5C8.5 6.567 10.067 5 12 5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="8.75"
					r="3"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="4"
					cy="9.80005"
					r="2"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="20"
					cy="9.80005"
					r="2"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.5833 11.75H12.4167C14.8099 11.75 16.75 13.6901 16.75 16.0833C16.75 17.28 15.78 18.25 14.5833 18.25H9.41667C8.22005 18.25 7.25 17.28 7.25 16.0833C7.25 13.6901 9.1901 11.75 11.5833 11.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.25 17.2602H3.75C2.09315 17.2602 0.602599 15.8581 1.18922 14.3086C1.64924 13.0935 2.51652 12.2276 4 11.8301"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.75 17.2601H20.25C21.9069 17.2601 23.3974 15.8581 22.8108 14.3085C22.3507 13.0934 21.4835 12.2276 20 11.8301"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconUserGroup;
