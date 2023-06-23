import WebSocket from 'ws';

const ConnectToChannel = () => {
  const tc = new WebSocket('ws://irc-ws.chat.twitch.tv:80');

  tc.on('error', console.error);

  tc.on('open', () => {
    console.log('< Conntection opened');
  });

  tc.on('open', () => {
    tc.send('PASS oauth:uwvls0lp010lgm9zlb1k1ina35tfng');
    tc.send('NICK lol');
    tc.send('JOIN #bratishkinoff');
  });

  tc.on('message', (data) => {
    console.log('> %s', data);
  });

  tc.on('close', () => {
    console.log('< Closed');
  });
};

export default ConnectToChannel;
