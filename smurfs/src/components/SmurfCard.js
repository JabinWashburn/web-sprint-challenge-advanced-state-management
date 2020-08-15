import React from 'react'
import { connect } from 'react-redux'


function SmurfCard(props) {
    console.log('from smurfcard', props)
    const {name, age, height} = props.smurf
    return(
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
        </div>
    )
}

export default SmurfCard