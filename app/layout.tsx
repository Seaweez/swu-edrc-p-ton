import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "EDRC by SWU",
		template: "%s | EDRC by SWU",
	},
	description: "เคล็ดลับ วิธีเอาตัวรอด ในโลกยุคใหม่! กับสังคมดิจิทัล หรือสื่อออนไลน์ต่างๆ พร้อมทำความเข้าใจ และจำลองสถานการณ์ของ พฤติกรรม ในเชิงลึก",
	openGraph: {
		title: "EDRC by SWU",
		description:
			"Software engineer at upstash.com and founder of planetfall.io",
		url: "https://EDRC by SWU",
		siteName: "EDRC by SWU",
		images: [
			{
				url: "/msv.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Chronark",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				style={{ backgroundColor: '#2e6bd3' }}
				className={`bg-w ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
					}`}
			>
				{children}
			</body>
		</html>
	);
}
