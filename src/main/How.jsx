import React, { Component } from "react";
import { Container, Header, Icon } from 'semantic-ui-react'


class HowPage extends Component {
	render() {
		return(
			<div className='hp-wrapper'>

				<Container fluid textAlign='center'>
					<Header as='h2'>How it works</Header>
					<p> <Icon name='wrench' /> </p>
					<p>
						It doesn't yet.
					</p>
					<p>
						Will fill this up with technical jargon later.
					</p>
				</Container>
			</div>

			)
	}
}

export default HowPage;