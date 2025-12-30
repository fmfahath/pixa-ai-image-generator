import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Pixa AI Image Generator",
  description: "Generate images using the power of AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
