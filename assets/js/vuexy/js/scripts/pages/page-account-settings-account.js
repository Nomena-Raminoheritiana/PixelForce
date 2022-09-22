$(function () {
  ('use strict');

  // variables
  var form = $('.validate-form'),
    accountUploadImg = $('#account-upload-img'),
    accountUploadBtn = $('#account-upload'),
    accountUserImage = $('.uploadedAvatar'),
    accountResetBtn = $('#account-reset'),
    accountNumberMask = $('.account-number-mask'),
    accountZipCode = $('.account-zip-code'),
    select2 = $('.select2');

  // Update user photo on click of button

  if (accountUserImage) {
    var resetImage = accountUserImage.attr('src');
    accountUploadBtn.on('change', function (e) {
      var reader = new FileReader(),
        files = e.target.files;
      reader.onload = function () {
        if (accountUploadImg) {
          accountUploadImg.attr('src', reader.result);
        }
      };
      reader.readAsDataURL(files[0]);
    });

    accountResetBtn.on('click', function () {
      accountUserImage.attr('src', resetImage);
    });
  }

  // jQuery Validation for all forms
  // --------------------------------------------------------------------
  if (form.length) {
    form.each(function () {
      var $this = $(this);

      $this.validate({
        rules: {
          firstName: {
            required: true
          },
          lastName: {
            required: true
          },
          accountActivation: {
            required: true
          }
        }
      });
      $this.on('submit', function (e) {
        e.preventDefault();
      });
    });
  }

  //phone
  if (accountNumberMask.length) {
    accountNumberMask.each(function () {
      new Cleave($(this), {
        phone: true,
        phoneRegionCode: 'US'
      });
    });
  }

  //zip code
  if (accountZipCode.length) {
    accountZipCode.each(function () {
      new Cleave($(this), {
        delimiter: '',
        numeral: true
      });
    });
  }

  // For all Select2
  if (select2.length) {
    select2.each(function () {
      var $this = $(this);
      $this.wrap('<div class="position-relative"></div>');
      $this.select2({
        dropdownParent: $this.parent()
      });
    });
  }
});
