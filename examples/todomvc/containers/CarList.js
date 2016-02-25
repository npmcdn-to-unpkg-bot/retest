import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CarActions from '../actions/CarActions'

class CarList extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      owner: this.props.owner || '',
      model: this.props.model || ''
    }
  }

  handleOwnerChange(e) {
    this.setState(Object.assign(this.state,{ owner: e.target.value }))
  }

  handleModelChange(e) {
    this.setState(Object.assign(this.state,{ model: e.target.value }))
  }

  addCarToList() {
    this.props.actions.addCar(this.state.owner,this.state.model)
    this.setState({
      owner: '',
      model: ''
    })
  }

  render() {
    const { cars, actions } = this.props
    return (
      <div>
        <p>
          <label>Owner</label>
          <input type="text"
            value={this.state.owner}
            onChange={this.handleOwnerChange.bind(this)}
            />
          <label>Model</label>
          <input type="text"
            value={this.state.model}
            onChange={this.handleModelChange.bind(this)}
            />
          <button className="add-car"
                    onClick={this.addCarToList.bind(this)}>Add</button>
        </p>
        <ul className="car-list">
          {cars.map(car =>
            <li key={car.id}>{car.owner} - {car.model}  --<button>Up</button><button>Down</button></li>
          )}
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
    actions: bindActionCreators(CarActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarList)
