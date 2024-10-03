
import "./globals.css";
import { Inter } from 'next/font/google'
import {ClerkProvider} from '@clerk/nextjs'
import Header from "../components/header";

export const metadata = {
  title: "Scheduler",
  description: "Schedule your meetings and events at your finger tips",
};

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header/>
        <main className="min-h-screen bg-gradient-to-b from-blue-200 to-white">
        {children}
        </main>
        {/* Footer */}
        <footer className="bg-blue-100 py-12 ">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>
            © 2024 Avinash Vishwakarma 
            </p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
