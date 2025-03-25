import { buttonStyle } from '@/styles/app.css'
import { host } from './page.css'

export default function Home() {
  return (
    <main className={host}>
      <button className={buttonStyle}>test</button>
      <div className={host}>ねこ、こねこ</div>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>      
    </main>
  )
}
