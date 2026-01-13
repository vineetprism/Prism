import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const GA_ID = "G-801228MBSD";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Development Company in Delhi & Gurugram | Prism Infoways",
  description:
    "Looking for a trusted web development company in Delhi, Gurugram & India? Prism Infoways delivers expert IT solutions, web design & digital transformation. Get started today!",
  keywords: [
    "Web Development Company India",
    "Web Design Services India",
    "IT Solutions Company India",
    "Digital Transformation Services India",
    "Web Development Company in Gurugram",
    "Web Development Company in Delhi",
    "Website Designing Company in Delhi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics script loaded client-side after hydration */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
      </head>

      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
