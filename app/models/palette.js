import DS from 'ember-data';

export default DS.Model.extend({
    title:      DS.attr(),
    designer:   DS.attr(),
    colors:     DS.attr(),
    img:        DS.attr(),
    mood:       DS.attr(),
    city:       DS.attr()
});
