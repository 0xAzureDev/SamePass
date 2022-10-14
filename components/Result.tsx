import Image from 'next/image'
import { FC, useState } from 'react'

interface Props {
  logo: string
  heading?: string
  placeholder: string
  encrypted?: string
}

const Result: FC<Props> = ({ logo, placeholder, encrypted }) => {
  const [copied, setCopied] = useState('')

  const copyToClipboard = () => {
    if (encrypted) navigator.clipboard.writeText(encrypted)

    setCopied('Copied')

    setTimeout(() => {
      setCopied('')
    }, 1000)
  }

  return (
    <div className="entry__container">
      <Image
        className="entry__icon-image global__bg-secondary-color global__pointer"
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
