import React, {PureComponent} from 'react';
import {FAQs} from '../constants/FAQs';
import '../styles/faqStyles.less';


const SearchInput = ({onInputFocus, onInputBlur, inputFocus}) => {
    const inputClass = `input-container ${inputFocus ? 'focus-input' : ''}`;
    return (
      <div className={inputClass}>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input autoFocus={inputFocus} placeholder="What can we help you with? Start typing your question..."
               onFocus={onInputFocus} onBlur={onInputBlur}/>
      </div>
    );
  },

  FaqItem = ({faq}) => {
    return (
      <div className="faq-item cp">
        <i className={`fa fa-${faq.icon}`} aria-hidden="true"></i>
        <label>{faq.label}</label>
      </div>
    );
  };

class FAQContainer extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      inputFocus: true
    }
  }

  onInputFocus = () => {
    this.setState(() => ({ inputFocus: true }));
  };

  onInputBlur = () => {
    this.setState(() => ({ inputFocus: false }));
  };

  renderFAQs() {
    return (
      <div className="faqItems-container">
        {FAQs.map(faq => <FaqItem key={faq.id} faq={faq}/>)}
      </div>
    )
  }

  render() {
    const {state:{inputFocus}} = this;

    return (
      <div className="faq-container clearfix">
        <div className="left-container lfloat">
          <div className="prefer-email-text">Prefer Email Instead?</div>
          <button className="email-button cp">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            Write to us
          </button>
          <p>We are super quick in responding to your queries.</p>
        </div>
        <div className="right-container lfloat">
          <SearchInput onInputFocus={this.onInputFocus} inputFocus={inputFocus} onInputBlur={this.onInputBlur}/>
          {this.renderFAQs()}
        </div>
      </div>
    );
  }
}

export default FAQContainer;