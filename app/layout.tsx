'use client'
import { useRouter } from 'next/navigation'
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
      <head>
        <meta charSet="UTF-8"/>
        <title>CENTIFY - Track Your Daily Expenses and Save Money</title>
        <meta name="description" content="CENTIFY is a minimalistic money-saving app that helps you track your daily expenses, calculate savings, and monitor your progress toward financial goals."/>
        <meta name="keywords" content="money saver, expense tracker, financial goals, daily expenses, savings app, personal finance, budgeting, CENTIFY"/>
        <link rel="canonical" href="https://dont-spend.vercel.com"/>
        <meta name="author" content="Abhi Patel"/>
        
        <meta property="og:title" content="CENTIFY - Track Your Daily Expenses"/>
        <meta property="og:description" content="Easily manage your daily expenses and achieve your financial goals with CENTIFY, the ultimate money-saving app."/>
        <meta property="og:url" content="https://dont-spend.vercel.com"/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="CENTIFY - Track Your Daily Expenses"/>
        <meta name="twitter:description" content="Manage your expenses effectively and reach your savings goals with CENTIFY."/>
      </head>
      
      <body className={`antialiased`}>
        <AuthProvider
          router={router}
          onUserValidationSuccessfull={() => router.push("/home")}
          onUserValidationFailed={() => router.push("/")}>
          {children}
        </AuthProvider>
      </body>
    </html >
  );
}
