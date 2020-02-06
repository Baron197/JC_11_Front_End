import React from 'react';
import { connect } from 'react-redux';
import { ubahTitle, getProducts } from '../actions';
import '../styles/Body.css';
import Category from './Category';

class Body extends React.Component {
    state = { titleganti: 'cor' }

    componentDidMount() {
        this.props.getProducts()
    }

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

    renderListProducts = () => {
        return this.props.listProducts.map((item,index) => {
            return (
                <tr>
                    <td>{index+1}</td>
                    <td>{item.nama}</td>
                    <td>{item.harga}</td>
                    <td>{item.description}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div style={{ border: '1px solid black', margin: '20px', padding: '20px' }}>
                <Category />
                <input type="text" value={this.state.titleganti} onChange={this.onInputTitleChange} /> 
                <input type="button" value="Ubah Title" onClick={this.onButtonUbahTitleClick}/>
                {this.props.children}
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderListProducts()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ listProducts }) => {
    return {
        listProducts
    }
}

export default connect(mapStateToProps, { ubahTitle, getProducts })(Body);