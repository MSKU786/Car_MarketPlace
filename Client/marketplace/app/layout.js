import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/ui/header';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'CarFair',
  description: 'Find you next car here',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-50`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-400">
              <p>Made by Manish..... </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
