import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByMood(param) {
        
      if (param !== '') {
        // return this.get('store').query('palette', { mood: param });
        return this.get('store')
          .query('palette', { mood: param })
          .then((results) => {
            return { query: param, results: results };
          });
      } else {
        // return this.get('store').findAll('palette');
        return this.get('store')
          .findAll('palette')
          .then((results) => {
            return { query: param, results: results };
          });
      }
    }
  }
});