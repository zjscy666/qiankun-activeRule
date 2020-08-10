import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import micro from '../../micro'
class Home extends Component {
  timer = null
  componentDidMount() {
    let arr = [
      {
        name: 'reports',
        entry: 'http://localhost:3000',
        container: '#subapp-viewport',
        activeRule: '/subapp/reportapp',
        // activeRule: (location) => {
        //   const {
        //     pathname,
        //     hash
        //   } = location;
        //   if ((pathname + hash).startsWith('/subapp/reportapp/#')) {
        //     return true
        //   } else {
        //     return false;
        //   }
        // }
      },
      {
        name: 'vue',
        entry: 'http://localhost:7101',
        container: '#subapp-viewport',
        activeRule: ['/subapp/vue']
        // activeRule: (location) => {
        //   const {
        //     pathname
        //   } = location;
        //   if (pathname.startsWith('/subapp/vue')) {
        //     return true
        //   } else {
        //     return false;
        //   }
        // }
      },
    ];
    micro(arr)
  }
  render() {
    return <div style={{ width: '100%', height: '100%' }}>
      <div>
        home
        {/* <Link to={{ pathname: '/subapp/vue' }}>
          <div>subVue</div>
        </Link>
      </div>
      <div>
        <Link to={{ pathname: '/subapp/reportapp' }}>
          <div>reportapp</div>
        </Link> */}
      </div>
    </div>
  }
}


export default connect(({ app, home, loading }) => ({ app, home, loading }
))(Home)