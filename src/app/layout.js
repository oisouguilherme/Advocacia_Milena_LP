import Head from 'next/head'
import './globals.css'

export const metadata = {
  title: 'GONÇALVES & CORDEIRO GUATIMOSIM – ADVOGADOS ASSOCIADOS',
  description: 'Generated by create next app',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body >{children}</body>
    </html>
  )
}
