// pages/dashboard.tsx

import React from 'react'
import { GetServerSideProps } from 'next'
import { UserData, DashboardProps } from '../app/types'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'

const DashboardPage: React.FC<DashboardProps> = ({ user }) => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome, {user.username}!
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {user.userType === 'attendee' ? (
              <AttendeeDashboard />
            ) : (
              <OrganizerDashboard />
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

const AttendeeDashboard: React.FC = () => {
  const router = useRouter()

  const handleRouteChange = (path: string) => {
    router.push(path)
  }

  const handleLogout = () => {
    // Implement logout logic here
    console.log('User logged out')
    // Redirect to login or home page after logout
  }

  return (
    <div>
      <p>This is the dashboard for convention attendees.</p>
      {/* Placeholder for attendee's avatar */}
      Avatar goes here
      {/* Additional content for convention attendees */}
      <button onClick={() => handleRouteChange('/scan')} className="btn">
        Go to QR Scanner
      </button>
      <button onClick={() => handleRouteChange('/survey')} className="btn">
        Go to Survey
      </button>
      <button onClick={() => handleRouteChange('/avatar')} className="btn">
        Customize Avatar
      </button>
      <button onClick={handleLogout} className="btn">
        Log Out
      </button>
    </div>
  )
}

const OrganizerDashboard: React.FC = () => {
  const router = useRouter()

  const handleRouteChange = (path: string) => {
    router.push(path)
  }

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Organizer logged out')
    // Redirect to login or home page after logout
  }

  return (
    <div>
      <p>This is the dashboard for convention organizers.</p>
      {/* Additional content for convention organizers */}
      <button
        onClick={() => handleRouteChange('/generate-code')}
        className="btn"
      >
        Generate QR Code
      </button>
      <button
        onClick={() => handleRouteChange('/generate-survey')}
        className="btn"
      >
        Generate Survey
      </button>
      <button onClick={handleLogout} className="btn">
        Log Out
      </button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch user data from your backend or authentication service
  // For demonstration, using dummy data
  const user: UserData = {
    id: '1',
    username: 'User',
    userType: 'organizer', // or 'organizer', based on authentication
  }

  return {
    props: { user }, // will be passed to the page component as props
  }
}

export default DashboardPage
