import Goal from 'bepstore-goals/models/goal';
import { hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';
import Ember from 'ember';

const { computed } = Ember;

export default Goal.extend({
  engine: attr('string', { defaultValue: 'github' }),

  milestones: hasMany('milestones'),
  // issues: hasMany('issues'),
});
