import React, { Component } from 'react'
import { Container, Divider, Header, Icon, Image, Menu, Segment, Sidebar, Visibility } from 'semantic-ui-react'


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
					Page 1
				</Menu.Item>
				<Menu.Item as='a'>
					Page 2
				</Menu.Item>
				</Sidebar>

				<Sidebar.Pusher>	
					<Menu size='large'>
			    		<Menu.Item
			    			header
			    			icon
			    			content='Application'
			    		/>
				        <Menu.Item 
				        	content='Home'
				        	link='#'
				        	href='#'
					        active={activeItem === 'Menu 1'}
					        onClick={this.handleClick}
				        />
				        <Menu.Item 
					        content='App 1'
							active={activeItem === 'Menu 2'}
							onClick={this.handleClick}
				        />
				        <Menu.Item 
					        content='App 2'
							active={activeItem === 'Menu 3'}
							onClick={this.handleClick}
				        />
		      		</Menu>
				</Sidebar.Pusher>

			</Sidebar.Pusher>
		)
	}
}

export default AppSidebar;
