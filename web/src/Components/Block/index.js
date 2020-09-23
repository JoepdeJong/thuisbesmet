import React, { Component } from 'react'
import './index.scss'

export default class Block extends Component {
    render() {
        return (
            <div className={`Block`+(this.props.secundary?' secundary':'')}>
                <h2>{this.props.title}</h2>
                <div className="Block__content">
                    <p>{this.props.children}</p>
                </div>
            </div>
        )
    }
}
