import React, { Component } from 'react'
import { Button, Menu, Sidebar } from 'semantic-ui-react'


class AppHeader extends Component {
	constructor() {
		super();
	}
	state = {}

 	handleClick = (e, { title }) => this.setState({ activeItem: title })

	render() {
    	const { activeItem } = this.state

	    return (
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
			        <Menu.Item position='right' >
		              <Button as='a'>
		                Log in
		              </Button>
			        </Menu.Item>
		      	</Menu>
	    )
	}
}

export default AppHeader;