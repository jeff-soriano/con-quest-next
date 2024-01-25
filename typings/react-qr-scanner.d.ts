// declarations/react-qr-scanner.d.ts
declare module 'react-qr-scanner' {
  import React from 'react'

  interface QRScanResult {
    text: string
    rawBytes: { [key: number]: number }
    numBits: number
    resultPoints: Array<{
      x: number
      y: number
      estimatedModuleSize?: number
      count?: number
    }>
    format: number
    timestamp: number
    resultMetadata: Record<string, any>
    canvas?: HTMLCanvasElement
  }

  interface QRScannerProps {
    onScan: (result: QRScanResult | null) => void
    onError: (error: any) => void
    onLoad?: () => void
    onImageLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
    delay?: number | false
    facingMode?: 'front' | 'rear'
    legacyMode?: boolean
    maxImageSize?: number
    style?: React.CSSProperties
    className?: string
    chooseDeviceId?: (
      videoDevicesMatchingFacingMode: MediaDeviceInfo[],
      allVideoDevices: MediaDeviceInfo[]
    ) => string
    initialStream?: MediaStream
  }

  const QRScanner: React.FC<QRScannerProps>
  export default QRScanner
  export { QRScannerProps, QRScanResult }
}
