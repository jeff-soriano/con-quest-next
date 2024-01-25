import {
  AvatarCustomizationOptions,
  CurrentlySelectedAvatarOptions,
  CustomizationOption,
} from '@/app/types'
import React, { FormEvent, useState } from 'react'

// dummy data for customization options
const customizationOptions: AvatarCustomizationOptions = {
  hair: [
    { label: 'Hair 1', imageURL: '/path/to/hair1.png' },
    { label: 'Hair 2', imageURL: '/path/to/hair2.png' },
    { label: 'Hair 3', imageURL: '/path/to/hair3.png' },
  ],
  skinColor: [
    { label: 'Skin 1', imageURL: '/path/to/skin1.png' },
    { label: 'Skin 2', imageURL: '/path/to/skin2.png' },
    { label: 'Skin 3', imageURL: '/path/to/skin3.png' },
  ],
  eyeShape: [
    { label: 'Eye Shape 1', imageURL: '/path/to/eye1.png' },
    { label: 'Eye Shape 2', imageURL: '/path/to/eye2.png' },
    { label: 'Eye Shape 3', imageURL: '/path/to/eye3.png' },
  ],
  eyeColor: [
    { label: 'Eye Color 1', imageURL: '/path/to/eyecolor1.png' },
    { label: 'Eye Color 2', imageURL: '/path/to/eyecolor2.png' },
    { label: 'Eye Color 3', imageURL: '/path/to/eyecolor3.png' },
  ],
  upperBody: [
    { label: 'Upper Body 1', imageURL: '/path/to/upperbody1.png' },
    { label: 'Upper Body 2', imageURL: '/path/to/upperbody2.png' },
    { label: 'Upper Body 3', imageURL: '/path/to/upperbody3.png' },
  ],
  lowerBody: [
    { label: 'Lower Body 1', imageURL: '/path/to/lowerbody1.png' },
    { label: 'Lower Body 2', imageURL: '/path/to/lowerbody2.png' },
    { label: 'Lower Body 3', imageURL: '/path/to/lowerbody3.png' },
  ],
  shoes: [
    { label: 'Shoes 1', imageURL: '/path/to/shoes1.png' },
    { label: 'Shoes 2', imageURL: '/path/to/shoes2.png' },
    { label: 'Shoes 3', imageURL: '/path/to/shoes3.png' },
  ],
  weapon: [
    { label: 'Weapon 1', imageURL: '/path/to/weapon1.png' },
    { label: 'Weapon 2', imageURL: '/path/to/weapon2.png' },
    { label: 'Weapon 3', imageURL: '/path/to/weapon3.png' },
  ],
}
const AvatarCustomizationComponent: React.FC = () => {
  const [selectedOptions, setSelectedOptions] =
    useState<CurrentlySelectedAvatarOptions>({
      hair: customizationOptions.hair[0],
      skinColor: customizationOptions.skinColor[0],
      eyeShape: customizationOptions.eyeShape[0],
      eyeColor: customizationOptions.eyeColor[0],
      upperBody: customizationOptions.upperBody[0],
      lowerBody: customizationOptions.lowerBody[0],
      shoes: customizationOptions.shoes[0],
      weapon: customizationOptions.weapon[0],
    })

  const handleSelectChange = (
    part: keyof AvatarCustomizationOptions,
    selectedOption: CustomizationOption
  ) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [part]: selectedOption,
    }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault() // Prevent the default form submission behavior
    console.log('Selected Customization Options:', selectedOptions)
    // Here you can also send this data to the backend or perform other actions
  }

  return (
    <div className="avatar-customization">
      <h2 className="text-xl font-bold">Customize Your Avatar</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(customizationOptions).map(
          ([part, options]: [string, CustomizationOption[]]) => (
            <div key={part} className="mb-4">
              {/* ...Dropdowns and Current Selections... */}
              <select
                value={
                  selectedOptions[part as keyof AvatarCustomizationOptions]
                    .label
                }
                onChange={(e) => {
                  const newOption = options.find(
                    (option: CustomizationOption) =>
                      option.label === e.target.value
                  )
                  if (newOption) {
                    handleSelectChange(
                      part as keyof AvatarCustomizationOptions,
                      newOption
                    )
                  }
                }}
                className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {options.map((option, index) => (
                  <option key={index}>{option.label}</option>
                ))}
              </select>
            </div>
          )
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Customization
        </button>
      </form>
      {/* Display of current selections */}
      <div className="current-selections">
        {Object.entries(selectedOptions).map(([part, option]) => (
          <div key={part}>
            <h3>
              {part.charAt(0).toUpperCase() + part.slice(1)}: {option.label}
            </h3>
            {option.imageURL}
            {option.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AvatarCustomizationComponent
