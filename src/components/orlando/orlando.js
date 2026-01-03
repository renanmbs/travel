import React from "react";

const stores = ["Florida Mall ⭐️✅","Waterford Lakes Town Center","Orlando International Premium Outlet Mall ⭐️✅", "The Mall at Millenia ✅","Lake Buena Vista Factory Store", 
"Orlando Vineland Premium Outlet ⭐️✅", "Orlando Outlet Marketplace ✅", "Deals Mania", "VIP Shopper Outlet", "Adidas (Orlando Outlet Marketplace) ✅"];
const food = ["Camila's Brazilian Restaurant ⭐️✅","Shisho Sushi","Hidden Sushi ⭐️✅", "Suki Hanna ✅⭐️", "Tony's Brazilian Gril ⭐️✅", "Sodie Doces ⭐️✅",
"Rodizio Grill", "Holy Grain Coffee Shop ✅", "Pinotti's Pizza", "Jimmy's Pizza ⭐️✅", "Musashi Sushi Lounge ✅", "Food Trucks Heaven", 
"Donut King", "Pizza Bruno", "Açai Republic", "Gelato Go"];
const relax = ["Icon Park ✅","Cocoa Beach ✅", "XL Soccer World Winter Park ✅", "UCF Campus ⭐️✅", "High Soccer Arena ✅", "Free Kick Orlando ⭐️✅", "Disney's Boardwalk", "The Pointe ✅", "Thornton Park", "Winter Garden",
"Naples", "St. Augustine"];
const entertainment = ["Disney Springs ⭐️✅","Disney Parks ✅", "EA Sports Downtown ✅", "Universal City Walk ✅", "Old Town ✅",
"Celebration Town Center", "Orlando Science Center ✅", "Universal Studios ✅", "IDrive Orlando ✅", "Roboland ✅","Titanic Museum", "NASA ✅"];

export class Orlando extends React.Component{
    
    render(){
        switch(this.props.choice){
            case "Stores":
                return(
                    <ul>
                        {stores.map((stores,index) => 
                            <li key={index}>{stores}</li>)}
                    </ul>
                )
            case "Restaurants":
                return(
                    <ul>
                        {food.map((food,index) =>  
                        <li key={index}>{food}</li>)}
                    </ul>
                )
            case "Relax":
                return(
                    <ul>
                        {relax.map((relax,index)=>
                        <li key={index}>{relax}</li>)}
                    </ul>
                )
            case "Entertainment":
                return(
                    <ul>
                        {entertainment.map((place,index) => 
                        <li key={index}>{place}</li>)}
                    </ul>
                )
            default:
                return ""
        }
    }
}