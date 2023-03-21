import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Login } from './pages/login/login';
import { Spotify } from './pages/spotify/spotify';
interface AppProps {}

interface AppState {
  token?: string | null;
}

export class App extends React.Component<{},AppState> {
  constructor(props:{}){
    super(props)
    this.state = {
      token:""
    }
  }

  handleLoginSuccess(token:string){
    this.setState({token:token});
  }

  render(): React.ReactNode {
    return (
      <div>
        {this.state.token ?
        <Spotify></Spotify>
        :
        <Login onLoginSuccess={(token: string) => this.setState({ token: token })}></Login>
      }
      </div>
    );
  }

}

export default App;
