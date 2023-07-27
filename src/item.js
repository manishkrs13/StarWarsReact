import React from 'react';


class item extends React.Component{
    render(){
        return(
            <h1>Hello from {this.props.name}</h1>
        )
    }
}

export default item;