import { SurveyQuestion } from '@/app/types'
import React, { useState } from 'react'

// Dummy survey questions array of type SurveyQuestion
const dummySurveyQuestions: SurveyQuestion[] = [
  {
    question: 'How did you find the event organization?',
    options: ['Excellent', 'Good', 'Average', 'Poor'],
  },
  {
    question: 'What was your favorite part of the convention?',
    options: ['Talks', 'Exhibitions', 'Networking', 'Entertainment'],
  },
  {
    question: 'Any suggestions for improvement?',
    options: [], // Text input if no predefined options
  },
]

const AttendeeSurveyInterface: React.FC = () => {
  // Initialize responses state
  const initialResponses: { [key: string]: string } = {}
  dummySurveyQuestions.forEach((question, index) => {
    initialResponses[`q${index + 1}`] = ''
  })

  const [responses, setResponses] = useState(initialResponses)

  const handleChange = (questionId: string, value: string) => {
    setResponses({ ...responses, [questionId]: value })
  }

  const handleSubmit = () => {
    console.log('Survey responses:', responses)
    // Here you would typically send the data to the backend
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Survey</h2>
      {dummySurveyQuestions.map((question, index) => (
        <div key={`q${index + 1}`} className="mb-4">
          <label
            htmlFor={`q${index + 1}`}
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {question.question}
          </label>
          {question.options.length > 0 ? (
            question.options.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  id={option}
                  name={`q${index + 1}`}
                  value={option}
                  onChange={(e) =>
                    handleChange(`q${index + 1}`, e.target.value)
                  }
                  className="mr-2"
                />
                {option}
              </div>
            ))
          ) : (
            <input
              type="text"
              id={`q${index + 1}`}
              value={responses[`q${index + 1}`]}
              onChange={(e) => handleChange(`q${index + 1}`, e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          )}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </div>
  )
}

export default AttendeeSurveyInterface
