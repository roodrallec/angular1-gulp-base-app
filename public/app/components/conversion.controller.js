angular
  .module('Converter', ['ngFileUpload'])
  .controller('ConverterCtrl', ConverterCtrl);

ConverterCtrl.$inject = ['Upload'];

function ConverterCtrl(Upload) {
  /* jshint validthis: true */
  const conversionView = this;
  conversionView.name = 'Proselytize';
  conversionView.aim = 'convert';

  // upload later on form submit or something similar
  conversionView.submit = () => {
    if (conversionView.form.file.$valid && conversionView.file) {
      conversionView.upload(conversionView.file);
    }
  };

  // upload on file select or drop
  conversionView.upload = (file) => {
    // Upload.upload({
    //   url: 'upload/url',
    //   data: { file }
    // }).then((resp) => {
    //   // console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
    // }, (resp) => {
    //   // console.log('Error status: ' + resp.status);
    // }, (evt) => {
    //   var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    //   // console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    // });
  };
}
