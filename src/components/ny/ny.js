import React from "react";

const stores = ["Classic Football Shirts", "Soccer Post Upper West Side", "Saturdays Football", "Brazilian Market NYC"];
const food = ["Shinn West (Salmon Omakase", "Hatsu (Omakase)", "Sanyuu West (Big Nigiris)", "Kings of Kobe (Wagyu)", "Tsumo UWS (Tuna Omakase)", "SourAji (Omakase)",
    "Mojo East (Omakase)", "Sushi W (Omakase)", "Omakase by Korami (Omakase)", "Thirteen Water (Omakase)", "Tsumo (Tuna Omakase)", "Uka (Omakase)", "Easy Joy Dim Sum",
    "Tasty Dumpling (Dim Sum)", "Nom Wah Tea Parlor (Dim Sum)", "House of Joy (Dim Sum)"
];
const relax = ["NYU", "Epstein Townhouse", "Jardim", "SERHANT Hudson Square Office", "Flatiron Building", "One Vanderbilt", "56 Leonard Street", "281 Park Avenue South", 
    "589 11th Avenue", "New York Edge Building (30 Hudson Yards)", "Meatpacking District", "Hudson Yards - Vessel", "Tribeca", "Fraunces Tavern", "Upper East Side Townhouse Rows",
"Washington Square North", "Hamilton Grange National Memorial", "NYSE", "Thurgood Marshall United States Courthouse", "Museum of the American Gangster"];

const entertainment = ["J.P. Morgan Library & Museum", "J.P Morgan House - 219 Madison Ave (near 36th St)", "Edgar Allan Poe Cottage - 2640 Grand Concourse, Bronx",
    "Edgar Poe’s Greenwich Village Area - West 3rd St / Sullivan St area", "The Frick Collection", "Carnegie Mansion (Cooper Hewitt)", "Federal Hall", "The Ground", 
    "Nike Field Soccer @ Sara D Rooselvelt", "Cathedral of St. John the Divine", "Columbia University", "High Line", "Hudson River Park", "New York public Library - Stephen Schawarzman Building",
    "Roosevelt Island Tram"
];

export class NewYork extends React.Component{
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