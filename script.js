$(document).ready(function() {
var test1;

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
                      var comments = data[1].data.children

                            function insult() {


                                var randomNum = Math.floor(Math.floor(Math.random() * 30))
                                for (i = randomNum; i < comments.length; i++)

                                    if (comments[i].data.score > 200) { //SCORE OF 200 UPVOTES
                                        //console.log(i)
                                        console.log(comments[i].data.body)
                                        //console.log(comments[i].data.score);

                                        var varPicTest = (comments[i].data.body.slice(0,4))
                                        console.log(varPicTest)

                                        if (varPicTest == "http:" || "https"){

                                        $('#pic').append("<img src= 'comments[i].data.body' >")

                                        }else{

                                        $("#comment").html(comments[i].data.body)
                                        $('#author').html("said by " + comments[i].data.author + ", a " + comments[i].data.author_flair_text + " fan")
                                        $('#pic').append("<img src='comments[i].data.body")
                                        break
                                      }
                                    }

                                    // if (comments[i].data.body == 'http:'){$('#pic').append("<img src='comments[i].data.body")
                                    //  }

                                  }



                            $('#button').click(function() {
                                insult()
                            })



                        } //closes success function
                }) // closes ajax function
              })
    }) //closes ready function
