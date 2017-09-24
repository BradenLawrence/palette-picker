import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
                id:         'sunset-at-sea',
                title:      'Sunset at Sea',
                designer:   'Lothario',
                colors:     ['yellow', 'orange','blue'],
                img:        '/assets/images/gradient1.jpg',
                mood:       'Relaxing'
                },
                {
                id:         'party-time',
                title:      'Party Time',
                designer:   'Anselmo',
                colors:     ['blue', 'pink', 'purple'],
                img:        '/assets/images/gradient2.jpg',
                mood:       'Fun'
                },
                {
                id:         'halloween-night',
                title:      'Halloween Night',
                designer:   'Camilla',
                colors:     ['orange', 'brown', 'black'],
                img:        '/assets/images/gradient3.jpg',
                mood:       'Spooky'
                }]
    }
});
