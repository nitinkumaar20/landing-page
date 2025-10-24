// @ts-ignore
import './globals.css'
import React from 'react'

export const metadata = {
  title: 'University Landing - Assessment',
  description: 'Two landing pages with simple APIs and lead form',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  )
}
