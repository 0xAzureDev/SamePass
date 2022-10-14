import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDomain, setEmail, setPassword } from '../store/dataSlice'
import { store } from '../store/store'
import { encryptTrio } from '../utils/encrypt'
import Entry from './Entry'
import Result from './Result'

const Form: FC = () => {
  const dispatch = useDispatch()

  const [encrypted, setEncryptedState] = useState('')

  useEffect(() => {
    return store.subscribe(update)
  }, [])

  const update = async () => {
    const email = store.getState().data.email
    const password = store.getState().data.password
    const domain = store.getState().data.domain

    if (!(email && password && domain)) return

    const encryptedText = await encryptTrio(email, password, domain)
    setEncryptedState(encryptedText)
  }

  const dispatchEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(event.target.value))
  }

  const dispatchPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.target.value))
  }

  const dispatchDomain = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDomain(event.target.value))
  }

  return (
    <div className="form__container">
      <Entry
        logo="user.svg"
        heading="Email"
        placeholder="0xAzureDev@samepass.com"
        saveContent={dispatchEmail}
      />

      <Entry
        logo="shield.svg"
        heading="Password"
        placeholder="********************"
        type="password"
        saveContent={dispatchPassword}
      />

      <Entry
        logo="globe.svg"
        heading="Domain"
        placeholder="samepass.com"
        saveContent={dispatchDomain}
      />

      <Result
        logo="clipboard.svg"
        placeholder="<<Input to reveal>>"
        encrypted={encrypted}
      />
    </div>
  )
}

export default Form
