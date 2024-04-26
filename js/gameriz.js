var gameriz = {
    ready: function () {
        $(document).on('click', '.toggle_profile_input', gameriz.toggle_profile_input)
    },
    toggle_profile_input: function () {
        let domElement = $('.toggle_profile_input')
        domElement.find('i').toggleClass('d-none')
        let base = domElement.closest('.toggle_profile_input_div').find('ul li')
        base.find('p').toggleClass('d-none')
        base.find('.form-outline').toggleClass('d-none')
        base.find('.submit_button').toggleClass('d-none')
    },
    follow_user: function (data = null) {
        // for profile page
        let element = $(document).find('.follow_user_div')
        if (element.length) {
            let folow_text_element = element.find('.follow_user_text')
            let folow_count_element = element.find('.follow_user_count')
            let follow_text = element.data('follow-text').trim()
            let unfollow_text = element.data('unfollow-text').trim()
            if (folow_text_element.text().trim() == follow_text) {
                folow_text_element.text(unfollow_text)
                folow_count_element.text(parseInt(folow_count_element.text()) + 1)
            } else {
                folow_text_element.text(follow_text)
                folow_count_element.text(parseInt(folow_count_element.text()) - 1)
            }
        }

        // for gamer list
        let list_element = $(document).find('.follow_list_' + data.param.pk)
        if (list_element.length) {
            let follow_text = list_element.data('follow-text').trim()
            let unfollow_text = list_element.data('unfollow-text').trim()
            let follow_text_element = list_element.find('a')
            if (follow_text_element.text().trim() == follow_text) {
                follow_text_element.text(unfollow_text)
                follow_text_element.removeClass('badge-primary').addClass('badge-warning')
            } else {
                follow_text_element.text(follow_text)
                follow_text_element.addClass('badge-primary').removeClass('badge-warning')
            }
        }
    }
}

$(document).ready(function () {
    gameriz.ready()
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



function timestamp(timestamp = null) {

    $('.timestamp_date').each(function () {
        let timestamp = $(this).text()
        if ($(this).text()) {
            let date = new Date(timestamp * 1000);
            let month = date.getMonth() + 1
            if (month <= 9) {
                month = '0' + month
            }
            let timestamp_date = date.getDate()
            if (timestamp_date <= 9) {
                timestamp_date = '0' + timestamp_date
            }
            timestamp_hours = date.getHours()
            if (timestamp_hours <= 9) {
                timestamp_hours = '0' + date.getHours()
            }
            let timestamp_minutes = date.getMinutes()
            if (timestamp_minutes <= 9) {
                timestamp_minutes = '0' + date.getMinutes()
            }
            let correct_date = date.getFullYear() + '-' + month + '-' + timestamp_date + ' ' + timestamp_hours + ':' + timestamp_minutes
            $(this).text(correct_date)
        }
    })

}

setTimeout(function () {
    timestamp()
}, 1000)