export default function() {
  this.namespace = '/api'
  
  let palettes =  [{
              type:       'palettes',
              id:         'sunset-at-sea',
              attributes: {
                title:      'Sunset at Sea',
                designer:   'Lothario',
                colors:     ['yellow', 'orange','blue'],
                img:        '/assets/images/gradient1.jpg',
                mood:       'Relaxing',
                city:       'San Francisco'
              }
            },{
              type:       'palettes',
              id:         'party-time',
              attributes: {
                title:      'Party Time',
                designer:   'Anselmo',
                colors:     ['blue', 'pink', 'purple'],
                img:        '/assets/images/gradient2.jpg',
                mood:       'Fun',
                city:       'Boston'
              }
            },{
              type:       'palettes',
              id:         'halloween-night',
              attributes: {
                title:      'Halloween Night',
                designer:   'Camilla',
                colors:     ['orange', 'brown', 'black'],
                img:        '/assets/images/gradient3.jpg',
                mood:       'Spooky',
                city:       'Mentor'
              }
        }]
  
  this.get('/palettes', function(db, request){
    if(request.queryParams.mood !== undefined) {
      let filteredPalettes = palettes.filter(function(i) {
        return i.attributes.mood.toLowerCase().indexOf(request.queryParams.mood.toLowerCase()) !== -1;
      });
      return { data: filteredPalettes };
    } else {
      return { data: palettes };
    }
  })
  
  // Find and return the provided rental from our rental list above
  this.get('/palettes/:id', function (db, request) {
    return { data: palettes.find((palette) => request.params.id === palette.id) };
  });
  
}
