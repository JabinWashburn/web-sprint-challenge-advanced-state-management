import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../store/actions/smurfActions'

function SmurfForm(props){
    const [form, setForm] = useState({
        name: '',
        age: '',
        weight: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addSmurf(form)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name='name' placeholder='name' onChange={handleChange} value={form.name}/>
            <input name='age' placeholder='age' onChange={handleChange} value={form.age}/>
            <input name='height' placeholder='height' onChange={handleChange} value={form.height}/>
            <button type='submit'>Add Smurf</button>
        </form>
    )
}


export default connect(null, {addSmurf})(SmurfForm)