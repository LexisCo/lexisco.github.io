import React, { Component } from 'react'
import { Button, Dropdown, Icon, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Item 1', value: 1 },
  { key: 2, text: 'Item 2', value: 2 },
  { key: 3, text: 'Item 3', value: 3 },
]

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
		              <Dropdown 
		              	button
						trigger={<span><Icon name='setting'/> Settings </span>}
						options={options}
		              />
			        </Menu.Item>
		      	</Menu>
	    )
	}
}

export default AppHeader;