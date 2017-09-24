import Ember from 'ember';

const darkColorMoods = [
  'Spooky',
  'Gloomy',
  'Evil'
]

const lightColorMoods = [
  'Relaxing',
  'Fun',
  'Sunny'
];

export function colorPaletteMood([mood]) {
  if(darkColorMoods.includes(mood)) {
      return "Dark"
  } else if(lightColorMoods.includes(mood)) {
      return "Light"
  } else {
      return "Neutral"
  }
}

export default Ember.Helper.helper(colorPaletteMood);
