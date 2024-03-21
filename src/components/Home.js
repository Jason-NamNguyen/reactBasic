import React, { useState } from "react";
import _ from "lodash";
import DisplayTodo from "./DisplayTodo";
import AddTodo from "./AddTodo";
import AddNewProduct from "./AddNewProduct";
const Home = () => {
    const [Todo, setTodo] = useState("");
    const [Home, setListTodo] = useState(
        [
            { id: "Todo-1", name: "Learn English" },
            { id: "Todo-2", name: "Watching Youtube" },
            { id: "Todo-3", name: "Learn JavaScript" }
        ]
    )
    const handleClickButton = () => {
        let AddTodo = {
            id: "Todo- 4", name: Todo
        }
        let currentListTodo = _.clone(Home);
        currentListTodo.push(AddTodo);
        setListTodo(currentListTodo)
        // setListTodo([...Home, AddTodo]);
    }
    const handleDeleteTodo = (id) => {
        let currentListTodo = _.clone(Home);
        currentListTodo = currentListTodo.filter(item => item.id !== id);
        setListTodo(currentListTodo)
    }

    return (
        <div>
            <AddTodo
                Todo={Todo}
                setTodo={setTodo}
                handleClickButton={handleClickButton}
            />
            <br /> <br />
            <DisplayTodo
                Home={Home}
                handleDeleteTodo={handleDeleteTodo}
            />

        </div >
    )
}

/*
class Home extends React.Component {
    state = {
        name: 'Jason',
        channel: 'Hoang Nam'
    }
    render() {
        return (
            <div>
                <label>Your Name</label>
                <input type="text" onChange={(event) => this.setState({ name: event.target.value })} />
                <br /><br />
                Welcome Home with name = {this.state.name}
            </div>
        )
    };
}
*/
export default Home;