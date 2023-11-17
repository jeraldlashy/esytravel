import "./globals.css";

export const metadata = {
  title: "EsyTravel",
  description: "Travel with incluvisity",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className="h-full bg-white">
        <body className="h-full">{children}</body>
      </html>
    </>
  );
}
