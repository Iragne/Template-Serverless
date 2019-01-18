'use strict';

module.exports.hello = async (event, context, callback) => {
  const payload = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Perfect Hello World !!',
      input: event,
    }),
  };
  // todo
  if (payload.statusCode === 300) {
    return payload;
  } 
  callback(null, payload);
};
