"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = false; // Remplace par la vérification d'authentification réelle
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router]);

  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
