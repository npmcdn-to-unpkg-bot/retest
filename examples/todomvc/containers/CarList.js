import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import Header from '../components/Header'
// import MainSection from '../components/MainSection'
// import * as TodoActions from '../actions'

class CarList extends Component {
  render() {
    const { cars, actions } = this.props
    return (
      <div>
        <ul>
          <li>Car One<button>Up</button><button>Down</button></li>
          <li>Car Two<button>Up</button><button>Down</button></li>
        </ul>
      </div>
    )
  }
}

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(TodoActions, dispatch)
    actions: []
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarList)
