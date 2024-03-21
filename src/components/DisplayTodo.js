import React from "react";

const DisplayTodo = (props) => {
    const Home = props.Home;
    const handleDeleteTodo = (id) => {
        props.handleDeleteTodo(id);
    }
    return (
        <div>
            ----List to Do----
            {
                Home.map((item, index) => {
                    return (
                        <div id={item.id} key={item.id} onClick={() => handleDeleteTodo(item.id)}> {item.name}</div>
                    )
                }
                )
            }
        </div>
    )

}
/* class DisplayTodo extends React.Component {
    render() {
        const Home = this.props
        console.log("Check Home Props", Home)
        return (
            <div>
                ----List to Do----
                {
                    Home.map((item, index) => {
                        return (
                            <div id={item.id} key={item.id}> {item.name}</div>
                        )
                    }
                    )
                }
            </div>
        )
    }
} */
export default DisplayTodo;