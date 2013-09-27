// unpublish post confirmation
define(['alertify'], function(alertify){
    var unpublish = document.getElementById('confirm');

    unpublish.addEventListener('click', function() {

        alertify.set({ labels: {
            ok     : "Unpublish",
            cancel : "Cancel"
        } });

        // custom button focus
        alertify.set({ buttonFocus: "cancel" })

        // confirm dialog
        alertify.confirm("Are you sure you want to UNPUBLISH this post?", function (e) {
            if (e) {
                // user clicked "ok"
                alertify.success("Your post has been UNPUBLISHED");
            } else {
                // user clicked "cancel"
                alertify.error("Your post remains PUBLISHED");
            }
        });

    }, false);

});
