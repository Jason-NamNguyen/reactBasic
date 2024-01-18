import React from "react";
import './UserLogin.scss';

class UserLogin extends React.Component {
    state = {
        firstName: "", lastName: ""
    }

    handleChangefirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangelastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(`Check Submit: `, this.state)
    }

    render() {
        console.log(`Check Input: `, this.state.firstName, this.state.lastName)
        console.log(`Check Submit: `, this.state.handleSubmit)
        return (
            <>
                <div className="FormLogin">
                    <form>
                        <h3>Hello World from Jason </h3>
                        <label htmlFor='fName'>First Name </label> <br />
                        <input className="box" type="text" value={this.state.firstName} onChange={(event) => this.handleChangefirstName(event)} /> <br />
                        <label htmlFor='lName'>Last Name</label><br />
                        <input className="box" type="text" value={this.state.lastName} onChange={(event) => this.handleChangelastName(event)} /> <br />
                        <input type="submit" value="Sign In" onClick={(event) => this.handleSubmit(event)} />
                    </form>
                </div>
            </>
        )
    }

}
export default UserLogin;