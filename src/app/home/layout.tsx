import Head from 'next/head'
import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'เลือกซื้อคอร์ส',
}

export default function Page({children}) {
  return (
    <>
      {children}
    </>
  )
}