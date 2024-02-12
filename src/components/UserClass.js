import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count1: 0,
            count2: 1,
        }
        console.log(this.props.name + ' Child Constructor Called')
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            console.log('timer class')
        }, 1000)
        console.log(this.props.name + ' Child componentDidMount Called')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState)
        console.log(this.props.name + ' Child componentDidUpdate Called')
    }
    componentWillUnmount() {
        clearInterval(this.timer)
        console.log(this.props.name + ' Child componentWillUnmount Called')
    }
    render() {
        console.log(this.props.name + ' Child Render Called')
        const {name, location, contact} = this.props;
        let {count1, count2} = this.state;
        return (
            <>
                <h1>{name}</h1>
                <h2>{location}</h2>
                <h3>{contact}</h3>
                <button onClick={() => {
                    this.setState({
                        count1: ++count1
                    })
                }}>Increment Count</button>
                <p>Count1: {count1}</p>
                <p>Count2: {count2}</p>
            </>
        )
    }
}

export default UserClass