import React from "react";
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
const Chat = () => (
    <div  style={{
        display: "flex",
        marginTop: "20px",
        justifyContent: "center",
        alignItems: "center"
      }}>
	<ThemeProvider theme={theme}>
		<ChatBot
			headerTitle="hey, stranger"
			recognitionEnable={true}
			steps={[
				{
					id: "1",
					message: "Whats your name?",
					trigger: "2",
				},
				{
					id: "2",
					user: true,
					trigger: "3",
				},
				{
					id: "3",
					message: "Hi {previousValue}, nice to meet you!",
					end: true,
				},
			]}
		/>
	</ThemeProvider>
    </div>
);

export default Chat;
