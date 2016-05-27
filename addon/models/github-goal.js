import Goal from 'bepstore-goals/models/goal';
import { hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default Goal.extend({
  engine: attr('string', { defaultValue: 'github' }),

  githubResources: hasMany('github-resource')
});
