var thing1;

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
                            var decoder = $('<div />')
                            var comments = data[1].data.children
                            var decodedText = ''

                            function insult() {
                                var randomNum = Math.floor(Math.floor(Math.random() * 30))
                                for (i = randomNum; i < comments.length; i++)

                                    if ((comments[i].data.score > 200) && (comments[i].data.body.slice(0, 4) == "http")) { //SCORE
                                    // console.log(i)
                                    console.log(comments[i].data.body_html)
                                        // console.log(comments[i].data.score);
                                    console.log(comments[i].data.body.slice(0, 4))

                                    $('#comment').html("<iframe src=" + comments[i].data.body + " height=600px width=600px>")
                                    $('#author').html("said by " + comments[i].data.author + ", a " + comments[i].data.author_flair_text + " fan")

                                    break

                                } else if (comments[i].data.score > 200) {
                                    thing1 = comments[i].data.body_html
                                    console.log(comments[i].data.body.length)
                                    console.log(comments[i].data.body_html)
                                    console.log(comments[i].data.body)
                                    decoder.html(comments[i].data.body_html)
                                    decodedText += decoder.text()
                                    $('#comment').html(decodedText)
                                    //$("#comment").html((comments[i].data.body_html))
                                    //$('#author').html("said by " + comments[i].data.author + ", a " + comments[i].data.author_flair_text + " fan")

                                    break

                                }


                            }
                            // DELETE THIS-----------------------------
                            // var jsonRequestUrl = 'http://www.reddit.com/r/funny/comments/1v6rrq.json';
                            // var decoder = $('<div />');
                            // var decodedText = '';
                            //
                            // $.getJSON(jsonRequestUrl, function foo(result) {
                            //     var elements = result[1].data.children.slice(0, 10);
                            //
                            //     $.each(elements, function(index, value) {
                            //         decoder.html(value.data.body_html);
                            //         decodedText += decoder.text();
                            //     });
                            //
                            //     $('#content').append(decodedText);
                            // }); DELETE THIS -------------------

                            $('#button').click(function() {
                                insult()
                            })



                        } //closes success function
                }) // closes ajax function
        })
    }) //closes ready function
