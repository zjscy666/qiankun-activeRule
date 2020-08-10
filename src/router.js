import React from 'react';
import dynamic from 'dva/dynamic'
import { Switch, Route, Redirect, routerRedux, BrowserRouter } from 'dva/router'
import App from './routes/App'
window.dynamic = dynamic
const {
	ConnectedRouter
} = routerRedux;
const Routers = function ({ history, app }) {
	const error = dynamic({
		app,
		component: () => import('./routes/Error')
	})

	const routes = [
		{
			path: '/home',
			models: () => [
				import('./models/home'),
			],
			component: () => import('./routes/Home')
		},
	]
	return (
		<ConnectedRouter history={history}>
			<BrowserRouter>
				<App routeConfig={routes}>
					<Switch>
						<Route exact path='/' render={() => <Redirect to='/home' />} />
						{routes.map(({ path, routes, _children, ...dynamics }, key) => (
							<Route
								key={key}
								exact
								path={path}
								component={dynamic({
									app,
									...dynamics
								})}
							/>
						))}
						<Route component={error} />
					</Switch>
				</App>
			</BrowserRouter>
		</ConnectedRouter>
	)
}

export default Routers
