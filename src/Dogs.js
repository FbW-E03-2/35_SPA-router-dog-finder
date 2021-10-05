import React, { useState } from 'react'
import { Link } from "react-router-dom"

import Dog from "./Dog"
import Hazel from "./images/hazel.jpg"
import Tubby from "./images/tubby.jpg"
import Whiskey from "./images/whiskey.jpg"

let dogs = [{
    name: 'whiskey',
    id: 0,
    image: Whiskey,
    age: 4,
    facts: [
        'Whiskey loves eating popcorn',
        'Whiskey is a terrible guard dog',
        'Whiskey wants to cuddle with you'
    ]
},
{
    name: 'hazel',
    id: 1,
    age: 0,
    image: Hazel,
    facts: [
        'Hazel has a lot of energy',
        'Hazel is highly intelligent',
        'Hazel loves people more than dogs'
    ]
},
{
    name: 'tubby',
    id: 2,
    age: 4,
    image: Tubby,
    facts: [
        'Tubby is really stupid',
        'Tubby does not like walks',
        'Angelina hates Tubby',
    ]
}
]

export default function Dogs() {

    return (
        <div>
            <div className="container">
                <div className="everyImg">   <img src={Hazel} alt="name" /><Link to="/dogs/hazel" > <h3>hazel</h3></Link></div>
                <div className="everyImg">  <img src={Tubby} alt="name" /> <Link to="/dogs/tubby" ><h3>tubby</h3></Link></div>
                <div className="everyImg"><img src={Whiskey} alt="name" /><Link to="/dogs/whiskey" > <h3>whiskey</h3></Link></div>
            </div>
            {dogs.map((el) => {
                return <Dog ele={el} />
            })}
        </div>
    )
}
