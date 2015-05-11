'use strict';

import React from 'react';

require('./index.less');

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

export default class ContactSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      invalidInput: false,
      submitted: false,
      loading: false
    };
  }

  submit() {
    const email = React.findDOMNode(this.refs.email).value;
    const message = React.findDOMNode(this.refs.message).value;
    if (!email || validateEmail(email)) {
      this.setState({ loading: true });

      var request = new XMLHttpRequest();
      var url = 'https://api.parse.com/1/classes/message';

      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'application/json');
      request.setRequestHeader('X-Parse-Application-Id', 'z17SUVXKL2JqHShB3jMSjphyMqPiCZ9nqTX7Fn7M');
      request.setRequestHeader('X-Parse-REST-API-Key', 'f3uFeCxiRQkgDWMYmMEGinF53VpIffhg1m5jWgdu');

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          this.setState({ submitted: true });
        }

        this.setState({ loading: false });

      }.bind(this);

      var data = JSON.stringify({ email, message });
      request.send(data);
    } else {
      this.setState({ invalidInput: true });
      setTimeout(function() {
        this.setState({ invalidInput: false });
      }.bind(this), 500);
    }
  }

  watchForEnter(e) {
    if (e.keyCode === 13) {
      this.submit();
    }
  }

  render() {
    let content;
    if (this.state.loading) {
      content = (
        <p><strong>Hold on.</strong></p>
      );
    } else if (this.state.submitted) {
      content = (
        <p><strong>Thanks for your message.</strong> We will get back to you as soon as possible.</p>
      );
    } else {
      content = (
        <div id='section-contact-form'>
          <div className='row'>
            <textarea ref='message' placeholder='Do you have any questions?'></textarea>
          </div>
          <div className='row'>
            <div className='one-half column'>
              <input className={this.state.invalidInput ? 'invalid' : ''} name='email' onKeyUp={this.watchForEnter.bind(this)} placeholder='Email (optional)' ref='email' type='email' />
            </div>
            <div className='one-half column'>
              <div className='big-button inverse' onClick={this.submit.bind(this)}>Send Message</div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div id='section-contact'>
        <div className='container' id='section-contact-content'>
          <h2>Tell Us What You Think</h2>
          {content}
        </div>
      </div>
    );
  }
}
