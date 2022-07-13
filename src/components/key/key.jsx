import {Component} from "react";

export default class Example extends Component {
    constructor(props) {
        super(props)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.state = {
            cursor: 0,
            result: []
        }
    }

    handleKeyDown(e) {
        const { cursor, result } = this.state
        if (e.keyCode === 38 && cursor > 0) {
            this.setState( prevState => ({
                cursor: prevState.cursor - 1
            }))
        } else if (e.keyCode === 40 && cursor < result.length - 1) {
            this.setState( prevState => ({
                cursor: prevState.cursor + 1
            }))
        }
    }

    render() {
        const { cursor } = this.state

        return (
            <div>

                <input onKeyDown={ this.handleKeyDown }/>
                <div>
                    {
                        this.result.map((item, i) => (
                            <div
                                key={ item._id }
                                className={cursor === i ? 'active' : null}
                            >
                                <span>{ item.title }</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}