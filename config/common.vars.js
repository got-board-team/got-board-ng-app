const helpers = require('./helpers');
const varByEnv = {
  'local': {
    'API_ENDPOINT': 'http://local.got-board.com:9001',
    'API_ENV': 'development',
    'DOMAIN': 'got-board.auth0.com',
    'CLIENTID': '',
    'NODE_PORT': 9001
  },
  'development': {
    'API_ENDPOINT': 'http://dev.got-board.com',
    'API_ENV': 'development',
    'DOMAIN': 'got-board.auth0.com',
    'CLIENTID': '',
    'NODE_PORT': 8081
  },
  'test': {
    'API_ENDPOINT': 'http://dev.got-board.com',
    'API_ENV': 'test',
    'DOMAIN': 'got-board.auth0.com',
    'CLIENTID': '',
    'NODE_PORT': 8081
  },
  'staging': {
    'API_ENDPOINT': 'http://stg.got-board.com',
    'API_ENV': 'staging',
    'DOMAIN': 'got-board.auth0.com',
    'CLIENTID': '',
    'NODE_PORT': 8081
  },
  'production': {
    'API_ENDPOINT': 'http://www.got-board.com',
    'API_ENV': 'production',
    'DOMAIN': 'got-board.auth0.com',
    'CLIENTID': '',
    'NODE_PORT': 8081
  }
};

module.exports = function (options) {
  return {
    'ENV': JSON.stringify(options.env),
    'process.env': {
      'ENV': JSON.stringify(options.env),
      'API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT || varByEnv[options.env].API_ENDPOINT),
      'APP_VERSION': JSON.stringify(require('../package.json').version),
      'API_ENV': JSON.stringify(process.env.API_ENV || varByEnv[options.env].API_ENV),
      'NODE_ENV': JSON.stringify(options.env),
      'DOMAIN': JSON.stringify(process.env.DOMAIN || varByEnv[options.env].DOMAIN),
      'CLIENTID': JSON.stringify(process.env.CLIENTID || varByEnv[options.env].CLIENTID),
      'NODE_PORT': JSON.stringify(process.env.NODE_PORT || varByEnv[options.env].NODE_PORT)
    }
  }
}
