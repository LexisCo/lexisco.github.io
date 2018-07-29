import React, { Component } from 'react'
import { Container, Divider, Grid } from 'semantic-ui-react'

class Footer extends Component {

	render () {
		return (
			<footer className="footer">
			<Divider style={{ marginTop: '2em'}} />
				<Container>
						<Grid columns='equal'>
							<Grid.Column textAlign='left'>
								Footer Left
							</Grid.Column>

							<Grid.Column textAlign='center'>
								Footer Center
							</Grid.Column>

							<Grid.Column textAlign='right'>
								Footer Right
							</Grid.Column>
						</Grid>
				</Container>
			</footer>
			)
	}
}

export default Footer;