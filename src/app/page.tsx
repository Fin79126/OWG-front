import { host } from './style.css'
import { mainStyle } from '@/styles/app.css'
import { Button } from '@/components/elements/button/gameSelect/gameSelectButton'
import { ButtonProps } from '@/types/types'

const loginButtonProps: ButtonProps = {
  text: "ワードウルフ",
  iconSrc: "/images/wordwolfIcon.png",
};

export default function Home() {
  return (
    <main className={mainStyle}>
      <div className={host}>ねこ、こねこ</div>
      <Button {...loginButtonProps} />
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>      
    </main>
  )
}
