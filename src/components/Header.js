import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Ini Header ({this.props.text})</h1>
            </div>
        )
    }
}

const mapStateToProps = ({ title }) => {
    return {
        text: title
    }
}

// this.props = { ...this.props, ...objdarimapstatetoprops}

export default connect(mapStateToProps)(Header);