import React from "react";
import { SpotifyHeader } from "./header/header";
import { SpotifySideMenu } from "./sidemenu/sidemenu";
import "./spotify.scss"
import "../../index.css"

export class Spotify extends React.Component{
    constructor(props:any){
        super(props)
    }

    render(): React.ReactNode {
        return(
            <div style={{
                height:"100%",
                width:'100%',
                position:"absolute"
            }} className="spotify bg-gray-800">
                <SpotifySideMenu></SpotifySideMenu>
                
                <SpotifyHeader></SpotifyHeader>


                <div className="content bg-gray-800">
                    <h1>Título da Página</h1>
                    <p>Conteúdo da página aqui...</p>
                </div>
            </div>
        

        )
    }
}