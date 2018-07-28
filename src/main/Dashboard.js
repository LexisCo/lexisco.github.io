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
							<span className='Description'> Glen will know the way </span>
						</Card.Meta>

						<Dimmer.Dimmable
							as={Image}
							dimmed={active}
							dimmer={{ active, content }}
							onMouseEnter={this.handleShow}
							onMouseLeave={this.handleHide}
							size='medium'
							src='https://scontent.fybz1-1.fna.fbcdn.net/v/t1.0-1/c27.0.160.160/p160x160/10593192_10203833912742456_4717625189318138041_n.jpg?_nc_cat=0&oh=c7c938331c819ea24477dc7c6ccb361a&oe=5BDC7801' 
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