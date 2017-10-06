import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByMood(param) {
        
      if (param !== '') {
        return this.get('store').query('palette', { mood: param });
      } else {
        return this.get('store').findAll('palette');
      }
    }
  }
});