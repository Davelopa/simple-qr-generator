import { useState } from 'react'
import QRCode from 'qrcode'
import QRLogo from './assets/qrcode.png'

function App() {
  const [url, setUrl] = useState('')
  const [qrcode, setQRCode] = useState('')

  const generateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: '#ffefe4ff',
          light: '#131313ff'
        }
      },
      (err, url) => {
      if (err) {
        return console.log(err)
      }
      console.log(url)
      setQRCode(url)
    })
  }

  return (
    <div className="app">
    <img class="logo" src={QRLogo} alt="" />
      <h1>Generate QR-codes</h1>
      <input type="text" placeholder="esim. www.YourWebsite.com" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={generateQRCode}>Generate QR-code</button>
      {qrcode && <>
        <img src={qrcode} alt="" />
        <a href={qrcode} download="qrcode.png">Download</a>
      </>}
    </div>
  )
}

export default App
