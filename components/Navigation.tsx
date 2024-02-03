// components/Navigation.tsx
'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import React from 'react'
import Link from 'next/link'

const Navigation: React.FC = () => {
  const { user } = useUser()

  return (
    <nav className="flex justify-between py-4 px-8 bg-gray-200">
      <Link className="text-blue-500" href="/">
        Home
      </Link>
      {user ? (
        <Link className="text-blue-500" href="/api/auth/logout">
          Logout
        </Link>
      ) : (
        <Link className="text-blue-500" href="/api/auth/login">
          Login
        </Link>
      )}
    </nav>
  )
}

export default Navigation
