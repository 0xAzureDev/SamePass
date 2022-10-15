import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPrevPasswords } from '../store/dataSlice'

interface Props {
  logo: string
  heading?: string
  placeholder: string
  encrypted?: string
}

const Result: FC<Props> = ({ logo, placeholder, encrypted }) => {
  const dispatch = useDispatch()

  const [copied, setCopied] = useState('')

  const copyToClipboard = () => {
    if (!encrypted) return

    navigator.clipboard.writeText(encrypted)

    dispatch(setPrevPasswords(encrypted))

    setCopied('Copied!')

    setTimeout(() => {
      setCopied('')
    }, 1000)
  }

  return (
    <div className="entry__container">
      <img
        className="global__bg-secondary-color global__pointer"
        src={`/icons/${logo}`}
        alt={`${logo} logo`}
        width={35}
        height={35}
        onClick={copyToClipboard}
      />
      <p className="entry__divider global__bg-secondary-color global__grey-color">
        |
      </p>
      <div className="global__bg-secondary-color">
        <p className="entry__heading global__bg-secondary-color global__grey-color">
          {copied}
        </p>
        <p className="entry__content global__bg-secondary-color">
          {encrypted ? encrypted : placeholder}
        </p>
      </div>
    </div>
  )
}

export default Result
