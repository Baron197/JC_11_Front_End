import React from 'react';

class Body extends React.Component {
    render() {
        return (
            <div style={{ border: '1px solid black', margin: '20px', padding: '20px' }}>
                {this.props.children}
            </div>
        )
    }
}

export default Body;