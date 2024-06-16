import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import "../globals.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Auth - ReThread',
  description: 'A Next13 ReThreads Application'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <div className="w-full flex justify-center items-center min-h-sd">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}