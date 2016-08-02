$(document).ready(function() {

        $('#teams').change(function(event) {
            event.preventDefault();

            var selection = $('#teamsSelect').val();
            console.log(selection)

            $.ajax({
                    url: 'https://www.reddit.com/r/nfl/comments/' + selection + '.json',

                    error: function(err) {
                        console.error(err)
                    },
                    method: 'GET',
                    success: function(data) {

                            var comments = data[1].data.children

                            function insult() {
                                var randomNum = Math.floor(Math.floor(Math.random() * 30))
                                for (i = randomNum; i < comments.length; i++)

                                    if ((comments[i].data.score > 200)&&(comments[i].data.body.slice(0, 4) == "http")) { //SCORE
                                    // console.log(i)
                                     console.log(comments[i].data.body_html)
                                    // console.log(comments[i].data.score);
                                     console.log(comments[i].data.body.slice(0, 4))

                                    $('#comment').html("<iframe src=" + comments[i].data.body + " height=600px width=600px>")
                                    $('#author').html("said by " + comments[i].data.author + ", a " + comments[i].data.author_flair_text + " fan")

                                    break

                                } else if (comments[i].data.score > 200) {
                                    console.log(comments[i].data.body)
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
