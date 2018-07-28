import React, { Component } from 'react'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'


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
				<Menu.Item as='a'>
					<Icon name='home' />
					Lexis
				</Menu.Item>
				<Menu.Item as='a'>
					How it Works
				</Menu.Item>
				<Menu.Item as='a'>
					About Us
				</Menu.Item>
				</Sidebar>

			</Sidebar.Pusher>
		)
	}
}

export default AppSidebar;
