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
							<span className='Description'> Super Duper Search </span>
						</Card.Meta>

						<Dimmer.Dimmable
							as={Image}
							dimmed={active}
							dimmer={{ active, content }}
							onMouseEnter={this.handleShow}
							onMouseLeave={this.handleHide}
							size='medium'
							src='https://avatars2.githubusercontent.com/u/25327116?s=460&v=4'
						/>

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