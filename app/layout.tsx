import { Inter } from "@next/font/google";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head />
      <body className={clsx(inter.variable, "font-sans")}>{children}</body>
    </html>
  );
}
