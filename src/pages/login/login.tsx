import React from 'react'
import './login.scss'
import SpotifyWebApi from 'spotify-web-api-node'
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=&response_type=code&redirect_uri=http://localhost:3000&scope=%20"

interface LoginProps{
  onLoginSuccess: (token: string) => void
}

interface LoginState{
  token: string | null;
}

export class Login extends React.Component<LoginProps,LoginState>{
  public CLIENT_ID = "a7b71ed320584788a6e6977c020bda49"
  public REDIRECT_URI = "http://localhost:3000"
  public RESPONSE_TYPE = "token"
  public AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  constructor(props:any){
    super(props)
    this.state = {
      token:'',
    }
    // this.logout = this.logout.bind(this);
  }

  setToken(newToken:string){
    console.log('new Token',newToken)
    this.setState({
      token: newToken
    },() =>{
      console.log(this.state)
    })
    this.props.onLoginSuccess(newToken)
  }

  logout(){
    this.setToken('')
    window.localStorage.removeItem('token')
  }

  search(){
    // this.spotify = new SpotifyWebApi()
  }

  componentDidMount(): void {
      console.log(true)
      const hash = window.location.hash;
      let token = window.localStorage.getItem('token')
      if(!token && hash){
        token = (hash.substring(1)?.split('&')?.find(elem => elem.startsWith("access_token"))?.split("=")[1]) || '';
        window.localStorage.setItem('token',token)
      }
      if(token){
        this.setToken(token)
      }
  }

  render(): React.ReactNode {
    const {token} = this.state
      return(
        <div className='container'>
          <div className='app'>
            <header className="app-header">
              <h1>Spotify React</h1>
            </header>
              {!token ?
                <div className='container-sign'>
                  <div className='text'><a href={`${this.AUTH_ENDPOINT}?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URI}&response_type=${this.RESPONSE_TYPE}`}>Sign In</a></div>

                </div>
  
              :
              <div className='container-sign'>
                <div className='text' onClick={this.logout.bind(this)}>Logout</div>
                <div className='text' onClick={this.search.bind(this)}>search</div>

              </div>
              }
            </div>
              
          </div>

      )
  }
}

