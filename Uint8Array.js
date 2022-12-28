const {KMSClient, EncryptCommand, DecryptCommand} = require("@aws-sdk/client-kms");

const {AWS_REGION} = process.env;
const KMS_KEY_ALIAS = 'alias/cheesy-peas-CheesyPeasKey';



(async () => {
  const client = new KMSClient({region: AWS_REGION})
  const plainText = "The Fast Show"
  const commandEncrypt = new EncryptCommand({Plaintext: Buffer.from(plainText), KeyId: KMS_KEY_ALIAS})
  const responseEncrypt = await client.send(commandEncrypt)
  const encryptedText = responseEncrypt.CiphertextBlob.toString()
  console.log('Encrypted text:', encryptedText)
  const cipherTextBlob = Buffer.from(encryptedText.split(','))
  const commandDecrypt = new DecryptCommand({CiphertextBlob: cipherTextBlob, KeyId: KMS_KEY_ALIAS})
  const responseDecrypt = await client.send(commandDecrypt)
  const decryptedText = new TextDecoder().decode(responseDecrypt.Plaintext)
  console.log('decrypted to:', decryptedText)
  
})()
