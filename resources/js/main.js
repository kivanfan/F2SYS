import React from "react";
import ReactDOM from "react-dom";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: props.test};
    }

    render() {
        return (
            <h1>{this.state.value}</h1>
        )
    }
}

class Well extends React.Component {
    renderTest() {
        return (
            <Test test={123}/>
        )
    }

    render() {
        return (
            <h1>{this.renderTest()}</h1>
        )
    }
}

ReactDOM.render(
    <Well test={user}/>,
    document.getElementById('root')
);