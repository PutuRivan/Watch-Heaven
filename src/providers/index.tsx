import React from 'react'
import ReactQueryProvider from './react-query-client'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
{children}
    </ReactQueryProvider>
  )
}
