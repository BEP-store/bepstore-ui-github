import Model from 'ember-data-github/models/github-milestone';
import attr from 'ember-data/attr';
import Ember from 'ember';
import { belongsTo } from 'ember-data/relationships';

const { computed, observer } = Ember;
const { alias }    = computed;

export default Model.extend({
  repo: attr({ defaultValue: null }),
  issues: attr({ defaultValue: [] }),

  // repo: belongsTo('repo'),

  // milestone: belongsTo('milestone', {
  //   async: true,
  //   inverse: null
  // }),

  setIssues: observer('repo.issues', function() {
    let issues = this.get('repo.issues');
    let number = this.get('number');
    // debugger;
    return this.set('issues', issues.filterBy('milestone', number));
  }),

  // issues: computed('repo.issues', function() {
  //   debugger;
  //   let issues = this.get('repo.issues');
  //   let number = this.get('number');
  //   return issues.filterBy('milestone', number);
  // })
});
