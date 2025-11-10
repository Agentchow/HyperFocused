import { Poppins } from "next/font/google";
import "./globals.css";
import Grid from "../../helpers/Grid";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Hyperfocused",
  description:
    "Acquiring, building, and scaling high-margin digital and physical businesses where AI innovation handles traditional inefficiency.",
  openGraph: {
    title: "Hyperfocused",
    description:
      "Acquiring, building, and scaling high-margin digital and physical businesses where AI innovation handles traditional inefficiency.",
    url: "https://www.hyperfocusedholdings.com/",
    siteName: "GAUSSJORDAN",
    images: [
      {
        url: "https://www.hyperfocusedholdings.com/hflogo.webp",
        width: 500,
        height: 500,
        alt: "GAUSSJORDAN logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyperfocused",
    description:
      "Acquiring, building, and scaling high-margin digital and physical businesses where AI innovation handles traditional inefficiency.",
    images: ["/hflogo.webp"],
  },
  icons: {
    icon: "/hflogo.webp",
  },
};
export const dynamic = "force-static";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} antialiased bg-white text-c-black`}
      >
        {children}
        {/* <Grid /> */}
      </body>
    </html>
  );
}
