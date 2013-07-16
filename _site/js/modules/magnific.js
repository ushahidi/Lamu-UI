//magnific lightbox plugin
define(['jquery', 'magnific'], function($, magnific) {
  $(document).ready(function() {
    // $('.lightbox').magnificPopup({
    //   type: 'image'
    // });

    $('.lightbox-gallery').magnificPopup({
      gallery: {
        enabled: true
      },
      delegate: 'a',
      type: 'image'
    });

  });
});
