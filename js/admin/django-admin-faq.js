window.addEventListener("load", function () {
    (function ($) {
        var __admin_faq = {
            ready: function () {
                __admin_faq.apply_faq_text_area_editor()
            },
            apply_faq_text_area_editor: function () {
                $('#id_answer').width('100%')
                tinymce.init({selector:'#id_answer'});
            }
        }
        $(document).ready(function ($) {
            __admin_faq.ready()
        });
    })(django.jQuery);
});