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
  if (false) {
  	return payload;
  } 
  callback(null, payload);
};
