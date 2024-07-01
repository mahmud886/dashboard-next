
import { ThemeProvider } from "@/components/theme-provider"
import { Poppins } from "next/font/google";
import "../globals.css";
import 'swiper/css';
import Navbar from "@/components/Navbar";

const poppins = Poppins({ subsets: ["latin"], display: 'swap', weight: ['300', '400', '500', '600', '700', '900'] });

export const metadata = {
  title: "Amber IT - Glee Glee Web Application",
  description: "Amber IT - Glee Glee Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={poppins.className}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar/>
      {children}
    </ThemeProvider>
    </body>
    </html>
  );
}
