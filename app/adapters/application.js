import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    namespace: 'api'
    // host: wherever your backend database is
});
