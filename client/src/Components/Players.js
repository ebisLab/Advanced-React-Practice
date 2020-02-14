import React from 'react';


const Players = (props) => {

console.log(props)
    return(<div className="card-wrapper container">
        <h2 className="card-name">{props.item.name}</h2>
        <p className=".card-team">{props.item.team}</p>
        <p className=".card-rank">{props.item.rank}</p>

        
    </div>)
}

export default Players