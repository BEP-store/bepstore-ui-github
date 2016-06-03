import Model from 'ember-data-github/models/github-repository';
import attr from 'ember-data/attr';
import Ember from 'ember';

const { observer, isPresent } = Ember;

export default Model.extend({
  milestones: attr({ defaultValue: [] }),
  issues: attr({ defaultValue: [] }),

  setMilestones: observer('milestonesUrl', function() {
    let milestonesUrl = this.get('milestonesUrl');
    if (!isPresent(milestonesUrl)) {
      return [];
    }

    let regex = /https:\/\/api.github.com\/repos\/(.*)\{.*\}/;
    let id = milestonesUrl.match(regex)[1];

    this.get('store').query('milestone', { id }).then((milestones) => {
      this.set('milestones', milestones);
      milestones.forEach((milestone) => {
        milestone.set('repo', this);
      });
    });
  }),

  setIssues: observer('issuesUrl', function() {
    let issuesUrl = this.get('issuesUrl');
    if (!isPresent(issuesUrl)) {
      return [];
    }

    let regex = /https:\/\/api.github.com\/repos\/(.*)\{.*\}/;
    let id = issuesUrl.match(regex)[1];

    this.get('store').query('issue', { id }).then((issues) => {
      this.set('issues', issues);
      issues.forEach((issue) => {
        issue.set('repo', this);
      });
    });
  })
});
