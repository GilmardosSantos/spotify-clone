import React from "react";
import './side.scss'
import { AiFillHome, AiOutlineSearch,  } from 'react-icons/ai';
import {BiLibrary} from 'react-icons/bi'
class NavSide extends React.Component{
    render(): React.ReactNode {
        return(
            <div className="side-wrapper">
                <div className="spotify-logo">
                    <a href="">
                        <figure>
                            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"></img>
                        </figure>
                    </a>
                </div>
                <ul className="spotify-side">
                    <div className="li">
                        <li className="items">
                            <a href="">
                                <span className="icon"><AiFillHome size={24}/></span>
                                Início
                            </a>
                        </li>
                    </div>
                    <div className="li">
                        <li className="items">
                            <a href="">
                                <span className="icon"><AiOutlineSearch size={24}/></span>
                                Buscar
                            </a>
                        </li>
                    </div>
                    <div className="li">
                        <li className="items">
                            <a href="">
                                <span className="icon"><BiLibrary size={24}/></span>
                                <span className="text">Sua biblioteca</span>
                            </a>
                        </li>
                    </div>
                    {/* <li className="items"><a href=""><span className="text-white"><AiFillHome size={24}></AiFillHome></span>Início</a></li>
                    <li className="items"><a href=""><span className="text-white"><AiOutlineSearch size={24}></AiOutlineSearch></span>Busca</a></li>
                    <li className="items"><a href=""><span className="text-white"><BiLibrary size={24}></BiLibrary></span>Sua bibliotecaasasas</a></li> */}
                </ul>
            </div>
        )
    }
}
export default NavSide
