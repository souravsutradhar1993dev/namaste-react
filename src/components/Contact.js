import {useContext} from 'react'
import UserContext from '../utils/UserContext'

const Contact = () => {
  const {loggedInUser, setUserName} = useContext(UserContext)
  return (
    <div>
      <h2>Contact</h2>
      <input value={loggedInUser} onChange={e => setUserName(e.target.value)} />
    </div>
  )
}

export default Contact