import axios from 'axios'

export const createUser = async (email: string, password: string) => {
  return axios.post(`${process.env.NEXT_PUBLIC_REST_URL}/users`, {
    user: {
      email,
      password,
    },
  })
}
