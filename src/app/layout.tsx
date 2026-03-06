import type { Metadata } from "next";
import { Oswald, Montserrat } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Александр Пушной",
  description: "Александр Пушной - фанатский сайт",
  icons: {
    icon: "/Fur-bearing/favicon.png",
  },
  authors: [
    {
      name: "DaniilGordeev(BlackDarkes)",
      url: "https://github.com/BlackDarkes",
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${oswald.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
