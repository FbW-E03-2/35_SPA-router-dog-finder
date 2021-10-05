import React from 'react'
import { useParams } from 'react-router-dom'

export default function Dog(props) {
    let params = useParams()
    return (
        <div className="oneDog">
            {params.name === props.ele.name ? <>

                <div className="everyImg">
                    <h1>{props.ele.name}</h1>


                    <img src={props.ele.image} alt="name"/>
                    <div>{props.ele.age}</div>
                    <ul>{props.ele.facts.map((fact, i) => {
                        return <li>{fact}</li>
                    })}</ul>

                </div>
            </>
                : null}

        </div>
    )
}
