import React from "react";
import './UserLogin.scss';
import RegisterForm from './RegisterForm';
import ButtonShowHide from './ButtonShowHide';

class UserLogin extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        dataList: [
            { id: "Data1", title: "Developer", salary: "400" },
            { id: "Data2", title: "Tester", salary: "600" },
            { id: "Data3", title: "Project Manager", salary: "1000" }

        ]
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
        alert(`Thank for your Registation`)
        console.log(`Check Submit: `, this.state)
    }

    render() {
        // console.log(`Check Input: `, this.state.firstName, this.state.lastName)
        // console.log(`Check Submit: `, this.state.handleSubmit)
        return (
            <>
                <div className="FormLogin">
                    <form>
                        <h3>Hello World from Jason </h3>
                        <label htmlFor='fName'>First Name </label> <br />
                        <input className="box" type="text" value={this.state.firstName} onChange={(event) => this.handleChangefirstName(event)} /> <br />
                        <label htmlFor='lName'>Last Name</label><br />
                        <input className="box" type="text" value={this.state.lastName} onChange={(event) => this.handleChangelastName(event)} /> <br />
                        <input className="button" type="submit" value="Sign In" onClick={(event) => this.handleSubmit(event)} />
                    </form>
                </div>
                <ButtonShowHide
                    dataList={this.state.dataList}
                />
            </>

        )
    }


}
export default UserLogin;