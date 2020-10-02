import React from 'react'
import './index.scss'

export default function Block(props) {
    return (
        <div className={`Block`+(props.secundary?' secundary':'')}>
            <h2>{props.title}</h2>
            <div className="Block__content">
                <p>{props.children}</p>
            </div>
        </div>
    )
}
