import React from "react";

class ButtonShowHide extends React.Component {
    state = {
        listShow: false
    }
    render() {
        console.log(`check props: `, this.props)
        let Data = this.props.dataList
        return (
            <>
                <div><button>Show</button></div>
                <div className="Data">
                    {
                        Data.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>

                            )
                        })
                    }
                </div>
                <div><button>Hide all</button></div>

            </>
        )
    }

}
export default ButtonShowHide;