angular
  .module('Converter', [])
  .directive('conversion', conversion);

function conversion() {
  return {
    template: 'I was made in a directive constructor!',
  };
}
