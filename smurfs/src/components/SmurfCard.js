import React from 'react'
import { connect } from 'react-redux'


function SmurfCard(props) {
    const {name, age, height} = props.smurf
    return(
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{height}</p>
        </div>
    )
}

export default SmurfCard