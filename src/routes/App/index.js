import React, { Component } from 'react'
import { withRouter, Link } from 'dva/router';
import { connect } from 'dva'
import BasicLayout from '../../layout/basic'
import styles from './index.less'
class App extends Component {
    UNSAFE_componentWillMount() {
    }
    render() {
        const pathname = window.location.pathname;
        let show = pathname.startsWith('/subapp') ? 'subapp' : pathname.startsWith('/home') ? 'home' : null;
        return (
            <div
                className={styles.appBox}
            >
                <div>
                    <Link to={{ pathname: '/subapp/vue' }}>
                        <div>subVue</div>
                    </Link>
                </div>
                <div>
                    <Link to={{ pathname: '/subapp/reportapp' }}>
                        <div>reportapp</div>
                    </Link>
                </div>
                <BasicLayout />
                {show === 'home' && this.props.children}
                {show === 'subapp' && <div id="subapp-viewport"></div>}
            </div>
        )
    }
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }
))(App))