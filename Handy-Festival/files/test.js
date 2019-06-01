let admin_username = " ";
let user_username = " ";

$(document).ready(function(){
    
    $.ajax({
            type: "GET",
            url: "/load",
            dataType: "json"
        }).done (function (data) {
        
        data = JSON.stringify(data);
        
        data = data.replace(new RegExp("\"","gm"),"");
        
        if(data[0] === "A"){       
            admin_username = data.substring(1, data.length);
            
        } else if (data[0] === "U"){
            user_username = data.substring(1, data.length);
            
            $("#welcome_user").empty();
            $("#welcome_user").append("Welcome " + user_username); 
        } else {
            admin_username = " ";
            user_username = " ";
        }
    });
});

//User clicks on "Rock" button
$(document).ready(function(){
    $(".rock").click(function(){
        $.ajax({
            type: "GET",
            url: "/rock",
            dataType: "json"
        }).done (function (data) {

            $(".main_container").fadeOut(800, function() { //Hide main menu
                $(".events_container").empty();
                $(".events_container").show(); //Show results list

                var back = "<div class=back>Back</div>"; //Back button to return to previous page

                $(".events_container").append(back);

                for(i=0; i<data.length; i++){

                    var timeAndDate = data[i].when; //Time of event
                    var place = data[i].where; //Location of event
                    var name = data[i].name; //Name of event
                    var youtubeUrl = data[i].youtubeUrl; //YouTube URL
                    var type = data[i].type; //event type
                    
                    
                    var when = "<span class=when>When:</span> <span class=text>" + timeAndDate + "</span><br>";
                    var where = "<span class=where>Where:</span> <span class=text>" + place + "</span><br>";
                    var what = "<span class= what>What:</span> <span class=text>" + name + "</span><br>";
                    
                    var moreInfo = "<div class=moreInfo>More Information</div>";
                    var playArtist = "";
                    
                    if(youtubeUrl){
                        
                        var playArtist = "<div class=playArtist data-url='" + youtubeUrl + "'>Play Artist</div>";
                        
                        var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "' data-url= '" + youtubeUrl + "'>Add to Schedule</div>";
                    } else {
                    
                        var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "'>Add to Schedule</div>";
                    }

                    $(".addToSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".events_container").append(what, when, where, addToSchedule, moreInfo, playArtist);

                    $(".events_container").append("<br>");
                }

                if(i == data.length){
                    $(".addToSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".back").addClass("button");
                }
            });
        });
    });
});

//User clicks on "Jazz" button
$(document).ready(function(){
    $(".jazz").click(function(){
        $.ajax({
            type: "GET",
            url: "/jazz",
            dataType: "json"
        }).done (function (data) {

            $(".main_container").fadeOut(800, function() { //Hide main menu
                $(".events_container").empty();
                $(".events_container").show();

                var back = "<div class=back>Back</div>";

                $(".events_container").append(back);

                for(i=0; i<data.length; i++){

                    var timeAndDate = data[i].when; //Time of event
                    var place = data[i].where; //Location of event
                    var name = data[i].name; //Name of event
                    var youtubeUrl = data[i].youtubeUrl; //YouTube URL
                    var type = data[i].type; //event type
                    
                    var when = "<span class=when>When:</span> <span class=text>" + timeAndDate + "</span><br>";
                    var where = "<span class=where>Where:</span> <span class=text>" + place + "</span><br>";
                    var what = "<span class= what>What:</span> <span class=text>" + name + "</span><br>";
                    
                    var moreInfo = "<div class=moreInfo>More Information</div>";
                    var playArtist = "";
                                        
                    if(youtubeUrl){
                        
                        
                        
                        var playArtist = "<div class=playArtist data-url='" + youtubeUrl + "'>Play Artist</div>";
                        
                        var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "' data-url= '" + youtubeUrl + "'>Add to Schedule</div>";
                    } else {
                    
                        var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "'>Add to Schedule</div>";
                    }

                    $(".addToSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".events_container").append(what, when, where, addToSchedule, moreInfo, playArtist);

                    $(".events_container").append("<br>");
                }

                if(i == data.length){
                    $(".addToSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".back").addClass("button");
                }
                
            });
        });
    });
});

//User clicks on "Blues" button
$(document).ready(function(){
    $(".blues").click(function(){
        $.ajax({
            type: "GET",
            url: "/blues",
            dataType: "json"
        }).done (function (data) {

            $(".main_container").fadeOut(800, function() {
                $(".events_container").empty();
                $(".events_container").show();

                var back = "<div class=back>Back</div>";

                $(".events_container").append(back);

                for(i=0; i<data.length; i++){

                    var timeAndDate = data[i].when; //Time of event
                    var place = data[i].where; //Location of event
                    var name = data[i].name; //Name of event
                    var youtubeUrl = data[i].youtubeUrl; //YouTube URL
                    var type = data[i].type; //event type
                    
                    var when = "<span class=when>When:</span> <span class=text>" + timeAndDate + "</span><br>";
                    var where = "<span class=where>Where:</span> <span class=text>" + place + "</span><br>";
                    var what = "<span class= what>What:</span> <span class=text>" + name + "</span><br>";
                    
                    var moreInfo = "<div class=moreInfo>More Information</div>";
                    var playArtist = "";
                                        
                    if(youtubeUrl){
                        
                        
                        
                        var playArtist = "<div class=playArtist data-url='" + youtubeUrl + "'>Play Artist</div>";
                        
                        var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "' data-url= '" + youtubeUrl + "'>Add to Schedule</div>";
                    } else {
                    
                        var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "'>Add to Schedule</div>";
                    }

                    $(".addToSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".events_container").append(what, when, where, addToSchedule, moreInfo, playArtist);

                    $(".events_container").append("<br>");
                }

                if(i == data.length){
                    $(".addToSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".back").addClass("button");
                }
            });
        });
    });
});

//User clicks on "Food" button
$(document).ready(function(){
    $(".food").click(function(){
        $.ajax({
            type: "GET",
            url: "/food",
            dataType: "json"
        }).done (function (data) {

            $(".main_container").fadeOut(800, function() {
                $(".events_container").empty();
                $(".events_container").show();

                var back = "<div class=back>Back</div>";

                $(".events_container").append(back);

                for(i=0; i<data.length; i++){

                    var timeAndDate = data[i].when; //Time of event
                    var place = data[i].where; //Location of event
                    var name = data[i].name; //Name of event
                    var youtubeUrl = data[i].youtubeUrl; //YouTube URL
                    var type = data[i].type; //event type
                    
                    var when = "<span class=when>When:</span> <span class=text>" + timeAndDate + "</span><br>";
                    var where = "<span class=where>Where:</span> <span class=text>" + place + "</span><br>";
                    var what = "<span class= what>What:</span> <span class=text>" + name + "</span><br>";
                    
                    var moreInfo = "<div class=moreInfo>More Information</div>";
                    var playArtist = "";
                                        
                    if(youtubeUrl){          
                        
                        var playArtist = "<div class=playArtist data-url='" + youtubeUrl + "'>Play Artist</div>";
                        
                        var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "' data-url= '" + youtubeUrl + "'>Add to Schedule</div>";
                    } else {
                    
                        var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "'>Add to Schedule</div>";
                    }

                    $(".addToSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".events_container").append(what, when, where, addToSchedule, moreInfo, playArtist);

                    $(".events_container").append("<br>");
                }

                if(i == data.length){
                    $(".addToSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".back").addClass("button");
                }
            });
        });
    });
});

//User clicks on "Art Festivities" button
$(document).ready(function(){
    $(".art_festivities").click(function(){
        $.ajax({
            type: "GET",
            url: "/art_festivities",
            dataType: "json"
        }).done (function (data) {

            $(".main_container").fadeOut(800, function() {
                $(".events_container").empty();
                $(".events_container").show();

                var back = "<div class=back>Back</div>";

                $(".events_container").append(back);

                for(i=0; i<data.length; i++){

                    var timeAndDate = data[i].when; //Time of event
                    var place = data[i].where; //Location of event
                    var name = data[i].name; //Name of event
                    var youtubeUrl = data[i].youtubeUrl; //YouTube URL
                    var type = data[i].type; //event type
                    
                    var when = "<span class=when>When:</span> <span class=text>" + timeAndDate + "</span><br>";
                    var where = "<span class=where>Where:</span> <span class=text>" + place + "</span><br>";
                    var what = "<span class= what>What:</span> <span class=text>" + name + "</span><br>";
                    
                    var moreInfo = "<div class=moreInfo>More Information</div>";
                    var playArtist = "";
                                        
                    if(youtubeUrl){
                        
                        
                        
                        var playArtist = "<div class=playArtist data-url='" + youtubeUrl + "'>Play Artist</div>";
                        
                        var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "' data-url= '" + youtubeUrl + "'>Add to Schedule</div>";
                    } else {
                    
                        var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "'>Add to Schedule</div>";
                    }

                    $(".addToSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".events_container").append(what, when, where, addToSchedule, moreInfo, playArtist);

                    $(".events_container").append("<br>");
                }

                if(i == data.length){
                    $(".addToSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".back").addClass("button");
                }
            });
        });
    });
});

//User clicks on "Misc" button
$(document).ready(function(){
    $(".misc").click(function(){
        $.ajax({
            type: "GET",
            url: "/misc",
            dataType: "json"
        }).done (function (data) {

            $(".main_container").fadeOut(800, function() {
                $(".events_container").empty();
                $(".events_container").show();

                var back = "<div class=back>Back</div>";

                $(".events_container").append(back);

                for(i=0; i<data.length; i++){

                    var timeAndDate = data[i].when; //Time of event
                    var place = data[i].where; //Location of event
                    var name = data[i].name; //Name of event
                    var youtubeUrl = data[i].youtubeUrl; //YouTube URL
                    var type = data[i].type; //event type
                    
                    var when = "<span class=when>When:</span> <span class=text>" + timeAndDate + "</span><br>";
                    var where = "<span class=where>Where:</span> <span class=text>" + place + "</span><br>";
                    var what = "<span class= what>What:</span> <span class=text>" + name + "</span><br>";
                    
                    var moreInfo = "<div class=moreInfo>More Information</div>";
                    var playArtist = "";
                                        
                    if(youtubeUrl){
                        
                        
                        
                        var playArtist = "<div class=playArtist data-url='" + youtubeUrl + "'>Play Artist</div>";
                        
                        var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "' data-url= '" + youtubeUrl + "'>Add to Schedule</div>";
                    } else {
                    
                        var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "'>Add to Schedule</div>";
                    }

                    $(".addToSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".events_container").append(what, when, where, addToSchedule, moreInfo, playArtist);

                    $(".events_container").append("<br>");
                }

                if(i == data.length){
                    $(".addToSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".back").addClass("button");
                }
            });
        });
    });
});

//User clicks on "All Events" button
$(document).ready(function(){
    $(".all_events").click(function(){
        $.ajax({
            type: "GET",
            url: "/all_events",
            dataType: "json"
        }).done (function (data) {
            
            $(".main_container").fadeOut(800, function() {
                $(".events_container").empty();
                $(".events_container").show();

                var back = "<div class=back>Back</div>";

                $(".events_container").append(back);

                for(i=0; i<data.length; i++){

                    var timeAndDate = data[i].when; //Time of event
                    var place = data[i].where; //Location of event
                    var name = data[i].name; //Name of event
                    var youtubeUrl = data[i].youtubeUrl; //YouTube URL
                    var type = data[i].type; //event type
                    
                    var when = "<span class=when>When:</span> <span class=text>" + timeAndDate + "</span><br>";
                    var where = "<span class=where>Where:</span> <span class=text>" + place + "</span><br>";
                    var what = "<span class= what>What:</span> <span class=text>" + name + "</span><br>";
                    
                    var moreInfo = "<div class=moreInfo>More Information</div>";
                    var playArtist = "";
                    
                    if(youtubeUrl){
                        
                        
                        
                        var playArtist = "<div class=playArtist data-url='" + youtubeUrl + "'>Play Artist</div>";
                        
                        var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "' data-url= '" + youtubeUrl + "'>Add to Schedule</div>";
                    } else {
                    
                        var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "'>Add to Schedule</div>";
                    }

                    $(".addToSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".events_container").append(what, when, where, addToSchedule, moreInfo, playArtist);

                    $(".events_container").append("<br>");
                }

                if(i == data.length){
                    $(".addToSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".back").addClass("button");
                }
            });
        });
    });
});

// Click on "view schedule"
$(document).ready(function(){
    $(".view_schedule").click(function(){
        
        if(admin_username !== " "){
            $("#welcome_user").empty();
            
            $("#welcome_user").append("You must sign in as a user to have a schedule");
                
            return;
        }
        
        $.ajax({
            type: "GET",
            url: "/view_schedule",
            dataType: "json"
        }).done (function (data) {
            
            var str = JSON.stringify(data);
            
            str = str.substring(1, str.length - 1);
            
            if(str === "user did not sign in"){
                
                $("#welcome_user").empty();
                $("#welcome_user").append("You must sign in to see your schedule");
                
                return;
            }
            
            if(!(data[0].userEvents) || data[0].userEvents < 1){
                $(".main_container").fadeOut(800, function() {
                    $(".events_container").empty();
                    $(".events_container").show();

                    var back = "<div class=back>Back</div>";

                    $(".events_container").append(back);

                    $(".back").addClass("button");

                    $(".events_container").append("You do not have any events");
                });

                return;
            }

            
            $(".main_container").fadeOut(800, function() {
                $(".events_container").empty();
                $(".events_container").show();

                var back = "<div class=back>Back</div>";

                $(".events_container").append(back);
                

                for(i=0; i<data[0].userEvents.length; i++){
                    
                    let temp = data[0].userEvents[i];

                    var name = JSON.stringify(temp.eventName).replace(new RegExp("\"","gm"),""); //Name of event
                    var timeAndDate = JSON.stringify(temp.eventWhen).replace(new RegExp("\"","gm"),""); //Time of event
                    var place = JSON.stringify(temp.eventWhere).replace(new RegExp("\"","gm"),""); //Location of event
                    var youtubeUrl = JSON.stringify(temp.youtubeUrl).replace(new RegExp("\"","gm"),""); //YouTube URL
                    var type = JSON.stringify(temp.eventType).replace(new RegExp("\"","gm"),""); //event type

                    
                    var when = "<span class=when>When:</span> <span class=text>" + timeAndDate + "</span><br>";
                    var where = "<span class=where>Where:</span> <span class=text>" + place + "</span><br>";
                    var what = "<span class= what>What:</span> <span class=text>" + name + "</span><br>";
                    var eventType = "<span class= type>Type:</span> <span class=text>" + type + "</span><br>";
                    
                    var moreInfo = "<div class=moreInfo>More Information</div>";
                    var playArtist = "";
                    
                    if(youtubeUrl !== "undefined"){
                                
                        var playArtist = "<div class=playArtist data-url='" + youtubeUrl + "'>Play Artist</div>";
                        
                        var removeFromSchedule = "<div class=removeFromSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "' data-url= '" + youtubeUrl + "'>Remove from Schedule</div>";
                    } else {
                    
                        var removeFromSchedule = "<div class=removeFromSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "'>Remove from Schedule</div>";
                    }

                    $(".removeFromSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".events_container").append(what, when, where, eventType, moreInfo, removeFromSchedule, playArtist);

                    $(".events_container").append("<br>");
                }

                if(i == data[0].userEvents.length){
                    $(".removeFromSchedule").addClass("button big_button");
                    $(".moreInfo").addClass("button big_button");
                    $(".playArtist").addClass("button small_button");

                    $(".back").addClass("button");
                }
            });
        });
    });
});

//Button to go back to home page
$(document).on('click', '.back', function(){  
    
    $(".user_input").hide();
    $(".events_container").hide();
    $(".upload_file").hide();
    $("#read_file").hide();
    $("#logout").hide();
    $("#welcome_user").empty(); 
    $(".main_container").show();
});

//Search bar
$(document).ready(function(){
    $(".search").keyup(function(event){

        if (event.shiftKey) {
            return;
        }
        
        var searchstring = $('#searchfield');
    
        
        if(event.which === 13){
            
            var str = searchstring.val().split("TYPE");
            
            if(typeof str[0] === 'undefined' || typeof str[1] === 'undefined'){
                return;
            }
            
            str[0] = str[0].trim();
            str[1] = str[1].substring(1, str[1].length).trim();
            
            $.ajax({
                type: "GET",
                url: "/search/" + str[0] + "/" + str[1],
                dataType: "json"
            }).done (function (data) {
                
                if (data.length === 0){
                    return;
                }
                
                        $(".main_container").hide();
                        $(".events_container").empty();
                        $(".events_container").show();
                        
                        var back = "<div class=back>Back</div>";
                        
                        $(".events_container").append(back);
                
                        for(i=0; i<data.length; i++){
                            
                            var timeAndDate = data[i].when; //Time of event
                            var place = data[i].where; //Location of event
                            var name = data[i].name; //Name of event
                            var youtubeUrl = data[i].youtubeUrl; //YouTube URL
                            var type = data[i].type; //event type
                    
                            var when = "<span class=when>When:</span> <span class=text>" + timeAndDate + "</span><br>";
                            var where = "<span class=where>Where:</span> <span class=text>" + place + "</span><br>";
                            var what = "<span class= what>What:</span> <span class=text>" + name + "</span><br>";
                    
                            var moreInfo = "<div class=moreInfo>More Information</div>";
                            var playArtist = "";
                                                
                            if(youtubeUrl){
                                
                                

                                var playArtist = "<div class=playArtist data-url='" + youtubeUrl + "'>Play Artist</div>";

                                var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "' data-url= '" + youtubeUrl + "'>Add to Schedule</div>";
                            } else {
                    
                                var addToSchedule = "<div class=addToSchedule data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "'>Add to Schedule</div>";
                            }
                            
                            $(".addToSchedule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".events_container").append(when, where, what, addToSchedule, moreInfo, playArtist);

                            $(".events_container").append("<br>");
                        }
                        
                        if(i == data.length){
                            $(".addToSchedule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".back").addClass("button");
                        }
                    });
            
        } else {
            
            $.ajax({

                type: "GET",
                url: "/search",
                dataType: "json"
            }).done (function (data) {


                arr = [];

                for(i = 0; i<data.length; i++){

                    var temp = JSON.stringify(data[i].name);
                    temp = temp.substring(1, temp.length - 1);
                    var temp2 = JSON.stringify(data[i].type);
                    temp2 = temp2.substring(1, temp2.length - 1);

                    temp = temp + " TYPE: " + temp2;

                    if(arr.indexOf(temp) == -1){
                        arr.push(temp);
                    }
                }

                $( "#searchfield" ).autocomplete({
                    source: arr
                });
            });
        }
    });
});


//User clicks on "Admin" button from "Menu"
$(document).ready(function(){
    $("#admin").click(function(){
        
        $(".main_container").hide(); //Hide main menu
            
        $(".events_container").empty();
        $(".events_container").show();
        
        if(admin_username === " "){
            $("#admin_insert").hide();
            $("#admin_login").css("display", "flex");
        } else {
            
            $(".user_input").hide();
            
            $("#welcome_admin").empty();
            
            $("#logout").show();
            
            $("#welcome_admin").append("Welcome " + admin_username);
            
            $("#admin_options").css("display", "flex");
        }

        var back = "<div class=back>Back</div>"; //Back button to return to previous page

        $(".events_container").append(back);

        $(".back").addClass("button");
        
    });
});

$(document).on('click', '#admin_submit_button', function(){ 
    
    var patt = /^([1-zA-Z0-1@.$]{8,20})$/;
    
    if (!patt.test($("#admin_password").val())){
        
        $(".events_container").empty();
        $(".events_container").show();

        var back = "<div class=back>Back</div>";

        $(".events_container").append(back);

        $(".back").addClass("button");
        
        $(".events_container").append("passwords must be at least 8 characters, not more than 20, only numbers, letters, $, or @ ");
        
        return;
    }
    
    if(!$("#admin_username").val() || !$("#admin_password").val()){
        
        return;
    }
    
    $.ajax({
        type: "POST",
        url: "/admin/signin",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            username: $("#admin_username").val(),
            password: $("#admin_password").val()
        }), 
        
        complete: function(response) {
            //called when complete
            var str = JSON.stringify(response.responseText);
            
            str = str.substring(1, str.length - 1);
            
            if(str === "You are signed in as a user"){
                $(".events_container").empty();
                $(".events_container").show();

                var back = "<div class=back>Back</div>";
                
                $(".instructions").empty();

                $(".events_container").append(back);

                $(".back").addClass("button");
            
                $(".events_container").append("<div class=instructions>You are signed in as a user</div>");
                
                return;
            }
            
            else if (str === "true"){
                admin_username = $("#admin_username").val();
                
                $(".events_container").empty();
                $(".events_container").show();

                var back = "<div class=back>Back</div>";

                $(".events_container").append(back);

                $(".back").addClass("button");          
                
                $(".user_input").hide();

                $("#welcome_admin").empty();
                
                $(".instructions").empty();
                
                $("#logout").show();
            
                $("#welcome_admin").append("Welcome " + admin_username);
            
                $("#admin_options").css("display", "flex");            
            }
            
            else if ( str === "wrong password"){

                $(".instructions").empty();
                $(".back").after("<div class=instructions>Wrong password</div>");
            }
            
            else if ( str === "nothing found"){

                $(".instructions").empty();
                $(".back").after("<div class=instructions>Username does not exist</div>"); 
            }
            
            else if ( str === "Passwords are not from the allowed chars"){

                $(".instructions").empty();
                $(".back").after("<div class=instructions>Passwords must be at least 8 characters, not more than 20, only numbers, letters, $, or @ </div>");
            }
        },
    });
});

$(document).on('click', '#insert_option', function(){
    $(".user_input").hide();
    
    $("#admin_insert").css("display", "flex");
});


$(document).on('click', '#upload_option', function(){
    $(".user_input").hide();
    
    $(".upload_file").css("display", "flex");
});


$(document).on('click', '#delete_option', function(){
    
    $(".user_input").hide();
    
    $("#admin_delete").css("display", "flex");
    
    $.ajax({
        type: "GET",
        url: "/admin/delete_page",
        dataType: "json"
    }).done (function (data) {

        $(".main_container").fadeOut(800, function() {
            $(".events_container").empty();
            $(".events_container").show();

            var back = "<div class=back>Back</div>";

            $(".events_container").append(back);

            for(i=0; i<data.length; i++){

                var timeAndDate = data[i].when; //Time of event
                var place = data[i].where; //Location of event
                var name = data[i].name; //Name of event
                var youtubeUrl = data[i].youtubeUrl; //YouTube URL
                var type = data[i].type; //event type

                var when = "<span class=when>When:</span> <span class=text>" + timeAndDate + "</span><br>";
                var where = "<span class=where>Where:</span> <span class=text>" + place + "</span><br>";
                var what = "<span class= what>What:</span> <span class=text>" + name + "</span><br>";

                var moreInfo = "<div class=moreInfo>More Information</div>";
                var playArtist = "";

                if(youtubeUrl){

                    

                    var playArtist = "<div class=playArtist data-url='" + youtubeUrl + "'>Play Artist</div>";

                    var deleteEvent = "<div class=deleteEvent data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "' data-url= '" + youtubeUrl + "'>Delete Event</div>";
                } else {

                    var deleteEvent = "<div class=deleteEvent data-name= '" + name + "' data-time= '" + timeAndDate + "' data-place= '" + place + "' data-type= '" + type + "'>Delete Event</div>";
                }

                $(".deleteEvent").addClass("button big_button");
                $(".moreInfo").addClass("button big_button");
                $(".playArtist").addClass("button small_button");

                $(".events_container").append(what, when, where, deleteEvent, moreInfo, playArtist);

                $(".events_container").append("<br>");
            }

            if(i == data.length){
                $(".deleteEvent").addClass("button big_button");
                $(".moreInfo").addClass("button big_button");
                $(".playArtist").addClass("button small_button");

                $(".back").addClass("button");
            }
        });
    });
});


$(document).on('click', '#insert_submit_button', function(){  
    
    if(!$("#event_name").val() || !$("#event_type").val() || !$("#event_when").val() || !$("#event_where").val()){
        
        $(".events_container").empty();
        $(".events_container").show();

        var back = "<div class=back>Back</div>";

        $(".events_container").append(back);

        $(".back").addClass("button");
        
        $(".events_container").append("<div id=notfiy>Fields cannot be empty (except the youtube link field)</div>");
        
        return;
    }
    
    $.ajax({
        type: "POST",
        url: "/admin/insert",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            event_name: $("#event_name").val(),
            event_type: $("#event_type").val(),
            event_when: $("#event_when").val(),
            event_where: $("#event_where").val(),
            event_url: $("#event_url").val()
    }), 
        
        complete: function(response) {
            //called when complete
            var str = JSON.stringify(response.responseText);
            
            str = str.substring(1, str.length - 1);
            
            if (str === "true"){
                admin_username = $("#admin_username").val();
                
                $("#admin_login").hide();            
                $("#admin_insert").css("display", "flex");

                $("#welcome_admin").empty();

                $("#welcome_admin").append("Welcome " + admin_username);
                
                $("#welcome_admin").after("<span class=notification>The event was inserted successfully</span>")
            } else if (str === "user did not sign in"){
                
                $("#admin_login").hide();            
                $("#admin_insert").hide();
                $("#welcome_admin").empty();

                $(".user_input").hide();
                $(".events_container").hide();
                $(".main_container").show();
            }
        },
    });
});

//User clicks on "Users" button from "Menu"
$(document).ready(function(){
    $("#users").click(function(){
        
        $(".main_container").hide(); //Hide main menu
            
        $(".events_container").empty();
        $(".events_container").show();
        
        var back = "<div class=back>Back</div>"; //Back button to return to previous page

        $(".events_container").append(back);

        $(".back").addClass("button");
        
        if(user_username === " "){
            $("#users_option").css("display", "flex");
        } else {
            $(".events_container").append("<div class=instructions>You are signed in</div>")
            $("#logout").show();
        }
    });
});

// click on the login option
$(document).on('click', '#login_option', function(){
    $(".user_input").hide();
    
    $("#user_login").css("display", "flex");
});

// click on the signup option
$(document).on('click', '#signup_option', function(){
    $(".user_input").hide();
    
    $("#user_signup").css("display", "flex");
});

// submit the request to sign up
$(document).on('click', '#signup_submit_button', function(){ 
    
    var patt = /^([1-zA-Z0-1@.$]{8,20})$/;
    
    if (!patt.test($("#user_signup_password").val()) || !patt.test($("#user_repeat_password").val())){
        
        $(".events_container").empty();
        $(".events_container").show();

        var back = "<div class=back>Back</div>";

        $(".events_container").append(back);

        $(".back").addClass("button");
        
        $(".events_container").append("passwords must be at least 8 characters, not more than 20, only numbers, letters, $, or @ ");
        
        return;
    }
    
    if((!$("#user_signup_username").val() || !$("#user_signup_password").val() || !$("#user_repeat_password").val())){
        
        $(".events_container").empty();
        $(".events_container").show();

        var back = "<div class=back>Back</div>";

        $(".events_container").append(back);

        $(".back").addClass("button");
        
        $(".events_container").append("Fields cannot be empty");
        
        return;
    }
    
    if (($("#user_signup_password").val()) !== ($("#user_repeat_password").val())){
        
        $(".events_container").empty();
        $(".events_container").show();

        var back = "<div class=back>Back</div>";

        $(".events_container").append(back);

        $(".back").addClass("button");
        
        $(".events_container").append("<div id=notfiy>Passwords do not match</div>");
        
        return;
    }
    
    $.ajax({
        type: "POST",
        url: "/user/signup",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            username: $("#user_signup_username").val(),
            password: $("#user_signup_password").val(),
            repeat_password: $("#user_repeat_password").val()
        }), 
        
        complete: function(response) {
            //called when complete
            var str = JSON.stringify(response.responseText);
            
            str = str.substring(1, str.length - 1);
            
            if(str === "false"){
                $(".events_container").empty();
                $(".events_container").show();

                var back = "<div class=back>Back</div>";

                $(".events_container").append(back);

                $(".back").addClass("button");

                $(".events_container").append("Username already exists");

                return;
            }
            
            if(str === "You are signed in as an admin"){
                $(".events_container").empty();
                $(".events_container").show();

                var back = "<div class=back>Back</div>";

                $(".events_container").append(back);

                $(".back").addClass("button");

                $(".events_container").append("You are signed in as an admin");

                return;
            }
            
            if (str === "true"){
                
                $(".back").trigger( "click" );

                $("#welcome_user").empty();  
                $("#welcome_user").append("Welcome, sign in to use your account");
            }
        },
    });
});


$(document).on('click', '#user_submit_button', function(){  
    
    var patt = /^([1-zA-Z0-1@.$]{8,20})$/;
    
    if (!patt.test($("#user_password").val())){
        
        $(".events_container").empty();
        $(".events_container").show();

        var back = "<div class=back>Back</div>";

        $(".events_container").append(back);

        $(".back").addClass("button");
        
        $(".events_container").append("passwords must be at least 8 characters, not more than 20, only numbers, letters, $, or @ ");
        
        return;
    }
    
    if(!$("#user_username").val() || !$("#user_password").val()){
        
        return;
    }
    
    $.ajax({
        type: "POST",
        url: "/user/signin",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            username: $("#user_username").val(),
            password: $("#user_password").val()
        }), 
        
        complete: function(response) {
            //called when complete
            var str = JSON.stringify(response.responseText);
            
            str = str.substring(1, str.length - 1);
            
            if(str === "You are signed in as an admin"){
                $(".events_container").empty();
                $(".events_container").show();

                var back = "<div class=back>Back</div>";

                $(".events_container").append(back);

                $(".back").addClass("button");

                $(".events_container").append("You are signed in as an admin");

                return;
            }
            
            else if (str === "true"){
                user_username = $("#user_username").val();
                
                $( ".back" ).trigger( "click" );

                $("#welcome_user").empty();
                $("#welcome_user").append("Welcome " + user_username);              
            }
            
            else if ( str === "wrong password"){

                $(".instructions").empty();
                $(".back").after("<div class=instructions>Wrong password</div>") 
            }
            
            else if ( str === "nothing found"){

                $(".instructions").empty();
                $(".back").after("<div class=instructions>Username does not exist</div>") 
            }
            
            else if ( str === "Passwords are not from the allowed chars"){

                $(".instructions").empty();
                $(".back").after("<div class=instructions>Passwords must be at least 8 characters, not more than 20, only numbers, letters, $, or @ </div>") 
            }
        },
    });
});


// Clicked the "play artist" button
$(document).on('click', '.playArtist', function(event){  
    
    var source = $(event.target).data("url");
    
    $("#youtubeWindow").attr("src", source);
    
    $("#youtubeWindow").show();
    
    $( "#dialog" ).dialog({
        close: function( event, ui ) {},
        
        width: "650px",
        dialogClass: "no-close",
        buttons: [
            {
                text: "close",
                click: function() {
                    $( this ).dialog( "close" );
                }
            }
        ]
    });
});

$(document).on( "dialogclose", "#dialog", function( event, ui ) {
    
    $("#youtubeWindow").attr("src", "");
    $("#youtubeWindow").hide();
} );


// Clicked the "Add to Schedule" button
$(document).on('click', '.addToSchedule', function(event){  
      
    let event_what = $(event.target).data("name");
    let event_time = $(event.target).data("time");
    let event_place = $(event.target).data("place");
    let youtubeUrl = $(event.target).data("url");
    let type = $(event.target).data("type");
    
    $.ajax({
        type: "POST",
        url: "/user/add_to_schedule",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            event_name: event_what,
            event_when: event_time,
            event_where: event_place,
            youtube_url: youtubeUrl,
            event_type: type
        }), 
        
        complete: function(response) {
            //called when complete
            var str = JSON.stringify(response.responseText);
            
            str = str.substring(1, str.length - 1);
            
            if (str === "true"){
                $(event.target).html("Remove from Schedule");
            } else if (str === "event already exists"){
                
                $(".instructions").empty();
                $(".back").after("<div class=instructions>Event already exists</div>");
                
            } else {
                
                $(".instructions").empty();
                $(".back").after("<div class=instructions>Sign in to add events to your schedule</div>");
            }
        },
    });
});


// Clicked the "Remove from Schedule" button
$(document).on('click', '.removeFromSchedule', function(event){  
    
//    alert($(event.target).data("time"));
    
    let event_what = $(event.target).data("name");
    let event_time = $(event.target).data("time");
    let event_place = $(event.target).data("place");
    let youtubeUrl = $(event.target).data("url");
    let type = $(event.target).data("type");
    
    $.ajax({
        type: "POST",
        url: "/user/remove_from_schedule",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            event_name: event_what,
            event_when: event_time,
            event_where: event_place,
            youtube_url: youtubeUrl,
            event_type: type
        }), 
        
        complete: function(response) {
            //called when complete
            var str = JSON.stringify(response.responseText);
            
            str = str.substring(1, str.length - 1);
            
            if (str === "true"){
                $( ".view_schedule" ).trigger( "click" );
            } 
        },
    });
});


// Clicked the "Delete Event" button
$(document).on('click', '.deleteEvent', function(event){  
    
  
    let event_what = $(event.target).data("name");
    let event_time = $(event.target).data("time");
    let event_place = $(event.target).data("place");
    let youtubeUrl = $(event.target).data("url");
    let type = $(event.target).data("type");
    
    $.ajax({
        type: "POST",
        url: "/admin/delete_event",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            event_name: event_what,
            event_when: event_time,
            event_where: event_place,
            youtube_url: youtubeUrl,
            event_type: type
        }), 
        
        complete: function(response) {
            //called when complete

            $( "#delete_option" ).trigger( "click" );
        },
    });
});


// Clicked the "Upload" button
$(document).on('submit', '#uploadForm', function(event){  
    
    if(admin_username === " "){
        $(".events_container").empty();
        $(".events_container").show();

        var back = "<div class=back>Back</div>";

        $(".events_container").append(back);

        $(".back").addClass("button");

        $(".events_container").append("You must sign in as an admin");
        
        return;
    }

    event.preventDefault();
    
    var form = $(this);
    var formdata = false;
    if (window.FormData){
        formdata = new FormData(form[0]);
    }

    var formAction = form.attr('action');
    $.ajax({
        url         : '/upload',
        data        : formdata ? formdata : form.serialize(),
        cache       : false,
        contentType : false,
        processData : false,
        type        : 'POST',
        success     : function(data, textStatus, jqXHR){
            
            $(".events_container").empty();
            $(".events_container").show();

            var back = "<div class=back>Back</div>";

            $(".events_container").append(back);

            $(".back").addClass("button");

            $(".events_container").append("The file was uploaded successfully");
            
            $("#read_file").show();
        }
    });
});

// Clicked on read events button
$(document).on('click', '#read_file', function(){
    
    
    $.ajax({
        type: "GET",
        url: "/read",
        dataType: "json"
    }).done (function (data) {
        //called when complete

        if(data){
            $(".events_container").empty();
            $("#read_file").hide();
            $(".events_container").show();

            var back = "<div class=back>Back</div>";

            $(".events_container").append(back);

            $(".back").addClass("button");

            $(".events_container").append("<div class=instructions>Events were inserted successfully</div>");
        } else {
            
            $(".events_container").empty();
            $("#read_file").hide();
            $(".events_container").show();

            var back = "<div class=back>Back</div>";

            $(".events_container").append(back);

            $(".back").addClass("button");

            $(".events_container").append("<div class=instructions>Error: events were not inserted</div>")
            
            return;
        }
        
    });
});


$(document).on('click', '#logout', function(){ 
    
    if(admin_username === " " && user_username === " "){
    
        $( ".back" ).trigger( "click" );
        return;
    }
    
    $.ajax({
        type: "GET",
        url: "/logout",
        dataType: "json"
    }).done (function (data) {
        
        admin_username = " ";
        user_username = " ";
        
        $(".back").trigger( "click" );

        $("#welcome_user").empty();  
        $("#welcome_user").append("You signed out");
    });
});