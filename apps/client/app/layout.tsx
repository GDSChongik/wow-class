import "./global.css";
import "wowds-ui/styles.css";

import type { Metadata } from "next";

import { JotaiProvider } from "../components/JotaiProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>
        <JotaiProvider>{children}</JotaiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
