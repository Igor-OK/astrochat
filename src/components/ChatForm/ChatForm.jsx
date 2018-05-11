import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { InputBar } from '../InputBar/InputBar';
import { sendMessage } from '../../store/actions/messagesActions';

import { astroCalc } from '../../helpers/astroCalc.js';
import { gmtUniToRequest } from '../../helpers/gmtUniToRequest.js';
import { customArray } from '../../helpers/customArray.js';
import { currentGmt } from '../../helpers/currentGmt.js';
import { belarusGmt } from '../../helpers/belarusGmt.js';
import { natalToUniGmt } from '../../helpers/natalToUniGmt.js';

import { setUser } from '../../store/actions/userActions';

class ChatFormComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      messageText: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calculateUserAstroStatus = this.calculateUserAstroStatus.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let resss = this.calculateUserAstroStatus();
    console.log(resss);
    this.props.sendMessage(this.props.match.params.id, this.state.messageText, resss);
    this.setState({
      messageText: '',
    });
  }

  calculateUserAstroStatus() {
    // achiving of array of longitudes
    let currentUniGmt = currentGmt(); // transform time to gmt
    let nowRequest = gmtUniToRequest(currentUniGmt); // generate elements of request in right format
    let arrCurrent = customArray(
      // request for array of longitudes
      currentUniGmt[3],
      this.props.ephemerids[nowRequest[0]],
      this.props.ephemerids[nowRequest[1]],
    );

    // achiving of array of user's array of longitude
    let nativeString = this.props.user.phone;
    let nativeStringDate = nativeString.split('/')[0];
    let nativeStringTime = nativeString.split('/')[1];
    // Gmt-разница для времени рождения натива
    let nativeGmtTimeZone = belarusGmt(nativeStringDate, nativeStringTime); // native time in grinvich
    let nativeUniGmt = natalToUniGmt(nativeStringDate, nativeStringTime, nativeGmtTimeZone); // transform time to right format gmt
    let nativeRequest = gmtUniToRequest(nativeUniGmt); // generate elements of request in right format
    let arrNative = customArray(
      // request for array of longitudes
      nativeUniGmt[3],
      this.props.ephemerids[nativeRequest[0]],
      this.props.ephemerids[nativeRequest[1]],
    );

    let astroResult = astroCalc(arrCurrent, arrNative);

    // this.setState({
    //   astrostatus: astroResult,
    // });

    // let userAstro = {
    //   astro: astroResult,
    // };
    // let upUser = Object.assign(this.props.user, userAstro);

    // this.props.dispatch(setUser(upUser));

    return astroResult;
  }

  handleChange(e) {
    this.setState({
      messageText: e.target.value,
    });
  }

  render() {
    const { messageText } = this.state;
    return <InputBar value={messageText} onChange={this.handleChange} onSubmit={this.handleSubmit} />;
  }
}

const stateToProps = state => ({
  user: state.user,
  ephemerids: state.ephemerids.eph,
});

export const ChatForm = withRouter(connect(stateToProps, { sendMessage })(ChatFormComponent));
