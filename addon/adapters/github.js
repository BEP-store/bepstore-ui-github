import Adapter from 'feedbackfruits-accounts/adapters/account';
// import config from '../config/environment';

export default Adapter.extend({
  host: 'http://localhost.feedbackfruits.com:3001/provide/github/',
  // host: config.accounts.host,
});
