import React, {useEffect} from 'react'
import { connect  } from 'react-redux'
import SmurfCard from '../components/SmurfCard'
import { getSmurfs } from '../store/actions/smurfActions'


function SmurfContainer (props) {
    return(
        <div>
            {props.smurfs.length ? props.smurfs.map(smurf => {
                return <SmurfCard smurf={smurf} />
            }): null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfContainer)