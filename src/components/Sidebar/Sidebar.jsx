import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Icon, Menu, Sidebar } from 'semantic-ui-react'

// import dashboardRoutes from '../routes/DashboardRoutes.jsx'


class AppSidebar extends Component {
	constructor() {
		super();
	}

	state = {}

 	handleClick = (e, { title }) => this.setState({ activeItem: title })

	render() {
    	const { activeItem } = this.state
		return (
			<Sidebar.Pusher>	
				<Sidebar
					as={Menu}
					animation='push'
					direction='left'
					icon='labeled'
					inverted
					visible='true'
					vertical
					width='thin'
				>
				<Menu.Item as='a' href='https:/lexisco.github.io'>
					<Icon name='home' />
					Lexis
				</Menu.Item>

				<div className='sb-wrapper'>
				</div>

				</Sidebar>
			</Sidebar.Pusher>
		)
	}
}

export default AppSidebar;
