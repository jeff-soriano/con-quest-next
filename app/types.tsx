// types.ts
export interface UserCredentials {
  username: string
  password: string
  userType: 'goer' | 'organizer'
}

export interface LoginSignupProps {
  // Define any props here, if needed
}

export interface UserData {
  id: string
  username: string
  userType: 'goer' | 'organizer'
  // Additional user-specific data
}

export interface DashboardProps {
  user: UserData
}
