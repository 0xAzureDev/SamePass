import Image from 'next/image'
import { FC } from 'react'

const Header: FC = () => {
  const githubLink = () => {
    window.open('https://github.com/0xAzureDev/SamePass', '_blank');
  }
  const listLink = () => {
    // TODO: Dropdown for previous copied to clipboard
  }

  return (
    <div className="header__container">
      {/* HEADER LOGO */}
      <div className="header__items header__left">
        <Image src="/icons/key.svg" alt="Key" width={24} height={24} />
        <h2 className="header__left-items__h2">SamePass</h2>
      </div>
      {/* SIDE LOGOS */}
      <div className="header__items header__right">
        <Image
          className="global__pointer"
          src="/icons/list.svg"
          alt="List"
          width={24}
          height={24}
          onClick={listLink}
        />
        <Image
          className="global__pointer"
          src="/icons/github.svg"
          alt="Github"
          width={24}
          height={24}
          onClick={githubLink}
        />
      </div>
    </div>
  )
}

export default Header
