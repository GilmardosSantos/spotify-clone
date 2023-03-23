import React,{useRef, MutableRefObject} from "react";
import './sidemenu.scss'
import '../../../index.css'
import { Resizable } from 'react-resizable';

import { AiFillHome, AiOutlineSearch,  } from 'react-icons/ai';
import {BiLibrary} from 'react-icons/bi'
interface State{
    isResizing: boolean;
    width: number;
    startX: number;
}
export class SpotifySideMenu extends React.Component<{},State>{

    constructor(props:{}){
        super(props)
        this.state = {
            isResizing: false,
            width: 10, 
            startX: 0,
        }
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseDown(event:React.MouseEvent<HTMLDivElement>){
        this.setState({
            isResizing: true,
            startX: event.clientX,
          });
    } 

    handleMouseUp(){
        this.setState({
            isResizing: false,
          });
    }

    handleMouseMove(event: React.MouseEvent<HTMLDivElement>){
        if(!this.state.isResizing){
            return;
        }
        const deltaX = event.clientX - this.state.startX;

        this.setState((prevState) => ({
            width: Math.max(prevState.width + deltaX, 10),
            startX: event.clientX,
          }));
    }


    render(){
        return(
            <nav className="spotify-sidemenu"
            style={{
                // width: `${this.state.width}vw`,
            }}
            >
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