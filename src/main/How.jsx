import React, { Component } from "react";
import { Container, Header, Icon } from 'semantic-ui-react'


class HowPage extends Component {

// -- Backend Call Testing -- //
  state = { response: ''};

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  };

  callApi = async () => {
    const response = await fetch('https://lexisai-200803.appspot.com/api/start');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
// -- Backend Call Testing -- //

  //   "proxy": {
  //   "/proxy": {
  //     "target": "https://lexisai-200803.appspot.com",
  //     "pathRewrite": {
  //       "^/proxy" : ""
  //     },
  //     "changeOrigin": true
  //   }
  // }

	render() {
		return(
			<div className='hp-wrapper'>
				<Container fluid textAlign='center' style={{ marginTop: '2em' }}>
					<Header as='h2'>How it works</Header>
					<p> <Icon name='wrench' /> </p>
					<p> It doesn't yet. </p>
					<p> Will fill this up with technical jargon later. </p>

					{/* // -- Backend Call Testing -- // */}
					<p> {this.state.response} </p>
					{/* // -- Backend Call Testing -- // */}
					
					<p> <a href="https://github.com/LexisCo/lexisco.github.io"> 
							View Github</a></p>
				</Container>
			</div>

			)
	}
}

export default HowPage;