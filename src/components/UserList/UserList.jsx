import React, { PureComponent } from 'react';
import { Contacts } from '../Contacts/Contacts';
import { Contact } from '../Contact/Contact';
import { NoResults } from '../NoResults/NoResults';
import { Error } from '../Error/Error';
import { FETCH_CONTACTS_ERROR } from '../../errorCodes';
import { connect } from 'react-redux';

import api from '../../../src/api.js';

class UserListComponent extends PureComponent {
  componentDidMount() {
    this.fetch();
  }

  state = {
    users: [],
    error: null,
  };

  async fetch(param) {
    if (param === null) {
      return;
    }

    try {
      let resp = await api.getUsers(param);
      let next = resp.next;
      this.setState(prevState => ({
        users: prevState.users.concat(
          resp.items.map(user => {
            const status = user.online ? 'online' : 'offline';
            return {
              _id: user._id,
              userName: user.name ? user.name : 'Anonymous',
              avatar: user.img,
              size: 'small',
              content: status,
              contentType: status,
            };
          }),
        ),
      }));
      await this.fetch(next);
    } catch (err) {
      console.error(err);
      this.setState({ error: err });
    }
  }

  render() {
    const { users, error } = this.state;
    if (!users.length && !error) {
      return <NoResults text="No contacts yet..." />;
    }

    return (
      <React.Fragment>
        <Contact
          userName={this.props.user.name}
          content={this.props.user.phone}
          avatar={this.props.user.img}
          size="large"
          contentType="message"
          color="7"
        />
        <Contacts type="contactList" contacts={users} user={this.props.user} search={this.props.current} />
        {error ? <Error code={FETCH_CONTACTS_ERROR} /> : null}
      </React.Fragment>
    );
  }
}

const stateToProps = state => ({
  user: state.user,
  current: state.search.currentUserSearch,
});

export const UserList = connect(stateToProps)(UserListComponent);
