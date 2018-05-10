import React, { Component } from 'react';
import api from '../../api';

export class Init extends Component {
  async componentDidMount() {
    try {
      const createRegExp = /create/;
      const joinRegExp = /join/;
      console.log(this.props.match);
      if (this.props.match.url.match(createRegExp)) {
        const response = await api.createRoom({ name: this.props.match.params.name });
        console.log('Ответ от сервера', response);
      } else if (this.props.match.url.match(joinRegExp)) {
        const response = await api.currentUserJoinRoom(this.props.match.params.roomId);
        console.log('Ответ от сервера', response);
        console.log(`Теперь можно пройти по ссылке и пообщаться '/chat/${this.props.match.params.roomId}'`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <p>Чтобы создать комнату, пройдите по ссылке '/init/create/:name', где name - уникальное имя комнаты </p>
        <p>
          Чтобы присоедениться к комнате, пройдите по ссылке '/init/join/:roomId', где roomId - уникальное айди комнаты{' '}
        </p>
        <p>Откройте консоль, чтобы получить больше информации.</p>
      </div>
    );
  }
}
