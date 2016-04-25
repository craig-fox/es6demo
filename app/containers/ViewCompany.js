/** Not yet implemented. A later version of the app would use ViewCompany to act as a container for Company, 
 * and dispatch state changes to it.
 */

import { connect } from 'react-redux'
import { setNewName } from '../actions'
import Company from '../components/Company'

const mapStateToProps = function(state){
    return {
        //TODO: Implement function code
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        //TODO: Implement function code
    }
}

const ViewCompany = connect(
    mapStateToProps,
    mapDispatchToProps
)(Company)

export default ViewCompany