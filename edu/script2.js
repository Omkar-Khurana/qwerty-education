$(document).ready(function(){
    
    var API_KEY = "AIzaSyCD0iEk6wAxWzdMVrv5XhDVQxk8jVJH0Dw"
    var video = ''
    $("form").submit(function (event) {
        event.preventDefault()
        
        var search = $("#search").val()

        videoSearch(API_KEY,search, 10)
    })

    function videoSearch(key,search,maxResults){

        $("#video").empty()

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults" + maxResults + "&q=" + search,function(data){
            console.log(data)

            data.items.forEach(item => {
                video = `
                  <iframe width="320" height="240" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                `

                $("#video").append(video)
            });
        })
    }
})