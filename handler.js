"use strict"
const {KMSClient, EncryptCommand, DecryptCommand} = require("@aws-sdk/client-kms");
const {AWS_REGION, KMS_KEY_ALIAS} = process.env

const client = new KMSClient({region: AWS_REGION});

module.exports.cheesy = async (event) => {
  console.log(event)
  const { plainText } = event
  const command = new EncryptCommand({Plaintext: Buffer.from(plainText), KeyId: KMS_KEY_ALIAS});
  const response = await client.send(command);
  const cipherText = response.CiphertextBlob.toString()
  return {
    statusCode: 200,
    body: JSON.stringify(
        {
          message: `Cheesy has encrypted ${plainText} to ${cipherText}`,
          cipherText,
          input: event,
        },
        null,
        2
    ),
  }
}

module.exports.peas = async (event) => {
  console.log(event)
  const {cipherText} = event
  const plainText = ""
  return {
    statusCode: 200,
    body: JSON.stringify(
        {
          message: `Peas has decrypted ${cipherText} back to ${plainText}`,
          input: event,
        },
        null,
        2
    ),
  }
}

module.exports.mushyPeas = async (event) => {
  console.log(event)
  const { cipherText } = event
  const plainText = ""
  return {
    statusCode: 200,
    body: JSON.stringify(
        {
          message: `💣DANGER💣! Mushy peas has decrypted ${cipherText} back to ${plainText} but should not have permissions `,
          input: event,
        },
        null,
        2
    ),
  }
}
