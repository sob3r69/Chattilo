const GetUserName = (message: string) => {
  return message.slice(1, message.indexOf('!'));
};

const GetUserMessage = (message: string) => {
  return message.slice(message.indexOf(' :') + 2);
};

export const GetFullUserMessage = (message: string) => {
  return GetUserName(message) + ': ' + GetUserMessage(message);
};
