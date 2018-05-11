import React, { PureComponent } from 'react';
import { Contacts } from '../Contacts/Contacts';
import { Contact } from '../Contact/Contact';
import { NoResults } from '../NoResults/NoResults';
import { Error } from '../Error/Error';
import { FETCH_CONTACTS_ERROR } from '../../errorCodes';
import { connect } from 'react-redux';
import { astroCalc } from '../../helpers/astroCalc.js';
import { gmtUniToRequest } from '../../helpers/gmtUniToRequest.js';
import { customArray } from '../../helpers/customArray.js';
import { currentGmt } from '../../helpers/currentGmt.js';
import { belarusGmt } from '../../helpers/belarusGmt.js';
import { natalToUniGmt } from '../../helpers/natalToUniGmt.js';

import api from '../../../src/api.js';

class UserListComponent extends PureComponent {
  componentDidMount() {
    this.fetch();

    // achiving of array of longitudes
    let currentUniGmt = currentGmt(); // transform time to gmt
    let nowRequest = gmtUniToRequest(currentUniGmt); // generate elements of request in right format
    let arrCurrent = customArray(
      // request for array of longitudes
      currentUniGmt[3],
      this.props.ephemerids[nowRequest[0]],
      this.props.ephemerids[nowRequest[1]],
    );
    this.setState({
      currentLongitudes: arrCurrent,
    });
  }

  state = {
    users: [],
    error: null,
    currentLongitudes: [],
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

            // achiving of array of user's array of longitude
            let nativeString = user.phone;
            let nativeStringDate = nativeString.split('/')[0];
            let nativeStringTime = nativeString.split('/')[1];
            // Gmt-разница для времени рождения натива
            let nativeGmtTimeZone = belarusGmt(nativeStringDate, nativeStringTime); // native time in grinvich
            let nativeUniGmt = natalToUniGmt(nativeStringDate, nativeStringTime, nativeGmtTimeZone); // transform time to right format gmt
            let nowRequest = gmtUniToRequest(nativeUniGmt); // generate elements of request in right format
            let arrNative = customArray(
              // request for array of longitudes
              nativeUniGmt[3],
              this.props.ephemerids[nowRequest[0]],
              this.props.ephemerids[nowRequest[1]],
            );

            astroCalc(arrNative); //сюда передавать массивЫ координат

            return {
              _id: user._id,
              date: user.phone,
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
  ephemerids: state.ephemerids.eph,
});

export const UserList = connect(stateToProps)(UserListComponent);
