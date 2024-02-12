import {Component} from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends Component {
  constructor(props) {
    super(props)
    console.log('Parent Constructor Called')
  }
  componentDidMount() {
    console.log('Parent componentDidMount Called')
  }
  render() {
    console.log('Parent Render Called')
    return (
      <div>
        <h1>About</h1>
        <User name="sourav (function)" location="kolkata (function)" contact="123 (function)" />
        <UserClass name="First" location="kolkata (class)" contact="123 (class)" />
      </div>
    )
  }
}

export default About