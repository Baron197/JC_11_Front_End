import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Ini Header ({this.props.text})</h1>
            </div>
        )
    }
}

export default Header;