// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'; // Added Viewport
import { Fira_Code, Poppins } from 'next/font/google';
import './globals.css';
import ScrollToTopButton from '@/components/ScrollToTopButton'; 
// Assuming Navigation is also used globally in layout
// import Navigation from '@/components/Navigation'; 
// import Footer from '@/components/Footer';


const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
  weight: ['300', '400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
});

// --- UPDATED METADATA WITH EXPLICIT ICON DEFINITIONS ---
export const metadata: Metadata = {
  title: 'João Grilo - Full-Stack Developer',
  description: "João Grilo's professional portfolio showcasing skills, projects, and experience.",
  // Explicitly define icons. Next.js will look for these in /public or /app.
  // If favicon.ico is in app/, it should be picked up. 
  // If you also have public/android-chrome-192x192.png etc., list them too.
  icons: {
    icon: [ // Array for multiple sizes/types
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' }, // Standard .ico
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png', // For apple-touch-icon
    // You can also add other icons like 'shortcut' if needed
  },
  // Add manifest if you have one in /app or /public
  // manifest: '/site.webmanifest', 
};

// Optional: Define viewport settings, e.g., theme color for browser UI
export const viewport: Viewport = {
  themeColor: '#070B1F', // Match your primary background
};
// -----------------------------------------------------


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${firaCode.variable} ${poppins.variable}`}>
      <body className={`${poppins.className} antialiased`}> 
        {/* If Navigation and Footer are global, they go here */}
        {/* <Navigation /> */} 
        {children}
        {/* <Footer /> */}
        <ScrollToTopButton /> 
      </body>
    </html>
  );
}