import WebSocket from 'ws';
import { GetFullUserMessage } from '../functions/message_funcs';
import { AUTH_TOKEN } from './globals';

type ConnectionProps = {
  channelName: string;
};

const TwitchListener = new WebSocket('ws://irc-ws.chat.twitch.tv:80');

const ConnectToChannel = (channelName: string) => {
  TwitchListener.on('error', console.error);

  TwitchListener.on('open', () => {
    console.log('< Connection opened');
  });

  TwitchListener.on('open', () => {
    TwitchListener.send('PASS ' + AUTH_TOKEN);
    TwitchListener.send('NICK lol');
    TwitchListener.send('JOIN #' + channelName);
  });

  TwitchListener.on('message', (data) => {
    const currDate = new Date();
    const strData = data.toString();
    if (strData.includes('PING')) {
      console.log('> Gotten PONGed');
      TwitchListener.send('PONG');
    }
    console.log('> ' + currDate.toLocaleString() + GetFullUserMessage(strData));
  });

  TwitchListener.on('close', () => {
    console.log('< Closed');
  });
};

export default ConnectToChannel;
