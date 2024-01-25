// pages/dashboard.tsx
import React from 'react'
import { GetServerSideProps } from 'next'
import { UserData, DashboardProps } from '../app/types'

const DashboardPage: React.FC<DashboardProps> = ({ user }) => {
  return (
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
  )
}

const AttendeeDashboard: React.FC = () => {
  return (
    <div>
      <p>This is the dashboard for convention attendees.</p>
      {/* Additional content for convention attendees */}
    </div>
  )
}

const OrganizerDashboard: React.FC = () => {
  return (
    <div>
      <p>This is the dashboard for convention organizers.</p>
      {/* Additional content for convention organizers */}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch user data from your backend or authentication service
  // For demonstration, using dummy data
  const user: UserData = {
    id: '1',
    username: 'User',
    userType: 'attendee', // or 'organizer', based on authentication
  }

  return {
    props: { user }, // will be passed to the page component as props
  }
}

export default DashboardPage
