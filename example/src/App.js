import React, { Component } from 'react'

import {MoonPhase, PhaseText} from 'moonphases-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <MoonPhase />
        <PhaseText/>
      </div>
    )
  }
}
