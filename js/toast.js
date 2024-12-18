// Compiled from: toast.ts
// https://github.com/srackham/toast.js
//
// Toast popup notifier
//
// By: Stuart Rackham
// https://github.com/srackham/toast.js
//
// Inspired by: https://github.com/Srirangan/notifer.js
//              https://github.com/CodeSeven/toastr
//
/// <reference path="jquery.d.ts" />
var Toast;
(function (Toast) {
    ;

    // Modifiable defaults.
    Toast.defaults = {
        width: '',
		displayDuration: 3000,
        fadeOutDuration: 900,
        /*displayDuration: 300000000,
        fadeOutDuration: 800000000,*/
    };

    /* Popup functions */
    /**
    * Popup informational message.
    * @param message A message string.
    * @param title An optional title string.
    * @param options An optional map of {@link Options}.
    */
    function info(message, title, options) {
        _toast('info', '<i class="fa fa-info-circle" style="margin-right:10px;"></i> '+message, title, options);
    }
    Toast.info = info;

    /**
    * Popup warning message.
    * @param message A message string.
    * @param title An optional title string.
    * @param options An optional map of {@link Options}.
    */
    function warning(message, title, options) {
        _toast('warning', '<i class="fa fa-info" style="margin-right:10px;"></i> '+message, title, options);
    }
    Toast.warning = warning;

    /**
    * Popup error message.
    * @param message A message string.
    * @param title An optional title string.
    * @param options An optional map of {@link Options}.
    */
    function error(message, title, options) {
        _toast('error', '<i class="fa fa-exclamation-triangle" style="margin-right:10px;"></i> '+message, title, options);
    }
    Toast.error = error;

    /**
    * Popup success message.
    * @param message A message string.
    * @param title An optional title string.
    * @param options An optional map of {@link Options}.
    */
    function success(message, title, options) {
        _toast('success', '<i class="fa fa-check-circle" style="margin-right:10px;"></i> '+message, title, options);
    }
    Toast.success = success;

    /* Private variables and functions */
    var _container;

    function _toast(type, message, title, options) {
        if (typeof options === "undefined") { options = {}; }
        options = $.extend({}, Toast.defaults, options);
        if (!_container) {
            _container = $('#toast-container');
            if (_container.length === 0) {
                // Create container element if it is not in the static HTML.
                _container = $('<div>').attr('id', 'toast-container').appendTo($('body'));
            }
        }
        if (options.width) {
            _container.css({ width: options.width });
        }
        var toastElement = $('<div>').addClass('toast').addClass('toast-' + type);
        if (title) {
            var titleElement = $('<div>').addClass('toast-title').append(title);
            toastElement.append(titleElement);
        }
        if (message) {
            var messageElement = $('<div>').addClass('toast-message').append(message);
            toastElement.append(messageElement);
        }
        if (options.displayDuration > 0) {
            setTimeout(function () {
                toastElement.fadeOut(options.fadeOutDuration, function () {
                    toastElement.remove();
                });
            }, options.displayDuration);
        }
        toastElement.on('click', function () {
            toastElement.remove();
        });
        _container.prepend(toastElement);
    }
})(Toast || (Toast = {}));
this.Toast = Toast;
