/** Not yet implemented. A later version of the app would use ViewCompany to act as a container for Company, 
 * and dispatch state changes to it.
 */

import { connect } from 'react-redux'
import Company from '../components/Company'

//Params contain Ignore so lint will overlook them till proper implementation is done

const mapStateToProps = function(state){ // eslint-disable-line no-unused-vars
    return {
        //TODO: Implement function code
    }
}

const mapDispatchToProps = function(dispatch){ // eslint-disable-line no-unused-vars
    return {
        //TODO: Implement function code
    }
}

const ViewCompany = connect(
    mapStateToProps,
    mapDispatchToProps
)(Company)

export default ViewCompany