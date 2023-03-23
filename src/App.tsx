import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Login } from './pages/login/login';
import { Spotify } from './pages/spotify/spotify';
import NavHeader from './pages/layout/nav-header';
import NavSide from './pages/layout/nav-side';
import NavFooter from './pages/layout/nav-footer';

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
      <section className='grid'>
        <aside className='sidebar'>
          <NavSide/>
        </aside>
        <header className='topbar'>
          <NavHeader isLogged={true}/>
        </header>
        <main className='content'>content</main>
        <footer className='bottombar'>
          <NavFooter/>
        </footer>
      </section>
      // <div>
      //   {this.state.token ?
      //   <Spotify></Spotify>
      //   :
      //   <Login onLoginSuccess={(token: string) => this.setState({ token: token })}></Login>
      // }
      // </div>
    );
  }

}

export default App;
