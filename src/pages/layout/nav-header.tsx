import React from "react";
import './header.scss'
interface HeaderProps{
    isLogged: boolean
}
class NavHeader extends React.Component<HeaderProps,{}>{
    constructor(props:HeaderProps){
        super(props)
    }
    render(): React.ReactNode {
        const {isLogged} = this.props
        let content;
        switch(isLogged){
            case !true:
                content = (
                    <ul>
                        <li>
                            <button className="user-button">
                                <figure className="user-icon">
                                    <div style={{width:28, height:28, insetInlineStart:0}}>
                                        <img className="user-img" src="https://i.scdn.co/image/ab6775700000ee85c67ddc36b3824186e56d8b13" alt="" />
                                    </div>
                                </figure>
                                <span className="user-name">Gilmar</span>
                            </button>
                        </li>
                    </ul>
                )
            break;
            case !false:
                content = (
                    <ul>
                        <li><button className="spotify-button">Sign In</button></li>
                    </ul>
                )
                break;
        }
        return(
            <nav className="spotify-header">
                {content}
            </nav>
        )
    }
}
export default NavHeader