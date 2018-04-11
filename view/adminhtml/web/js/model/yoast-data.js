define([
    "jquery",
    "ko"
], function ($, ko) {
    "use strict";

    var url_key = ko.observable(''),
        form_data = null;

    return {
        content_score: ko.observable(''),
        keyword_score: ko.observable(''),
        focus_keyword: ko.observable(''),
        title: ko.observable(''),
        content: ko.observable(''),
        url_key: url_key,
        meta_title: ko.observable(''),
        meta_description: ko.observable(''),
        meta_keywords: ko.observable(''),
        yoast_facebook_title: ko.observable(''),
        yoast_facebook_description: ko.observable(''),
        yoast_facebook_image: ko.observable(''),
        yoast_twitter_title: ko.observable(''),
        yoast_twitter_description: ko.observable(''),
        yoast_twitter_image: ko.observable(''),

        initFormData: function (formData) {
            form_data = formData;
            var keys = [
                'yoast_facebook_title',
                'yoast_facebook_description',
                'yoast_twitter_title',
                'yoast_twitter_description'
            ];
            $.each(keys, function (ignore, key) {
                if (formData.hasOwnProperty(key)) {
                    this[key](formData[key]);
                }
            }.bind(this));
        },

        getTitle: function () {
            if (this.meta_title()) {
                return this.meta_title();
            } else if (this.title()) {
                return this.title();
            }

            return '';
        },

        get base_url() {
            var baseUrl = yoastBoxConfig.baseUrl,
                urlPath = '';

            if (form_data && form_data.hasOwnProperty('url_path')) {
                urlPath = form_data.url_path.split('/').slice(0, -1).join('/') + '/'
            }

            return baseUrl + urlPath;
        },
    };
});
