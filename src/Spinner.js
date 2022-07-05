import React, { Component } from 'react'
import loading from './loading.svg'


export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="Loading..."></img>
      </div>
    )
  }
}

export default Spinner
 



