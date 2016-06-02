import Adapter from 'ember-data-github/adapters/github-repository';
import ProviderAdapterMixin from 'feedbackfruits-accounts/mixins/adapters/provider';

export default Adapter.extend(ProviderAdapterMixin, {
  namespace: 'provide/github'
});
