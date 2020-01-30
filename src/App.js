import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends React.Component {
  // state = { title: 'Purwadhika' }
  render() {
    return(
      <div>  
          <Header />
          <Body>
            <h2>{this.props.judul} 1</h2>
            <h2>{this.props.judul} 2</h2>
            <h2>{this.props.judul} 3</h2>
          </Body>
          <Footer text={this.props.judul} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        judul: state.title
    }
}

export default connect(mapStateToProps)(App);