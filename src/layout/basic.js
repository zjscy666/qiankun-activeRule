import React, { Component } from 'react';
import { connect } from 'dva'
import { Link } from 'dva/router';

export default connect(({ app, loading }) => ({ app, loading }))(class BasicLayout extends Component {
    render() {
        return (
            <div>
                {/* <div>
                    <Link to={{ pathname: '/subapp/vue' }}>
                        <div>subVue</div>
                    </Link>
                </div>
                <div>
                    <Link to={{ pathname: '/subapp/reportapp' }}>
                        <div>reportapp</div>
                    </Link>
                </div> */}
            </div>
        )
    }
})