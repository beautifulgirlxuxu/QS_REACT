import React, { Component } from 'react'
import _ from 'lodash'

class Note extends Component {
  state = {
    entity: this.props.entity,
    body: this.props.entity.body,
    open: false,
    destroyEntity: this.props.destroyEntity
  }
  header () {
    console.log(this.state.body)
    return _.truncate(this.state.body, { length: 30 } || '新建笔记')
  } 
  render() {
    return(
      <div className="item">
        <div className="content">
          { this.header() }
        </div>
      </div>
    )
  }
}

export default Note