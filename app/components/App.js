import React, {PureComponent} from 'react';
import {TABS} from '../constants/tabs';
import TabItem from './TabItem';


const Header = ({onClickTab, activeTab}) => {
  const activeTabId = activeTab.id;
  return (
    <div className="header-container clearfix">
      <div className="icon-close cp rfloat">
        <i className="fa fa-close" aria-hidden="true"></i>
      </div>
      {TABS.map(tab => <TabItem key={tab.id} tab={tab} onClickTab={onClickTab} isActive={tab.id === activeTabId}/>)}
    </div>
  )
};

class App extends PureComponent {

  state = { activeTab: TABS[1] };

  onClickTab = (tabId) => {
    const activeTab = TABS.find(tab => tab.id === tabId);
    this.setState({ activeTab });
  };

  render() {
    const {state: {activeTab}} = this;

    return (
      <div className="app-container">
        <Header onClickTab={this.onClickTab} activeTab={activeTab}/>
        <div className="body-container">
          <activeTab.component />
        </div>
      </div>
    );
  }

}

export default App
