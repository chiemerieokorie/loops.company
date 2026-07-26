import type { OfficeLocation } from "./contact-offices";

export const defaultOffices: OfficeLocation[] = [
	{
		city: "San Francisco",
		country: "United States",
		address: "100 Market Street, Suite 300",
		timezone: "PST (UTC-8)",
		imageSrc:
			"https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=400&auto=format&fit=crop",
		imageAlt: "San Francisco",
	},
	{
		city: "London",
		country: "United Kingdom",
		address: "10 Finsbury Square",
		timezone: "GMT (UTC+0)",
		imageSrc:
			"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=400&auto=format&fit=crop",
		imageAlt: "London",
	},
	{
		city: "Singapore",
		country: "Singapore",
		address: "1 Raffles Place, Tower 2",
		timezone: "SGT (UTC+8)",
		imageSrc:
			"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=400&auto=format&fit=crop",
		imageAlt: "Singapore",
	},
];
