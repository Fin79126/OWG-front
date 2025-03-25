import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["900"],
  preload: false,
  variable: "--font-noto-sans-jp",
  display: "swap",
  fallback: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "sans-serif"],
});
export { notoSansJp };
