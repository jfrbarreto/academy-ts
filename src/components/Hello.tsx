import * as React from "react";

import { Button } from 'react-bootstrap';

export interface HelloProps { compiler: string; framework: string; }


export class Hello extends React.Component<HelloProps, {}> {

handleClick = () => {
    console.log('1231231231');
}

    render() {
        return (<Button onClick={this.handleClick} >Test  </Button>);
    } 
} 