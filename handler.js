'use strict';
import KMS  from "aws-sdk/clients/kms"

const kms = new KMS({apiVersion: '2014-11-01'})

module.exports.cheesy = async (event) => {
  const { plainText } = event
  const { CiphertextBlob } = await kms.encrypt({
    KeyId: `${process.env.KMS_KEY_ID}`,
    Plaintext: plainText}).promise()
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Cheesy has encrypted ${plainText} to ${cypherText}`,
        cypherText: CiphertextBlob.toString(),
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
