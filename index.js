const lnurl = require('lnurl');

const server = lnurl.createServer({
  host: '0.0.0.0',
  port: 3000,
  lightning: {
    backend: 'lnd',
    config: {
      hostname: process.env.LAURA_LNURL_LND_HOSTNAME,
      protocol: 'https',
      cert: process.env.LAURA_LNURL_LND_CERT,
      macaroon: {
        data: process.env.LAURA_LNURL_LND_MACAROON,
      },
    },
  },
});

const tag = 'payRequest';
const params = {
  minSendable: 1,
  maxSendable: 100000000,
  metadata: '[["text/plain", "lnurl-node"]]',
  commentAllowed: 500,
};
const options = {
  uses: 0,
};

server
  .generateNewUrl(tag, params, options)
  .then((result) => {
    const { encoded, secret, url } = result;
    console.log({ encoded, secret, url });
  })
  .catch((error) => {
    console.error(error);
  });
