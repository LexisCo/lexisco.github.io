import React, { Component } from 'react'
import { Dropdown, Icon, Header, Menu, Portal, Segment } from 'semantic-ui-react'

import dashboardRoutes from '../../routes/DashboardRoutes.jsx'

const options = [
	{ key: 1, text: 'Item 1', value: 1 },
	{ key: 2, text: 'Item 2', value: 2 },
	{ key: 3, text: 'Item 3', value: 3 },
]

const setting = (
	<span><Icon name='setting' /> Settings</span>
	)

class AppHeader extends Component {
	constructor(props) {
		super(props);
	}
	
	state = { activeItem: false }
 	handleClick = () => this.setState({ activeItem: !this.state.open })
 	handleClose = () => this.setState({ activeItem: false })

 	getName() {
 		var name;

 		dashboardRoutes.map((prop, key) => {
 			if (prop.collapse) {
 				prop.views.map((prop, key) => {
 					if (prop.path == this.props.location.pathname) {
 						name = prop.name;
 					}
 				return null;
 				});
 			} else {
 				if (prop.redirect) {
 					if (prop.path == this.props.location.pathname) {
 						name = prop.name;
 					}
 				} else {
 					if (prop.path == this.props.location.pathname) {
 						name = prop.name;
 					}
 				}
 			}
 			return null;
 		});

 		return name;
 	}

	render() {
    	const { activeItem } = this.state

	    return (
		    	<Menu size='large'>
		    		<Menu.Item
		    			header
		    			icon
		    			content={this.getName()}
		    		/>
			        <Menu.Item 
				        icon='search'
						active={activeItem === 'Menu 2'}
						onClick={this.handleClick}
			        />
			        <Menu.Item 
				        icon='question circle outline'
						active={activeItem === 'Menu 3'}
						onClick={this.handleClick}
			        />
			        <Menu.Item position='right' >
		              <Dropdown 
						floating
						options={options}
						trigger={setting}
						// onClick={this.handleClick}
		              />
			        </Menu.Item>

					<Portal // Todo: Open Portal openOnTriggerClick>
					>
						<Segment style={{ left: '45%', position: 'fixed', top: '25%', zIndex: 1000 }}>
							<Header>This doesn't do anything </Header>
							<p>Click away.</p>
						</Segment>
					</Portal>

		      	</Menu>
	    )
	}
}

export default AppHeader;