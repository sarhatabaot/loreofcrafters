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
                $("#boot_username a").prepend("Guest <b class=\"caret\"></b>");
                $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-item\"><a href=\"/login\" >Login</a></li>");
                $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-item\" id=\"boot_register\"></li>");
                $('#enjin-bar a[href$="/register"]').prependTo($('#boot_register'));
            }
            else{
                $("#boot_username >a").prepend(username+"<b class=\"caret\"></b>");
                $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-item\" id=\"boot_join\"></li>");
                $('#enjin-bar .right .join-site a').prependTo($('#boot_join'));
                $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-item\"><a href=\"/profile\" target=\"_blank\">Profile</a></li>");
                $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-item\"><a href=\"/dashboard/settings\" target=\"_blank\">Account Settings</a></li>");
                $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-item\"><a href=\"/dashboard/settings/website\" target=\"_blank\">Website Settings</a></li>");
                // Load messages
                $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-item\" id=\"boot_messages\"></li>");
                $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-item\" id=\"boot_applications\"></li>");
                $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-item\" id=\"boot_dashboard\"></li>");
                $("#boot_messages").append("<a href=\"/dashboard/messages\"><span class=\"badge label label-default label-pill pull-xs-right\">"+ messages +" </span> Messages</a>");
                //Applications display
                $("#boot_applications").append("<a href=\"/dashboard/applications\"><span class=\"badge label-default label-pill pull-xs-right\">"+ applications +" </span> Applications</a>");
                //Notification count on dashboard link display
                $("#boot_dashboard").append("<a href=\"/dashboard\" target=\"_blank\"><span class=\"badge label-default label-pill pull-xs-right\">"+ notifications +" </span> Dashboard</a>");
                //Admin link display, admin only
                if (adminstatus === ''){
                    $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-item\"><a href=\"/admin\">Admin</a></li>");
                }
                // Load like button
                if (username !== ''){ 
                    $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-divider\"></li>");
                    $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-header \">Enjin Popularity</li>");
                    $("#boot_username >.dropdown-menu").append($("#enjin-like-site"));
                    $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-divider\"></li>");
                    $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-header\">Account</li>");
                    $("#boot_username >.dropdown-menu").append("<li class=\"dropdown-item\"><a href=\"/logout\">Logout</a></li>");
                }
            }
           
            //Display username after scripts finish
            $( "#boot_username" ).show();
        }, 1);
});
