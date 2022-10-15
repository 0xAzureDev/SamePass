/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'

interface Props {
  logo: string
  heading: string
  placeholder: string
  type?: string
  saveContent: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Entry: FC<Props> = ({ logo, heading, placeholder, type, saveContent }) => {
  return (
    <div className="entry__container">
      <img
        className="global__bg-secondary-color"
        src={`icons/${logo}`}
        alt={`${heading} logo`}
      />
      <p className="entry__divider global__bg-secondary-color global__grey-color">
        |
      </p>
      <div className="global__bg-secondary-color">
        <p className="entry__heading global__bg-secondary-color global__grey-color">
          {heading}
        </p>
        <input
          className="entry__content global__bg-secondary-color"
          placeholder={`${placeholder}`}
          type={type && `password`}
          onChange={saveContent}
        ></input>
      </div>
    </div>
  )
}

export default Entry
