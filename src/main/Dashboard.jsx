import React, { Component } from "react";
import { Button, Card, Dimmer, Header, Icon, Image, Label } from 'semantic-ui-react'

class Dashboard extends Component {

	constructor() {
		super();
		this.state = {
			count: 0
		}
	}

	state = {}

	excited = () => {
		this.setState({ count: this.state.count + 1});
	}

  	handleShow = () => {
  		this.setState({ active: true })
  	}

  	handleHide = () => {
  		this.setState({ active: false })
  	}

	render () {

	    const { active } = this.state

		const content = (
		  <div>
		    <Header as='h2' inverted>
		      Drag a File Here
		    </Header>
		  </div>
		)


		return (
			<Card fluid>

				<Card.Content textAlign='center'>
					<Card.Header>Lexis Super Search</Card.Header>
					<Card.Meta>
						<span className='Description'> Drag and drop an image below </span>
					</Card.Meta>

					<Card fluid>
						<Card.Header>Supported formats:   .this .ain't. .workin' .yet </Card.Header>
						<Card.Content>
							<Dimmer.Dimmable
								as={Image}
								dimmed={active}
								dimmer={{ active, content }}
								onMouseEnter={this.handleShow}
								onMouseLeave={this.handleHide}
								size='medium'
								src='https://react.semantic-ui.com/images/wireframe/image.png'
							/>
						</Card.Content>
					</Card>
				</Card.Content>

				<Card.Content extra textAlign='center'>
					<Button onClick={this.excited} > <Icon name='thumbs up outline'/> Like  </Button> 
					<Label> {this.state.count} </Label>
				</Card.Content>

			</Card>

			)
	}
}


export default Dashboard;