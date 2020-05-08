import React, { Component } from 'react';
import './Context.scss'

interface Props {
}

interface State {
}

class Context extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>hello Context</div>
        );
    }
}

export default Context;
