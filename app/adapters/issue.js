import Adapter from 'bepstore-github/adapters/issue';
import config from '../config/environment';

export default Adapter.extend({
  host: config.accounts.host,
});
