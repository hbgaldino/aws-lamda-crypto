'use strict';

module.exports.encrypt = (event, context, callback) => {

  var body = JSON.parse(event.body);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      hash: Buffer.from(body.data).toString('base64')
    }),
  };

  callback(null, response);
};


module.exports.decrypt = (event, context, callback) => {
  var body = JSON.parse(event.body);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      data: Buffer.from(body.hash, 'base64').toString('ascii')
    }),
  };

  callback(null, response);
};