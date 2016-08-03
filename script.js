$(document).ready(function() {


        $('#teams').change(function(event) {
            event.preventDefault();

            var selection = $('#teamsSelect').val();

            $.ajax({
                    url: 'https://www.reddit.com/r/nfl/comments/' + selection + '.json',

                    error: function(err) {
                        console.error(err)
                    },
                    method: 'GET',

                    success: function(data) {
                            // var decoder = $('<div />')
                            var comments = data[1].data.children
                            // var decodedText = ''
                            function insult() {
                                //$('#comment').html('')
                                var randomNum = Math.floor(Math.floor(Math.random() * 30))
                                for (i = randomNum; i < comments.length; i++)

                                    if ((comments[i].data.score > 200) && (comments[i].data.body.slice(0, 4) == "http")) { //SCORE
                                    $('#comment').html('')
                                    console.log(comments[i].data.body_html)
                                    console.log(comments[i].data.body.slice(0, 4))
                                    $('#comment').html("<iframe src=" + comments[i].data.body + " height=600px width=600px>")
                                    $('#author').html("said by " + comments[i].data.author + ", a " + comments[i].data.author_flair_text + " fan")

                                    break

                                } else if (comments[i].data.score > 200) {
                                    console.log(i)
                                    console.log(comments[i].data.body)
                                    console.log(comments[i].data.body_html)
                                    console.log(comments[i].data.author)
                                    $('#comment').html('')
                                    var encoded = (comments[i].data.body_html)
                                    var decode = $('<div />').html(encoded).text()

                                    //decoder.html(comments[i].data.body_html)
                                    // decoder.html(comments[i].data.body_html)
                                    // decodedText += decoder.text()

                                    $('#comment').append(decode)
                                        //$("#comment").html((comments[i].data.body_html))
                                    $('#author').html("said by " + comments[i].data.author + ", a " + comments[i].data.author_flair_text + " fan")

                                    break

                                }

                            }

                            // $('#button').click(function(){
                            //   $('#comment').replaceWith(function(){
                            //     insult()
                            //   })
                            // })

                            $('.btn').click(function() {
                                insult()
                            })



                        } //closes success function
                }) // closes ajax function
        })
    }) //closes ready function
