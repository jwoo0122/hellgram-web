import axios from 'axios'

const Client = axios.create({
  // TODO: Use negroni-server API url
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

// TODO: Implement any decrypt, encrypt logic

export default Client
