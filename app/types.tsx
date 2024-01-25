// types.ts
export interface UserCredentials {
  username: string
  password: string
  userType: 'attendee' | 'organizer'
}

export interface LoginSignupProps {
  // Define any props here, if needed
}

export interface UserData {
  id: string
  username: string
  userType: 'attendee' | 'organizer'
  // Additional user-specific data
}

export interface DashboardProps {
  user: UserData
}
