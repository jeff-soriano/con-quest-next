// components/SurveyGenerator.tsx
import React, { useState } from 'react'
import { SurveyQuestion } from '../app/types'

const SurveyGenerator: React.FC = () => {
  const [surveyQuestions, setSurveyQuestions] = useState<SurveyQuestion[]>([
    {
      question: '',
      options: [''],
    },
  ])

  const handleQuestionChange =
    (questionIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSurveyQuestions = [...surveyQuestions]
      newSurveyQuestions[questionIndex].question = e.target.value
      setSurveyQuestions(newSurveyQuestions)
    }

  const handleOptionChange =
    (questionIndex: number, optionIndex: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSurveyQuestions = [...surveyQuestions]
      newSurveyQuestions[questionIndex].options[optionIndex] = e.target.value
      setSurveyQuestions(newSurveyQuestions)
    }

  const addOption = (questionIndex: number) => {
    const newSurveyQuestions = [...surveyQuestions]
    newSurveyQuestions[questionIndex].options.push('')
    setSurveyQuestions(newSurveyQuestions)
  }

  const addQuestion = () => {
    setSurveyQuestions([...surveyQuestions, { question: '', options: [''] }])
  }

  const deleteQuestion = (questionIndex: number) => {
    const newSurveyQuestions = surveyQuestions.filter(
      (_, index) => index !== questionIndex
    )
    setSurveyQuestions(newSurveyQuestions)
  }

  const deleteOption = (questionIndex: number, optionIndex: number) => {
    const newSurveyQuestions = [...surveyQuestions]
    newSurveyQuestions[questionIndex].options = newSurveyQuestions[
      questionIndex
    ].options.filter((_, index) => index !== optionIndex)
    setSurveyQuestions(newSurveyQuestions)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Survey Questions:', surveyQuestions)
    // Further submission logic can be implemented here
  }

  return (
    <form onSubmit={handleSubmit} className="p-4">
      {surveyQuestions.map((sq, questionIndex) => (
        <div key={questionIndex} className="mb-6 border-b pb-4">
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder={`Enter question ${questionIndex + 1}`}
            value={sq.question}
            onChange={handleQuestionChange(questionIndex)}
          />
          <button
            type="button"
            onClick={() => deleteQuestion(questionIndex)}
            className="ml-2 text-red-500 hover:text-red-700"
          >
            Delete Question
          </button>

          {sq.options.map((option, optionIndex) => (
            <div key={optionIndex} className="flex items-center my-2">
              <input
                type="text"
                className="border p-2 rounded w-full"
                placeholder={`Option ${optionIndex + 1}`}
                value={option}
                onChange={handleOptionChange(questionIndex, optionIndex)}
              />
              <button
                type="button"
                onClick={() => deleteOption(questionIndex, optionIndex)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                Delete Option
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addOption(questionIndex)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add Option
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addQuestion}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
      >
        Add Question
      </button>

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      >
        Submit Survey
      </button>
    </form>
  )
}

export default SurveyGenerator
