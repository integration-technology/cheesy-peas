# cheesy-peas
Playing about with AWS KMS security

I couldn't find any clear examples of how to set IAM permissions for certain lambdas.  The [Cheesy Peas domain model](https://www.youtube.com/watch?v=98iUmMJFF6g) is clearly exmplained.

## Cheesy 

Takes an event such as 

`{
"plainText": "The Fast Show"
}`

and returns an encrypted string.  Note that the returned `cipherText` is in [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) which encodes the ciphertext in simple characters.

The cipherText looks something like:

`"cipherText": "1,2,2,0,120,161,2,229,54,106,31,239,227,198,81,13,78,244,205,185,154,37,172,198,159,76,152,189,38,95,78,216,25,230,249,73,26,1,9,175,45,51,8,199,197,35,67,18,143,176,109,148,129,140,0,0,0,107,48,105,6,9,42,134,72,134,247,13,1,7,6,160,92,48,90,2,1,0,48,85,6,9,42,134,72,134,247,13,1,7,1,48,30,6,9,96,134,72,1,101,3,4,1,46,48,17,4,12,120,43,47,87,77,16,90,4,71,91,78,102,2,1,16,128,40,77,208,207,183,176,237,166,61,252,213,174,115,113,234,197,248,254,62,159,119,247,189,138,68,238,133,213,24,109,111,7,1,163,207,19,8,161,111,254,252"`

## Peas

Takes the cipherText and deEncrypts this to plainText. Obviously you will need to take the output for the encrypt to use as the input for decrypt.

`{
"cipherText": "1,2,2,0,120,......"
}`

## Mushy Peas

This function is the same as Peas but is included as the serverless.yml does not include the necessary privileges and should throw an `AccessDeniedException`so that we are certain that we have locked the decrypt permission down to the **peas** lambda.

## Testing

As this was an experiment to check why a larger serverless deployment was failing, I tested through the lambda console. 

## Note

I also used this to try v3 of `@aws-sdk/client-kms` so there is a little program [Uint8Array.js](Uint8Array.js) which also tests these functions but also shows how to handle the coding and decoding.


