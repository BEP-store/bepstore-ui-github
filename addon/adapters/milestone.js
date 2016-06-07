import Adapter from 'ember-data-github/adapters/github-milestone';
import ProviderAdapterMixin from 'feedbackfruits-accounts/mixins/adapters/provider';

export default Adapter.extend(ProviderAdapterMixin, {
  provider: 'github'
});
