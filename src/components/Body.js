import React from 'react';
import { connect } from 'react-redux';
import { ubahTitle } from '../actions';

class Body extends React.Component {
    state = { titleganti: 'cor' }

    onInputTitleChange = (e) => {
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.value)
        this.setState({ titleganti: e.target.value })
    }

    onButtonUbahTitleClick = () => {
        var hasil = this.props.ubahTitle(this.state.titleganti)
        console.log('On button Click : ',hasil)
    }

    render() {
        return (
            <div style={{ border: '1px solid black', margin: '20px', padding: '20px' }}>
                <input type="text" value={this.state.titleganti} onChange={this.onInputTitleChange} /> 
                <input type="button" value="Ubah Title" onClick={this.onButtonUbahTitleClick}/>
                {this.props.children}
            </div>
        )
    }
}

export default connect(null, { ubahTitle })(Body);