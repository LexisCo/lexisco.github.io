import Dashboard from '../main/Dashboard.jsx'
import How from '../main/How.jsx'
import About from '../main/About.jsx'


const dashboardRoutes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard
	},

	{
		path: '/howitworks',
		name: 'How it works',
		component: How
	},

	{
		path: '/about',
		name: 'About',
		component: About
	},

	{
		redirect: true,
		path: '/',
		to: '/dashboard',
		name: 'Dashboard'
	}

]

export default dashboardRoutes;

