import React, { Component } from "react";
import { Container, Header, Icon } from 'semantic-ui-react'


class AboutPage extends Component {
	render() {
		return(
			<div className='ab-wrapper'>
				<Container fluid textAlign='center'> 
					<Header as='h2'>About Us</Header>
					<p> <Icon name='user' /> </p>
					<p>
						Creators:
					</p>
					<p>
						Stuff About Us.
					</p>
				</Container>
			</div>
			)
	}
}

export default AboutPage; 