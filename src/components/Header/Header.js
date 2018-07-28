import React, { Component } from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'


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
		    			content='Application Title'
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
		                <Icon name='setting' />
		                Settings
		              </Button>
			        </Menu.Item>
		      	</Menu>
	    )
	}
}

export default AppHeader;