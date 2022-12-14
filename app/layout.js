/* eslint-disable @next/next/no-head-element */
import localFont from "@next/font/local";
//import Navbar from "../components/Navbar.js";
const myFont = localFont({ src: "../fonts/FoundersGrotesk-Regular.otf" });

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light only" />
      </head>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
