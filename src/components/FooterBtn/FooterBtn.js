import React, { Component } from 'react';
import './FooterBtn.css';
import {Icon} from "../Icon/Icon";

class FooterBtn extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className={this.props.active?"footer-btn":"footer-btn_passive"}>
        <Icon type={this.props.icon} alt="" />
        <p className="footer-btn__description">{this.props.description}</p>
      </div>
    );
  }
}
export default FooterBtn;
