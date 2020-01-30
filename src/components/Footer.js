import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <h1>Ini Footer ({this.props.text})</h1>
            </div>
        )
    }
}

export default Footer;