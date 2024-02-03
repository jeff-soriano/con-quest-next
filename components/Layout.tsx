// components/Layout.tsx
import React from 'react'
import Navigation from './Navigation'
import { UserProvider } from '@auth0/nextjs-auth0/client'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <UserProvider>
      <Navigation />
      <main>{children}</main>
    </UserProvider>
  )
}

export default Layout
