import { MainHeader } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Next Level Food",
  description: "Your first NextJS app!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
