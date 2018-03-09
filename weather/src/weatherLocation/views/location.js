import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Icon, Container } from 'semantic-ui-react'
import { fetchLocationByIp } from '../actions'
class Location extends Component {
    constructor (props) {
        super(props) 
        this.getLocation = this.getLocation.bind(this)
    }
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchLocationByIp())
    }
  getLocation() {
        const locationByIp = this.props.locationByIp;
        let  location = '';
        const {status} = locationByIp;
        if (status === 'init') {
            location = '正在加载...';
        } else if(status === 'start') {
            location = '定位中...';
        }
        return '查找中';

  }
  render() {
      const location = this.getLocation();

    return (
      <Container
      text style={{ marginTop: '1em' }}>
        <Header 
          as="h3"
          textAlign="center"
          dividing
          style={{'fontSize': '19px',
          fontWeight: '300'}}>
          <Icon name="point" disabled />
          {location} 
        </Header>
      </Container>
    )
  }
}
const mapStateToProps = state => ({
  locationByIp: state.locationByIp
})
export default connect(mapStateToProps)(Location)
