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
  callback(null, payload);
};
