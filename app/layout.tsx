import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "./components/themeProvider";
import "./globals.css";
import Navbar from "./components/header";
import { Toaster } from "react-hot-toast";

const alan = localFont({
  src: "../public/fonts/Alan_Sans/AlanSans-VariableFont_wght.ttf",
  variable: "--font-alan",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Contact | Pankeet Manubarwala",
  description: "Curated by Pankeet M",
  keywords: [
    "Contact Pankeet",
    "Portfolio",
    "NextJs Developer"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${alan.className} min-h-screen flex flex-col`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Toaster position="top-right" reverseOrder={false} />
          <Navbar /> 
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
