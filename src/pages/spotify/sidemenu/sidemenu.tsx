import React from "react";
import './sidemenu.scss'
import '../../../index.css'
import { AiFillHome, AiOutlineSearch,  } from 'react-icons/ai';
import {BiLibrary} from 'react-icons/bi'
export class SpotifySideMenu extends React.Component{

    render(){
        return(
            <nav className="spotify-sidemenu">
                <div className="sidebar">
                    <ul>
                    <div>
                        <a href="#">
                            <div className="spotify-logo">
                                <figure>
                                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"></img>
                                </figure>
                            </div>
                        </a>
                    </div>
                        <li><a href=""><span className="text-white"><AiFillHome size={24}></AiFillHome></span>Início</a></li>
                        <li><a href=""><span className="text-white"><AiOutlineSearch size={24}></AiOutlineSearch></span>Busca</a></li>
                        <li><a href=""><span className="text-white"><BiLibrary size={24}></BiLibrary></span>Sua biblioteca</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}