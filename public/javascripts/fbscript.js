window.fbAsyncInit = function() {
  FB.init({
    appId            : '951522621671889',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.12'
  });

  FB.ui({
   method: 'share_open_graph',
   action_type: 'og.likes',
   action_properties: JSON.stringify({
     object:'https://developers.facebook.com/docs/',
   })
 }, function(response){
   // Debug response (optional)
   console.log(response);
 });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
