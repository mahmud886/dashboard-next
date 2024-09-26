import { Bebas_Neue, Archivo, Noto_Sans_Bengali } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], display: 'swap', weight: ['400'], variable: '--font-bebasNeue' });
const archivo = Archivo({ subsets: ["latin"], display: 'swap', weight: ['300', '400', '500', '600', '700', '900'], variable: '--font-archivo' });
const notoSansBengali = Noto_Sans_Bengali({ subsets: ["latin"], display: 'swap', weight: ['300', '400', '500', '600', '700', '900'], variable: '--font-notoSansBengali' });


export { bebasNeue, archivo, notoSansBengali }