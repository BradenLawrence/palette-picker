
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('color-palette-mood', 'helper:color-palette-mood', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{color-palette-mood inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

