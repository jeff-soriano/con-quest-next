// components/QrCodeGenerator.tsx
import React, { useState } from 'react'
import QRCode from 'qrcode.react'

const QrCodeGenerator: React.FC = () => {
  const [qrValue, setQrValue] = useState<string>('')
  const [generatedQrCode, setGeneratedQrCode] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQrValue(e.target.value)
  }

  const generateQrCode = () => {
    setGeneratedQrCode(qrValue)
  }

  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 rounded w-full"
        placeholder="Enter text to generate QR code"
        value={qrValue}
        onChange={handleInputChange}
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={generateQrCode}
      >
        Generate QR Code
      </button>

      {generatedQrCode && (
        <div className="mt-4">
          <QRCode value={generatedQrCode} />
          <p>QR Code for: {generatedQrCode}</p>
        </div>
      )}
    </div>
  )
}

export default QrCodeGenerator
