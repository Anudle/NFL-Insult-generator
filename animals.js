$(document).ready(function() {


    // $('#teams').change(function(event) {
    //     event.preventDefault();})

    $.ajax({
            url: 'https://www.reddit.com/r/aww_gifs/top.json?sort=top&t=all',

            error: function(err) {
                console.error(err)
            },
            method: 'GET',

            success: function(data) {


                var cuteAnimal;
                var dada = data.data.children

                // console.log(data.data.children[i].data.url);
                // console.log(data.data.children[i].data.title)

                //var randomNum = Math.floor(Math.floor(Math.random() * 25))

                // function generateRandom(min, max) {
                //     var num = Math.floor(Math.random() * (max - min + 1)) + min;
                //     return (num === 8 || num === 15) ? generateRandom(min, max) : num;
                // }
                //
                // console.log(generateRandom(1, 20))

                function animal() {

                    function generateRandom(min, max) {
                        var num = Math.floor(Math.random() * (max - min + 1)) + min;
                        return (num === 24 || num === 22 || num === 19 || num === 17 || num === 16 || num === 14) ? generateRandom(min, max) : num;
                    }

                    var randomNum = generateRandom(0, 24)

                    for (i = randomNum; i < 24; i++)
                        if ((i) !== 24 || 22 || 21 || 19 || 17 || 16 || 14) {
                            console.log(i)
                            console.log(dada[i].data.title)
                            console.log(i)
                                //bad url http://imgur.com/KeijfE4, http://imgur.com/TEFLAja, http://imgur.com/PHgbXXc

                            $('#gif').html("<iframe src=" + dada[i].data.url + " height=600px width=600px>")
                            break
                        }



                        //$('#gif').html("<iframe src=" + comments[i].data.body + " height=600px width=600px>")
                        // $('#author').html("said by " + comments[i].data.author + ", a " + comments[i].data.author_flair_text + " fan")


            }
            $('.butt').click(function() {
                animal()
            })


        } //closes success function
    }) // closes ajax function

}) //closes ready function
