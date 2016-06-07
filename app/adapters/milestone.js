import Adapter from 'bepstore-github/adapters/milestone';
import config from '../config/environment';

export default Adapter.extend({
  authenticatedHost: config.accounts.host,
  unauthenticatedHost: 'https://api.github.com'
});
