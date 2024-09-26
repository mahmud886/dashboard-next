import {bebasNeue, archivo, notoSansBengali} from "@/app/fonts";
import "./globals.css";

export const metadata = {
  title: "T-Sports Website",
  description: "T-Sports Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${archivo.variable} ${notoSansBengali.variable}`}>{children}</body>
    </html>
  );
}
