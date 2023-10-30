import I18n from 'i18n-js'

document.addEventListener('turbo:load', function() {
  I18n.locale = document.querySelector('body').getAttribute('data-locale');
  document.addEventListener('change', function(event) {
    let image_upload = document.querySelector('#micropost_picture');
    const size_in_megabytes = image_upload.files[0].size/1024/1024;
    if (size_in_megabytes > 5) {
      alert(I18n.t("alert_limit_size"));
      image_upload.value = '';
    }
  });
});
