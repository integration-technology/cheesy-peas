'use strict';

module.exports.cheesy = async (event) => {
  const { plainText } = event
  const cypherText = ''
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Cheesy has encrypted ${plainText} to ${cypherText}`,
        cypherText,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.peas = async (event) => {
  const { cypherText } = event
  const plainText = ''
  return {
    statusCode: 200,
    body: JSON.stringify(
        {
          message: `Peas has decrypted ${cypherText} back to ${plainText}`,
          input: event,
        },
        null,
        2
    ),
  };
};

module.exports.mushyPeas = async (event) => {
  const {cypherText} = event
  const plainText = ''
  return {
    statusCode: 200,
    body: JSON.stringify(
        {
          message: `💣DANGER💣! Mushy peas has decrypted ${cypherText} back to ${plainText}`,
          input: event,
        },
        null,
        2
    ),
  };
};
