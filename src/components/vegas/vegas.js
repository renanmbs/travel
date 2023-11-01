import React from "react";

let stores = ["Nike at The Forum Shops", "The Shops at Crystals", "Adidas and Coca-Cola Store at Showcase Mall", "The Grand Canal Shops", 
"Abercrombie & Fitch at Fashion Show Las Vegas", "Miracle Mile Shops", "The Gallery at Aria", "Las Vegas North Premium Outlets", "Las Vegas South Premium Outlets", "Neonopolis"
,"Downtown Container Park"];

let restaurants = ["Sakana Sushi", "Oyshi Sushi", "Sushi Kaya", "Umami Bombs", "Istanbul Restaurant", "Maza", "Shake & Shack", "Guy Fieri", "Bachanal Buffet", "Piero's", "Wicked Spoon", "1923 Prohibition Bar", "The Chandelier",
];

let relax = ["Bellagio Conservatory & Botanical Gardens", "The Volcano", "Las Vegas Downtown", "Freemont Street", "Banksy"]

let entertainment = ["The Mob Museum", "Circus du Soleil", "Comedy Show", "Bellagio Conservatory & Botanical Gardens", "Sphere", "Stratosphere", "Bonnie and Clyde Death Car"]

export class Vegas extends React.Component{
    render(){
        switch(this.props.choice){
                case "Stores":
                    return(
                        <ul>
                            {stores.map((store,key) => (
                                <li key={key}>{store}</li>
                            )) }
                        </ul>
                    )
            
                case "Restaurants":
                    return(
                        <ul>
                            {restaurants.map((rest,key) => (
                                <li key={key}>{rest}</li>
                            ))}
                        </ul>
                    )

                case "Relax":
                    return(
                        <ul>
                            {relax.map((relax,key) => (
                                <li key={key}>{relax}</li>
                            ))}
                        </ul>
                    )

                case "Entertainment":
                    return(
                        <ul>
                            {entertainment.map((enter,key) => (
                                <li key={key}>{enter}</li>
                            ))}
                        </ul>
                    )

                default:
                    return "";

        }
    }
}