import React from "react";
import { Orlando } from "../orlando/orlando";
import { Miami } from "../miami/miami";
import { Vegas } from "../vegas/vegas";
import { NewYork } from "../ny/ny";

export class Cities extends React.Component {

    render() {
        switch (this.props.city) {
            case "Orlando":
                return (

                    <div>
                        <h3>{this.props.choice}</h3>
                        <Orlando choice={this.props.choice} />
                    </div>
                )
            case "Miami":
                return (
                    <div>
                        <h3>{this.props.choice}</h3>
                        <Miami choice={this.props.choice} />
                    </div>
                )
            case "Vegas":
                return (
                    <div>
                        <h3>{this.props.choice}</h3>
                        <Vegas choice={this.props.choice} />
                    </div>
                )

            case "NewYork":
                return (
                    <div>
                        <h3>{this.props.choice}</h3>
                        <NewYork choice={this.props.choice} />
                    </div>
                )
            default:
                return ""
        }

    }
}