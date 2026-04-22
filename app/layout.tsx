import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VON STYLUS Consult | Where Precision Meets Bold Vision",
  description: "VON STYLUS Consult — a bold, full-service consultancy in Lagos offering business strategy, creative media, advertising, and event management. We transform ambition into results.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}