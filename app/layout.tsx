import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Alex | Web3 Engineer",
  description:
    "Full-stack Web3 engineer building across DeFi, prediction markets, zero-knowledge proofs, and blockchain gaming.",
  openGraph: {
    title: "Dr. Alex | Web3 Engineer",
    description:
      "Full-stack Web3 engineer building across DeFi, prediction markets, zero-knowledge proofs, and blockchain gaming.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Dr. Alex - Web3 Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Alex | Web3 Engineer",
    description:
      "Full-stack Web3 engineer. DeFi, prediction markets, ZK proofs, blockchain gaming.",
    creator: "@soligxbt",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
