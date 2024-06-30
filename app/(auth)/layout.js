import React from 'react';
import {Inter} from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amber IT - Login",
  description: "Amber IT - Login",
};

export default function LoginLayout ({children}) {
  return (
    <html>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
};
