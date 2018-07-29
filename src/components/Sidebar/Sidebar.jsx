import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Divider, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

import '../../assets/css/App.css'
import dashboardRoutes from '../../routes/DashboardRoutes.jsx'

class AppSidebar extends Component {
	constructor(props) {
		super(props);
	}

	activeRoute (routeName) {
		return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : ''; 
	}

	state = {}

 	handleClick = (e, { title }) => this.setState({ activeItem: title })

	render() {
    	// const { activeItem } = this.state
    	
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

				<Menu.Item className='sb-title'>
					<Icon className='sb-logo' name='pied piper alternate' />
				</Menu.Item>

				<div className='sb-wrapper'>
					<div className='sb-nav'>
						{dashboardRoutes.map((prop,key) => {
							if (!prop.redirect)
								return (
									<Menu.Item
										className={
											prop.upgrade
												? 'active active-pro'
												: this.activeRoute(prop.path)
										}
										key={key}
									>
										<NavLink
											to={prop.path}
											className='nav-link'
											activeClassName='active'
										>
											<p>{prop.name}</p>
										</NavLink>
									</Menu.Item>
									);
							return null;
						})}
					</div>
				</div>

				</Sidebar>
			</Sidebar.Pusher>
		)
	}
}

export default AppSidebar;
