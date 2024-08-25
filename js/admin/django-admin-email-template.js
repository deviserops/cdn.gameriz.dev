window.addEventListener("load", function () {
    (function ($) {
        var __admin_email_template = {
            ready: function () {
                __admin_email_template.apply_faq_text_area_editor()
            },
            apply_faq_text_area_editor: function () {
                $('#id_content').width('100%')
                tinymce.init({selector:'#id_content'});
            }
        }
        $(document).ready(function ($) {
            __admin_email_template.ready()
        });
    })(django.jQuery);
});