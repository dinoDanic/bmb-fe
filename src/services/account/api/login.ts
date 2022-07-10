import axios from 'axios'

export const login = async (email: string, password: string) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_REST_URL}/users/sign_in`, {
    user: {
      email,
      password,
    },
  })
}
