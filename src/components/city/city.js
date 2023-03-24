import "./city.css";
import React from "react";
import { Orlando } from "../orlando/orlando";
import { Miami } from "../miami/miami";

export class Cities extends React.Component{

    render(){
        switch(this.props.city){
            case "Orlando":
                return(
                    
                    <div>
                        <h3>{this.props.choice}</h3>
                        <Orlando choice={this.props.choice}/>
                    </div>
                )
            case "Miami":
                return(
                    <div>
                        <h3>{this.props.choice}</h3>
                        <Miami choice={this.props.choice} />
                    </div>
                )
            default:
                return ""
        }
       
    }
}