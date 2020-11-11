const app = require('./app');

const Crypto = require('./handlers/Crypto/Cryptography');

Crypto.Encrypt('test');


async function main()
{
   try{
    await app.listen(app.get('PORT'));
    console.log('Server listening on port: ', app.get('PORT'));
   }catch{
       console.log('This port is begin used');
   }
}

main();