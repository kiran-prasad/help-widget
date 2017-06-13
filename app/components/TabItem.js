import React, {PureComponent, PropTypes} from 'react'
import {
  TAB_DEFAULT_TEMPLATE,
} from '../constants/tabTemplate';

class TabItem extends PureComponent {

  onClickTab = () => {
    const {props} = this;
    props.onClickTab(props.tab.id);
  };

  render() {
    const {props: {tab, isActive}} = this;

    return (
      <div className={`tab-icon cp rfloat ${isActive ? 'active-icon' : ''}`}>
        <div className="icon-container" dangerouslySetInnerHTML={{ __html: TAB_DEFAULT_TEMPLATE}}></div>
        <i className={`fa fa-${tab.icon}`} aria-hidden="true"></i>
        <div className="tab-item" onClick={this.onClickTab}>{tab.label}</div>
      </div>
    )
  }
}

TabItem.proptypes = {
  onClickTab: PropTypes.func,
  tab: PropTypes.object,
  isActive: PropTypes.bool
};

export default TabItem;