import React, { Component, PropTypes } from 'react'
import { setNewName, clearName, previousName } from './../actions/index'

class Company extends Component {
    constructor(props, context) {
        super(props, context);
        this.newName = this.newName.bind(this);
        this.clearName = this.clearName.bind(this);
        this.previousName = this.previousName.bind(this);
        this.props.store.dispatch(setNewName(''))
    };

    newName() {
        var newName = this.refs.companyName.value
        this.props.store.dispatch(setNewName(newName))
    }

    clearName() {
        this.refs.companyName.value = ''
        this.props.store.dispatch(clearName())
       
    }

    previousName() {
        this.props.store.dispatch(previousName())
        this.refs.companyName.value = this.props.store.getState().name
    }

    render() {
        return (
           <div>
             <h2>Setting Up Your New Company</h2>

               Company Name: <input type="text" ref="companyName"
                                    placeholder="Choose a name" />
               <div><button onClick={this.newName}>Submit Name</button>
                    <button onClick={this.clearName}>Clear Name</button>
                    <button onClick={this.previousName}>Back To Previous Name</button>
               </div>
               <br/><span>
                   Company name is now {this.props.store.getState().name.length > 0 ? this.props.store.getState().name : 'empty'}
                   </span>

           </div>
        )
    }
}

Company.propTypes = {
  // newName: PropTypes.func.isRequired
}

export default Company