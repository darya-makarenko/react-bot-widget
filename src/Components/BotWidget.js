import React, { Component } from 'react';
import { Widget, addResponseMessage,  setQuickButtons, toggleMsgLoader } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import axios from 'axios';


class BotWidget extends Component {
  componentDidMount() {
    addResponseMessage(this.props.welcomeMessage);
    axios.get(this.props.buttonsUrl)
      .then(res => {
        this.quickButtons = res.data;
      });
  }

  handleNewUserMessage = (newMessage) => {    
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();
      let buttons = this.getQuickButtons(newMessage);    
      if (buttons){
        setQuickButtons(buttons);
      } else {
        axios.post(this.props.messagesUrl, {message: newMessage})
          .then(res => {
            addResponseMessage(res.data.message);
          });
      }
    }, this.props.timeout);
  }

  getQuickButtons = (message) => {
    let button = this.quickButtons.find(elem => elem.button === message);
    if (button){
      return button.representation;
    }
    return false;
  }

  handleQuickButtonClicked = (button) => {
    axios.post(this.props.messagesUrl, {message: button})
      .then(res => {
        addResponseMessage(res.data.message);
      });
    setQuickButtons([]);
  }

  render() {
    return (
      <Widget
        title={this.props.title}
        subtitle={this.props.subtitle}
        senderPlaceHolder={this.props.senderPlaceHolder}
        handleNewUserMessage={this.handleNewUserMessage}
        handleQuickButtonClicked={this.handleQuickButtonClicked}
      />
    );
  }
}

export default BotWidget;
