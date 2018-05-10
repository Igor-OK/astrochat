import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Icon} from "../Icon/Icon";
import { SearchInput } from "../SearchInput/SearchInput";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";
import { HeaderBtn } from "../HeaderBtn/HeaderBtn";
import { Avatar } from "../Avatar/Avatar";
import './Header.css';

class HeaderComponent extends Component {
  render() {
    let {title, subtitle, type = "chats"} = this.props;
    let size = subtitle ? "lg" : "sm";
    return (

      <div className={`header header_${size}`}>
        <div className="header__left">
          {type === "search" && <SearchInput />}
          {type === "dialog" && <HeaderBtn onClick={this.props.history.goBack} type="back" txt="Back" />}
        </div>

        {title && (
          <div className="header__center">
            <HeaderTitle
              title={title}
              subtitle={subtitle}
            />
          </div>
        )}

        <div className="header__right">
          {type === "contacts" && <Link to="/search"><Icon type="header-add" /></Link>}
          {type === "chats" && <Link to="/dialog"><Icon type="header-write" /></Link>}
          {type === "search" && <Link to="/contacts"><Header type='action' txt="Cancel"/></Link>}
          {type === "dialog" && <Avatar size="xsmall" />}
        </div>
      </div>
    );
  }
}

export const Header = withRouter(HeaderComponent);