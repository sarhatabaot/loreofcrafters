$.extend({
    hook: function(hookName) {
        var selector;
        if(!hookName || hookName === '*') {
            // select all data-hooks
            selector = '[data-hook]';
        } else {
            // select specific data-hook
            selector = '[data-hook~="' + hookName + '"]';
        }
        return $(selector);
    }
});
$(document).ready(function() {
    setTimeout(
        function() 
        {
            var username=$('#enjin-bar span.element_username').text();
            var messages=$('#enjin-tray .messages .button_total').text();
            var notifications=$('#enjin-tray .notifications .button_total').text(); 
            var applications=$('#enjin-tray .applications .button_total').text(); 
            var points=$('.m_pointsdisplay .points-total').text();
            var adminstatus=$('#enjin-bar .left a[href$=\"/admin\"]').text();
            var enjinlikes=$('#enjin-bar #enjin-like-site .likes').text();
            //Username, guest, join, register and basic menu items
            if (username === ''){ 
                //What Guest sees
                $.hook('nav-username nav-link').prepend("Guest <b class=\"caret\"></b>");
                $.hook('nav-username nav-dropdown-menu').append("<li class=\"dropdown-item\"><a href=\"/login\" >Login</a></li>");
                $.hook('nav-username nav-dropdown-menu').append("<li class=\"dropdown-item\" data-hook=\"nav-register\"></li>");
                $.('#enjin-bar a[href$="/register"]').prependTo($.hook('nav-register'));
            }
            else{
                $.hook("nav-username nav-link").prepend(username+"<b class=\"caret\"></b>");
                $.hook("nav-username nav-dropdown-menu").append("<li class=\"dropdown-item\" data-hook=\"nav-join\"></li>");
                $.hook('#enjin-bar .right .join-site a').prependTo($.hook('nav-join'));
                $.hook("nav-username nav-dropdown-menu").append("<li class=\"dropdown-item\"><a href=\"/profile\" target=\"_blank\">Profile</a></li>");
                $.hook("nav-username nav-dropdown-menu").append("<li class=\"dropdown-item\"><a href=\"/dashboard/settings\" target=\"_blank\">Account Settings</a></li>");
                $.hook("nav-username nav-dropdown-menu").append("<li class=\"dropdown-item\"><a href=\"/dashboard/settings/website\" target=\"_blank\">Website Settings</a></li>");
                // Load messages
                $.hook("nav-username nav-dropdown-menu").append("<li class=\"dropdown-item\" data-hook=\"nav-messages\"></li>");
                $.hook("nav-username nav-dropdown-menu").append("<li class=\"dropdown-item\" data-hook=\"nav-applications\"></li>");
                $.hook("nav-username nav-dropdown-menu").append("<li class=\"dropdown-item\" data-hook=\"nav-dashboard\"></li>");
                $.hook("nav-messages").append("<a href=\"/dashboard/messages\"><span class=\"badge label label-default label-pill pull-xs-right\">"+ messages +" </span> Messages</a>");
                //Applications display
                $("nav-applications").append("<a href=\"/dashboard/applications\"><span class=\"badge label-default label-pill pull-xs-right\">"+ applications +" </span> Applications</a>");
                //Notification count on dashboard link display
                $("nav-dashboard").append("<a href=\"/dashboard\" target=\"_blank\"><span class=\"badge label-default label-pill pull-xs-right\">"+ notifications +" </span> Dashboard</a>");
                //Admin link display, admin only
                if (adminstatus === ''){
                    $("nav-username nav-dropdown-menu").append("<li class=\"dropdown-item\"><a href=\"/admin\">Admin</a></li>");
                }
                // Load like button
                if (username !== ''){ 
                    $("nav-username nav-dropdown-menu").append("<li class=\"dropdown-divider\"></li>");
                    $("nav-username nav-dropdown-menu").append("<li class=\"dropdown-header \">Enjin Popularity</li>");
                    $("nav-username nav-dropdown-menu").append($("#enjin-like-site"));
                    $("nav-username nav-dropdown-menu").append("<li class=\"dropdown-divider\"></li>");
                    $("nav-username nav-dropdown-menu").append("<li class=\"dropdown-header\">Account</li>");
                    $("nav-username nav-dropdown-menu").append("<li class=\"dropdown-item\"><a href=\"/logout\">Logout</a></li>");
                }
            }
           
            //Display username after scripts finish
            $.hook("nav-username").show();
        }, 1);
});
