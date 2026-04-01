import { Bytesized, Jersey_25 } from "next/font/google"
import "@/app/scss/style.scss"
import localFont from "next/font/local"
import Navbar from "./components/Navbar"

const cubic = localFont({
  src: "./assets/fonts/Cubic_11.ttf",
  variable: "--cubic",
  display: "swap",
  subsets: ["latin"],
  preload: true,
  style: "normal",
  weight: "400",
})
const jersey = Jersey_25({
  variable: "--jersey",
  subsets: ["latin"],
  preload: true,
  style: "normal",
  weight: "400",
})
const bytesized = Bytesized({
  variable: "--bytesized",
  subsets: ["latin"],
  preload: true,
  style: "normal",
  weight: "400",
  fallback: ["var(--cubic)"],
})

export const metadata = {
  title: {
    template: "ROBOT | %s",
    default: "ROBOT",
  },
  description: "關於我的個人履歷展示",
  keywords: ["React", "3D", "Three.js", "Next.js", "個人履歷"],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  applicationName: "ROBOT | Personal resume",
  author: [{ name: "Tomy" }],
  creator: "Tomy",
  publisher: "Tomy",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bytesized.variable} ${jersey.variable} ${cubic.variable}`}
      >
        <svg>
          <defs>
            <filter id="noise">
              <feTurbulence id="turbulence">
                <animate
                  attributeName="baseFrequency"
                  dur="50s"
                  values="0.9 0.9;0.8 0.8;0.9 0.9;"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale={60}/>
            </filter>
          </defs>
        </svg>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
