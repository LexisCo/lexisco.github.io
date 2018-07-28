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
		name: 'HowItWorks',
		component: How
	},

	{
		path: '/about',
		name: 'AboutUs',
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

