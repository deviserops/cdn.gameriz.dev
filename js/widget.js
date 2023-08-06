$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        'X-CSRFTOKEN': $('meta[name="csrf-token"]').attr('content'),
        'Access-Control-Allow-Origin': '*',
    },
});
var widget = {
    ready: function () {
        widget.validate_user()
    },
    validate_user: function () {
        let url = $('.steam_widget_api').data('url')
        if (url) {
            $.post(url, function (response) {
                if (response.obj.api_url) {
                    widget.refresh_achievements(response.obj.api_url)
                }
            })
        }
    },
    refresh_achievements: function (url) {
        $.get(url, function (response) {
            let achievements = response.playerstats.achievements
            if (achievements) {
                $.each(achievements, function (e, achievement) {
                    let element_find = $('.achievement_list').find('[data-achievement-name="' + achievement.name + '"]')
                    if (element_find) {
                        let timestamp_area = $(element_find).find('.timestamp_date_area')
                        if (!timestamp_area.find('.timestamp_date').length) {
                            if (achievement.achieved) {
                                let timestamp_html = '<span class="timestamp_date">' + achievement.unlocktime + '</span>';
                                timestamp_area.html(timestamp_html)
                            }
                        }
                    }
                })
                setTimeeout(function () {
                    widget.refresh_achievements(url)
                }, 10000)
            }
        })
    }
}

$(document).ready(function () {
    widget.ready()
});