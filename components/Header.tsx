import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { store } from '../store/store'
import { CopiedDataEmptyState, CopiedDataInterface } from '../types/index'

const Header: FC = () => {
  const [copied, setCopied] =
    useState<CopiedDataInterface>(CopiedDataEmptyState)

  const [prevPasswords, setPrevPasswords] = useState<string[]>([])

  useEffect(() => {
    return store.subscribe(update)
  }, [])

  const update = () => {
    const prev = store.getState().data.prevPasswords

    if (prev) setPrevPasswords(prev)
  }

  const githubLink = () => {
    window.open('https://github.com/0xAzureDev/SamePass', '_blank')
  }

  const copyToClipboard = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const content = (event.target as HTMLAnchorElement).innerText.replace(
      'Copied!',
      '',
    )

    const copiedFormat: CopiedDataInterface = {
      text: 'Copied!',
      content: content,
    }

    navigator.clipboard.writeText(content)

    setCopied(copiedFormat)

    setTimeout(() => {
      setCopied(CopiedDataEmptyState)
    }, 1000)
  }

  return (
    <div className="header__container">
      {/* HEADER LOGO */}
      <div className="header__items header__left">
        <Image src="icons/key.svg" alt="Key" width={24} height={24} />
        <h2 className="header__left-items__h2">SamePass</h2>
      </div>
      {/* SIDE LOGOS */}
      <div className="header__items header__right">
        <div className="header__dropdown">
          <Image
            className="global__pointer"
            src="icons/list.svg"
            alt="List"
            width={24}
            height={24}
          />
          <div className="header__dropdown-content global__pointer">
            {prevPasswords.map((entry: string) => {
              return (
                <a onClick={copyToClipboard} key={entry}>
                  <div
                    className="header__dropdown-content__copied global__bg-secondary-color"
                    style={
                      copied.content === entry && copied
                        ? { backgroundColor: 'black' }
                        : {}
                    }
                  >
                    {copied.content === entry && copied.text}
                  </div>
                  {entry}
                </a>
              )
            })}
          </div>
        </div>
        <div>
          <Image
            className="global__pointer"
            src="icons/github.svg"
            alt="Github"
            width={24}
            height={24}
            onClick={githubLink}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
