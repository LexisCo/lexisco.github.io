import React, { Component } from "react";
import { Container, Header, Icon } from 'semantic-ui-react'


class AboutPage extends Component {
	render() {
		return(
			<div className='ab-wrapper'>
				<Container fluid textAlign='center' style={{ marginTop: '2em' }}> 
					<Header as='h2'>About Us</Header>
					<p> <Icon name='user' /> </p>
					<p>
						Creators: Anthony & Glen
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