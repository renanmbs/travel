import React from "react";

const stores = ["Bayside Mall","Pele Store ✅","Aventura Mall", "Sawgrass Mills"];
const food = ["Moji African Restaurant ✅","Norman's Tavern","Santos Buffet", "Miami N' Ice ✅", "Safron ✅"];
const relax = ["Ocean Drive ✅","Lincoln Road  ✅","Wynwood Wall", "Kayak Renting", "South Pointe Park", "Venetian Pool", "Flamingo Park ✅"];
const entertainment = ["Phillip and Patricia Frost Museum of Science","Ancient Spanish Monastery","Vizcaya Museum and Gardens", "Miami Aquarium"];

export class Miami extends React.Component{
    render(){
        switch(this.props.choice){
            case "Stores":
                return(
                    <ul>
                        {stores.map((store,index) => 
                            <li key={index}>{store}</li>
                        )}
                    </ul>
                )
            case "Restaurants":
                return(
                    <ul>
                        {food.map((food,index) => 
                            <li key={index}>{food}</li>
                        )}
                    </ul>
                )
            case "Relax":
                return (
                    <ul>
                        {relax.map((relax, index) =>
                            <li key={index}>{relax}</li>)}
                    </ul>
                )
            case "Entertainment":
                return (
                    <ul>
                        {entertainment.map((place,index) => 
                            <li key={index}>{place}</li>
                        )}
                    </ul>
                )
            default:
                return ""
        }
    }
}