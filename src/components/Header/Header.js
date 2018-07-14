import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


class AppHeader extends Component {
	state = {}

 	handleClick = (e, { title }) => this.setState({ activeItem: title })

	render() {
    	const { activeItem } = this.state

	    return (
	    	<Menu size='large'>
	    		<Menu.Item
	    			header
	    			icon
	    			content='Lexis'
	    		/>
		        <Menu.Item 
		        	content='Home'
		        	link='#'
		        	href='#'
			        active={activeItem === 'Home'}
			        onClick={this.handleClick}
		        />
		        <Menu.Item 
			        content='App 1'
					active={activeItem === 'Page 1'}
					onClick={this.handleClick}
		        />
		        <Menu.Item 
			        content='App 2'
					active={activeItem === 'Page 2'}
					onClick={this.handleClick}
		        />
	      	</Menu>
	    )
	}
}

export default AppHeader;