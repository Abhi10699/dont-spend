'use client'
import { useRouter, usePathname } from 'next/navigation'
import "./globals.css";
import { AuthProvider } from "@/lib/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AuthProvider
          router={router}
          onUserValidationSuccessfull={_ => router.push("/home")}
          onUserValidationFailed={() => router.push("/")}>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
