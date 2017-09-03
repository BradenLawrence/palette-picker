import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
                id:         'sunset-at-sea',
                title:      'Sunset at Sea',
                designer:   'Lothario',
                colors:     ['yellow', 'orange','blue']
                },
                {
                id:         'party-time',
                title:      'Party Time',
                designer:   'Anselmo',
                colors:     ['blue', 'pink', 'purple']
                },
                {
                id:         'halloween-night',
                title:      'Halloween Night',
                designer:   'Camilla',
                colors:     ['orange', 'brown', 'black']
                }]
    }
});
