$(function(){
    //call this for the first time
    FB.getFbPost();
    
    //after a break of 60seconds
    //call the same methods every 30 seconds
    setTimeout(fetchPost,20000);
    
   function fetchPost(){
      setInterval(FB.getFbPost,10000); 
   }
    
});

//create fb class
var $baseUrl = "https://graph.facebook.com/search?type=post&limit=100&q=";
var queryUrl;

var FB = {
    
    getFbPost:function(){
        keyword = $("#keyword").val();
        url = $baseUrl+keyword;
        
        if(typeof queryUrl == 'undefined'){
            queryUrl = url;
        }
        
        $.getJSON(queryUrl, function(data) {
            
            obj = data.data;
            if (data.paging){
                paging = data.paging;
                
                //set the queryurl to the previous of the result;
                queryUrl = paging.previous;            
            }   
            
            html = '';
            
            Object.keys(obj).forEach(function(key){
                
                likes = 0;
                if (typeof obj[key].likes !== 'undefined'){
                    likes = obj[    key].likes.count;
                }
                    
                html += '<div class="post" id="'+obj[key].id+'" data-time="'+obj[key].created_time+'">'+
                        '<img src="https://graph.facebook.com/'+obj[key].from.id+'/picture">'+
                        '<div class="postContent">'+
                              '<span class="name" id="'+obj[key].from.id+'">'+obj[key].from.name+'</span>'+
                              '<span class="message">'+obj[key].message+'</span>'+
                              '<div class="metadata">'+likes+' likes &middot; Posted at <abbr class="timeago" title="'+obj[key].created_time+'Z">'+obj[key].created_time+'</abbr></div>'+
                        '</div><div class="clearfloat"></div></div>';
            });
            
            //append the html here
            $('#postContainer').prepend( html );
            $("abbr.timeago").timeago();
            
        });    
    },
    
    

}

