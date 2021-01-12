import React, {Component} from 'react';

class Footer extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        e.preventDefault();

        document.getElementById(this.props.itemName).scrollIntoView();
    }

    render() {
        return (
            <a href={`#${this.props.itemName}`}
               onClick={this.handleClick}
               className="Button"
               aria-label={`Scroll to ${this.props.itemName}`}>
                {this.props.itemName}
            </a>
        );
    }
}


export default Footer;