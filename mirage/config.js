export default function() {
  this.namespace = '/api'
  
  this.get('/palettes', function(){
    return {
      data: [{
              type:       'palettes',
              id:         'sunset-at-sea',
              attributes: {
                title:      'Sunset at Sea',
                designer:   'Lothario',
                colors:     ['yellow', 'orange','blue'],
                img:        '/assets/images/gradient1.jpg',
                mood:       'Relaxing'
              }
            },{
              type:       'palettes',
              id:         'party-time',
              attributes: {
                title:      'Party Time',
                designer:   'Anselmo',
                colors:     ['blue', 'pink', 'purple'],
                img:        '/assets/images/gradient2.jpg',
                mood:       'Fun'
              }
            },{
              type:       'palettes',
              id:         'halloween-night',
              attributes: {
                title:      'Halloween Night',
                designer:   'Camilla',
                colors:     ['orange', 'brown', 'black'],
                img:        '/assets/images/gradient3.jpg',
                mood:       'Spooky'
              }
        }]
    }
  })
}
