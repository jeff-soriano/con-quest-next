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

export interface SurveyQuestion {
  question: string
  options: string[]
}

export interface CustomizationOption {
  label: string
  imageURL: string
}

export interface AvatarCustomizationOptions {
  hair: CustomizationOption[]
  skinColor: CustomizationOption[]
  eyeShape: CustomizationOption[]
  eyeColor: CustomizationOption[]
  upperBody: CustomizationOption[]
  lowerBody: CustomizationOption[]
  shoes: CustomizationOption[]
  weapon: CustomizationOption[]
}

export interface CurrentlySelectedAvatarOptions {
  hair: CustomizationOption
  skinColor: CustomizationOption
  eyeShape: CustomizationOption
  eyeColor: CustomizationOption
  upperBody: CustomizationOption
  lowerBody: CustomizationOption
  shoes: CustomizationOption
  weapon: CustomizationOption
}
