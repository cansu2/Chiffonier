// {/* <script type="text/javascript"> */}
// var db = require("../models");
    
    window.fbAsyncInit = function() {
    // FB JavaScript SDK configuration and setup
    FB.init({
      appId      : '343079826199185', // FB App ID
      cookie     : true,  // enable cookies to allow the server to access the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });
    
    // Check whether the user already logged in
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            //display user data
            getFbUserData();
        }
    });
};

// function that refrences db check if email exists
// else logs user in

// if user email isn't in db, push info to db

// Load the JavaScripat SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Facebook login with JavaScript SDK
function fbLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            // Get and display the user profile data
    
            // getFbUserData();
           grabData();
            // window.location.replace("./Theme/index.html");

        } else {
            document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
        }
    }, {scope: 'email'});

}

// Fetch the user profile data from facebook
function getFbUserData(){
    FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'},
    function (response) {
        console.log(response);
        // document.getElementById('fbLink').setAttribute("onclick","fbLogout()");
        // document.getElementById('fbLink').innerHTML = 'Logout from Facebook';
        // document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.first_name + '!';
        // document.getElementById('userData').innerHTML = '<p><b>FB ID:</b> '+response.id+'</p><p><b>Name:</b> '+response.first_name+' '+response.last_name+'</p><p><b>Email:</b> '+response.email+'</p><p><b>Gender:</b> '+response.gender+'</p><p><b>Locale:</b> '+response.locale+'</p><p><b>Picture:</b> <img src="'+response.picture.data.url+'"/></p><p><b>FB Profile:</b> <a target="_blank" href="'+response.link+'">click to view profile</a></p>';
        document.getElementById('userData').innerHTML = '<img class="img-circle" width="90" src="'+response.picture.data.url+'"/>';
        document.getElementById('userName').innerHTML = response.first_name+' '+response.last_name
    });
}
 
// Logout from facebook
function fbLogout() {
    FB.logout(function() {
        document.getElementById('fbLink2').setAttribute("onclick","fbLogin()");
        document.getElementById('fbLink2').innerHTML = '<img src="fblogin.png"/>';
        document.getElementById('userData').innerHTML = '';
        // document.getElementById('fbLink').innerHTML = 'Log With Facebook';
        // document.getElementById('status').innerHTML = 'You have successfully logout from Facebook.';
        
    });
}

// function saveUserData(userData){
//     $.post('put your config file', {oauth_provider:'facebook',userData: JSON.stringify(userData)}, function(data){ return true; });
// }
// if user email is new
// function findUser() {
//     FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'},
//     function (response) {
//         Info.findOrCreate({
//             where: {
//                 userEmail: response.email
//             },
//             defaults: {
//                 userEmail: response.email
//             }
//         }).error(function(err){
//             console.log('error');

//         }).then(function(){
//             grabData();
//         })
//     });
// }

function grabData(){
    FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'},
    function (response) {
         var newUser = {
             userName: response.first_name +" " + response.last_name,
             userEmail: response.email,
             gender: response.gender,
             userPic: response.picture.data.url
         };
         //ajax
        $.post("/api/newUser", newUser)
        .done(function(arg){
            console.log(arg);
            alert("Welcome Back")
            window.location.replace("./Theme/index.html");
        });
    });
}

// </script>