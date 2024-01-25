// components/QrCodeScanner.tsx
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { QRScanResult } from 'react-qr-scanner'

const QRScanner = dynamic(() => import('react-qr-scanner'), { ssr: false })

const QrCodeScanner: React.FC = () => {
  const [scanResult, setScanResult] = useState<string>('')

  const handleScan = (data: QRScanResult | null) => {
    if (data) {
      setScanResult(data.text)
      console.log(data)
      // Further processing can be done here
    }
  }

  const handleError = (err: any) => {
    console.error('QR Scanner Error:', err)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-4 border rounded shadow">
        <QRScanner
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        {scanResult && (
          <p className="mt-4 text-center text-sm">Scanned Code: {scanResult}</p>
        )}
      </div>
    </div>
  )
}

export default QrCodeScanner
