import { Inter } from "next/font/google"
import "./globals.css"
import ClientWrapper from "./util/client_wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Admin | Star Astro",
  description:
    "Manage and oversee all Star Astro app operations, user data, and analytics from a centralized dashboard."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
