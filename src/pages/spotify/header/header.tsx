import React from "react";
import './header.scss'

export class SpotifyHeader extends React.Component{

    render(){
        return(
            <nav className="spotify-header nav">
                <div className="header">
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
                </div>
            </nav>
        )
    }
}