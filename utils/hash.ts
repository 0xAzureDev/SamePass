export const hash = async (x: string, length = 20) => {
  const symbols = ['!', '$', '@', '#', '%', '&', '(', ')', '+', '*']

  const utf8 = new TextEncoder().encode(x)
  const hashBuffer = await crypto.subtle.digest('SHA-256', utf8)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray
    .map((bytes) => bytes.toString(36).padStart(2, '0'))
    .join('')

  const base64Long = btoa(hashHex).substring(1)
  let finalPass: string = ''

  base64Long.split('').forEach(function (char: string) {
    // If it's a number, prepend with a symbol, else append hash char
    finalPass +=
      char >= '0' && char <= '9' ? symbols[parseInt(char)] + char : char
  })

  return finalPass.substring(0, length)
}
