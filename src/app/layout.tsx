import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coquelicot",
  description: "E-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
