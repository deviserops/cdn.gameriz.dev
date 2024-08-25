window.addEventListener("load", function () {
    (function ($) {
        var __admin_static = {
            ready: function () {
                __admin_static.apply_static_text_area_editor()
            },
            apply_static_text_area_editor: function () {
                $('#id_content').width('100%')
                tinymce.init({selector:'#id_content'});
            }
        }
        $(document).ready(function ($) {
            __admin_static.ready()
        });
    })(django.jQuery);
});