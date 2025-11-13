import Header from '@/components/header'
import Footer from '@/components/footer';
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yifei Zeng | Portfolio',
  description: 'Yifei Zeng is a software developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 text-gray-950 relative pt-28 sm:pt-36 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-gray-50 dark:text-opacity-90 min-h-screen`}
      >
        {/* Animated gradient orbs */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full bg-gradient-to-r from-primary-400/40 via-accent-400/40 to-primary-500/40 blur-[10rem] sm:w-[68.75rem] animate-float dark:from-primary-600/30 dark:via-accent-600/30 dark:to-primary-700/30"></div>
          <div className="absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full bg-gradient-to-r from-accent-400/40 via-primary-400/40 to-accent-500/40 blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] animate-float dark:from-accent-600/30 dark:via-primary-600/30 dark:to-accent-700/30" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-[-10rem] left-[50%] h-[25rem] w-[25rem] rounded-full bg-gradient-to-r from-primary-300/30 via-accent-300/30 to-primary-400/30 blur-[8rem] animate-float dark:from-primary-700/20 dark:via-accent-700/20 dark:to-primary-800/20" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)]"></div>
        
        {/* Pepe Coding Background - Fixed, right middle, 50% screen, transparent */}
        <div 
          className="fixed right-0 top-1/2 -translate-y-1/2 w-1/2 h-screen -z-10 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: 'url(/pepecoding.jpg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
          }}
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
            <Toaster containerClassName="fixed inset-0 flex items-center justify-center z-50" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
