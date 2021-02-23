import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
	background: "#f5f8fb",
	fontFamily: 'Courier New',
	headerBgColor: "#D7A09A",
	headerFontColor: "#fff",
	headerFontSize: "15px",
	botBubbleColor: "#D7A09A",
	botFontColor: "#fff",
	userBubbleColor: "#fff",
	userFontColor: "#4a4a4a",
};

class Review extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: '',
        role: '',
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { name, role} = steps;
  
      this.setState({ name, role });
    }
  
    render() {
      const { name, role} = this.state;
      return (
        <div style={{ width: '100%' }}>
          <h3>Summary</h3>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{name.value}</td>
              </tr>
              <tr>
                <td>The...</td>
                <td>{role.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  Review.propTypes = {
    steps: PropTypes.object,
  };
  
  Review.defaultProps = {
    steps: undefined,
  };
  
  class Chat extends Component {
    render() {
      return (
    <div  style={{
        display: "flex",
        marginTop: "10%",
        justifyContent: "center",
        alignItems: "center"
      }}>
	<ThemeProvider theme={theme}>
    <ChatBot
        steps={[
            {
                id: 'hello',
                message: 'hi there!',
                trigger: '1',
              },
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Nice to meet you, {previousValue}!',
            trigger: 'role',
          },
          {
            id: 'role',
            message: 'What is your relationship to Juliette?',
            trigger: 'whoisthis',
          },
          {
            id: 'whoisthis',
            options: [
              { value: 'recruiter', label: 'looking to hire her!', trigger: 'a' },
              { value: 'programmer', label: 'fellow programmer', trigger: 'b' },
              { value: 'networking', label: 'just networking.', trigger: 'c' },
              { value: 'idk', label: "I don't really know her", trigger: 'd' },
            ],
          },
          {
            id: 'a',
            message: "If you aren't already in contact, you should reach out to her!",
            trigger: 'linkedin'
          },
          {
              id: 'linkedin',
              component: (
                <div> <a href="https://www.linkedin.com/in/juliettegondon/" target="_blank" rel="noreferrer">Add Juliette on LinkedIn!</a> </div>
              ),
              trigger: 'thatsall',
          },
          {
            id: 'b',
            message: 'I hear she wants a partner for a React project...',
            trigger: 'github',
          },
          {
            id: 'github',
            component: (
              <div> <a href="https://github.com/juliettegondon" target="_blank" rel="noreferrer">Follow her on GitHub!</a> </div>
            ),
            trigger: 'thatsall',
        },
          {
            id: 'c',
            message: 'Cool :-)',
            trigger: 'thatsall',
          },
          {
            id: 'd',
            message: "She's really nice, I swear...",
            trigger: 'e',
          },
          {
            id: 'e',
            message: "AND she is NOT paying me to say this...",
            trigger: 'thatsall',
          },
          {
            id: '7',
            message: 'quick summary of our convo...',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'thatsall',
          },
          {
            id: 'thatsall',
            message: 'we can do this again, or you can be done here!',
            trigger: 'thatsalloptions',
          },
          {
            id: 'thatsalloptions',
            options: [
                { value: 'startover', label: 'start over', trigger: '1' },
              { value: 'imdone', label: "I'm done", trigger: 'end' },
            ]
          },
          {
            id: 'end',
            message: 'thanks for chatting!',
            end: true,
          },
        ]}
      />
	</ThemeProvider>
    </div>
);
        }}
export default Chat;
