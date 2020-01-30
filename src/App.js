import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import reducers from './reducers';

class App extends React.Component {
  state = { title: 'Purwadhika' }
  render() {
    return(
      <div>
        <Provider store={createStore(reducers)}>
          <Header text={this.state.title} />
          <Body>
            <h2>{this.state.title} 1</h2>
            <h2>{this.state.title} 2</h2>
            <h2>{this.state.title} 3</h2>
          </Body>
          <Footer text={this.state.title} />
        </Provider>
      </div>
    )
  }
}

export default App;