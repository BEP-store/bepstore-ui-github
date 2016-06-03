import Model from 'ember-data-github/models/github-milestone';
import attr from 'ember-data/attr';
import Ember from 'ember';

const { observer } = Ember;

export default Model.extend({
  repo: attr({ defaultValue: null }),
  issues: attr({ defaultValue: [] }),

  setIssues: observer('repo.issues', function() {
    let issues = this.get('repo.issues');
    let number = this.get('number');
    return this.set('issues', issues.filterBy('milestone', number));
  })
});
