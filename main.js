$(document).ready(function() {
        $.ajax({
                url: 'https://www.reddit.com/r/nfl/comments/4v2dqe/rnfl_roast_of_the_denver_broncos_2532.json',
                error: function(err) {
                    console.error(err)
                },
                method: 'GET',
                success: function(data) {
                  $('#teams select').change(function(){
   window.location.href='index.html';
})

                } //closes success function
            }) // closes ajax function
    }) //closes ready function
