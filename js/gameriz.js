$(document).ready(function () {
    var csrf_token = $(document).find('meta[name="csrf-token"]').attr('content')
    let noty = new Notify()
    new Justify({
        justifyError: true,
        showBorderError: true,
        underfieldError: true,
        csrfTokenName: 'csrfmiddlewaretoken',
        csrfToken: csrf_token,
        customJustify: function (type, message) {
            noty.show(type, message)
        }
    })
})