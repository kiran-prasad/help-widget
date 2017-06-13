import React, {PureComponent} from 'react';
import '../styles/mailUsTabStyles.less';

const FileAttach = () => {
    return (
      <div className="attach-file-cont lfloat cp">
        <i className="fa fa-paperclip" aria-hidden="true"></i>
        Attach Files
      </div>
    );
  },

  SuccessText = () => {
    return (
      <div className="success-text mail-form-item">
        <i className="fa fa-check" aria-hidden="true"></i>
        Message Sent! Thanks for reaching out. Someone from our team will get back to you soon.
      </div>
    );
  };

class MailUs extends PureComponent {

  state = { emailSent: false };

  onClickSendEmail = () => {
    this.setState((prevState) => ({ emailSent: !prevState.emailSent }));
  };

  render() {
    const {state: {emailSent}} = this;

    return (
      <div className="mail-container clearfix">
        {emailSent && <SuccessText />}
        <div className="email-id mail-form-item"><b>To: </b> support@recruiterbox.com</div>
        <input autoFocus className="subject mail-form-item" placeholder="Subject"/>
        <textarea className="message mail-form-item" placeholder="Message..."></textarea>
        <FileAttach />
        <button className="send-mail-btn rfloat cp" onClick={this.onClickSendEmail}>Send Mail</button>
      </div>
    )
  }
}

export default MailUs;
