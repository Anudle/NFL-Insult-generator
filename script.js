$(document).ready(function() {

  // $("#teamsSelect").on(function() {
  //         var selection = $('#teamsSelect').val();
  //           console.log(selection)   })
  $('#teams').change(function(event) {
                event.preventDefault();

                var selection = $('#teamsSelect').val();
                console.log(selection)

                $.ajax({
                    url: 'https://www.reddit.com/r/nfl/comments/'+ selection + '.json' ,

                    error: function(err) {
                        console.error(err)
                    },
                    method: 'GET',
                    success: function(data) {


                            function insult() {

                                var comments = data[1].data.children
                                var randomNum = Math.floor(Math.floor(Math.random() * 30))
                                for (i = randomNum; i < comments.length; i++)
                                    if (comments[i].data.score > 200) {
                                        console.log(i)
                                        console.log(comments[i].data.body)
                                        console.log(comments[i].data.score);
                                        $("#comment").html(comments[i].data.body)
                                        $('#author').html("said by " + comments[i].data.author + ", a " + comments[i].data.author_flair_text + " fan")
                                        break
                                    }
                            }

                            $('#button').click(function() {
                                insult()
                            })




                        } //closes success function
                }) // closes ajax function
              })
    }) //closes ready function
