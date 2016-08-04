$(document).ready(function() {


    // $('#teams').change(function(event) {
    //     event.preventDefault();})

    $.ajax({
            url: 'https://www.reddit.com/r/HeresAFunFact/top.json?sort=top&t=all',

            error: function(err) {
                console.error(err)
            },
            method: 'GET',

            success: function(data) {



                var fun = data.data.children

                 function FunFacts() {
                var num = Math.floor(Math.random() * 24);
                //     function generateRandom(min, max) {
                  //     var num = Math.floor(Math.random() * (max - min + 1)) + min;
                //         return (num === 24 || num === 22 || num===21|| num === 19 || num === 17 || num === 16 || num === 14) ? generateRandom(min, max) : num;
                //     }
                //
                //     var randomNum = generateRandom(0, 24)

                    for (i = num; i < 24; i++)
                        if (fun[i].data.score > 15) {
                            console.log(i)
                            console.log(fun[i].data.title)
                            console.log(fun[i].data.url)

                            $('#FunFactTitle').html(fun[i].data.title)
                          //  $('#FunFactPic').html("<iframe src=" + fun[i].data.url + ">")
                            $('#FunFactPic').css('background-image','url(' + fun[i].data.url + ')')
                            break
                        }



                        //$('#gif').html("<iframe src=" + comments[i].data.body + " height=600px width=600px>")
                        // $('#author').html("said by " + comments[i].data.author + ", a " + comments[i].data.author_flair_text + " fan")


            }
            $('.but').click(function() {
                FunFacts()
            })


        } //closes success function
    }) // closes ajax function

}) //closes ready function
