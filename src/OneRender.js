import React, { Component } from 'react'
import { LayoutContainer, LayoutBox } from './LayoutBox'

class OneRender extends Component {

  constructor() {
    super()
    this.renderCount = 0
  }

  render() {
    ++this.renderCount
    return (
      <LayoutContainer width={window.innerWidth} height={window.innerHeight}>
        <LayoutBox height={70} style={{ background: 'DodgerBlue' }}>TopBar</LayoutBox>
        <LayoutBox top={70}>
          <LayoutBox width={200} style={{ background: 'OrangeRed' }}>Left Menu</LayoutBox>
          <LayoutBox left={200} style={{ background: 'BlueViolet' }}>
            Content <br />
            { this.renderCount }
          </LayoutBox>
        </LayoutBox>
      </LayoutContainer>
    )
  }

}

export default OneRender
