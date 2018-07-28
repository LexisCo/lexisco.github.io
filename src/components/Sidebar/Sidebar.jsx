import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Divider, Header, Icon, Menu, Sidebar } from 'semantic-ui-react'

import '../../assets/Sidebar.css'
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

				<div className='sb-title'>
					<Icon className='sb-logo' name='pied piper alternate' />
				</div>

				<Divider />

				<div className='sb-wrapper'>
					<ul className='sb-nav'>
						{dashboardRoutes.map((prop,key) => {
							if (!prop.redirect)
								return (
									<div
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
										<Divider />
									</div>
								);
							return null;
						})}
					</ul>
				</div>

				</Sidebar>
			</Sidebar.Pusher>
		)
	}
}

export default AppSidebar;
