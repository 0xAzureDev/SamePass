import { hash } from './hash'

export const encryptTrio = async (
  email: string,
  password: string,
  domain: string
) => {
  return await hash(email + password + domain)
}
