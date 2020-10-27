import React, { Component } from 'react'

export default class MyAmazingList extends Component {
    render() {
        return (
            <li>{this.props.ingredient}</li>
        )
    }
}
