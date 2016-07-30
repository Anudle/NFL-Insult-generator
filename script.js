$(document).ready(function() {
    $.ajax({
        url: 'https://www.reddit.com/r/nfl/comments/4v2dqe/rnfl_roast_of_the_denver_broncos_2532.json',
        error: function(err) {
            console.error(err)
        },
        method: 'GET',
        success: function(data) {
            var comments = data[1].data.children
            var randomNum = Math.floor(Math.floor(Math.random() * 30))

               console.log(comments[23].data)
              // console.log(comments[18].data)
              // console.log(comments[14].data)

            function insult() {
                for (i = randomNum; i < comments.length; i++)
                    if(comments[i].data.score > 200) {
                        console.log(i)
                        console.log(comments[i].data.body)
                        console.log(comments[i].data.score);
                        console.log("said by " + comments[i].data.author + " a " + comments[i].data.author_flair_text + " fan");
                        break
                     } 
                    // else {
                    //     console.log("it broke")
                    // }
            }

            insult();

        }


    })
})
