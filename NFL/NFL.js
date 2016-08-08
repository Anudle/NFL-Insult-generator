$(document).ready(function() {

        var flair;

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



                                var comments = data[1].data.children

                                function insult() {

                                    var randomNum = Math.floor(Math.floor(Math.random() * 30))
                                    for (i = randomNum; i < comments.length; i++)

                                        if ((comments[i].data.score > 200) && (comments[i].data.body.slice(0, 4) == "http")) { //SCORE
                                        $('#comment').html('')
                                        console.log(comments[i].data.body_html)
                                        console.log(comments[i].data.body.slice(0, 4))
                                        $('#comment').html("<iframe src=" + comments[i].data.body + " height=800px width=800px/>")
                                        flair = comments[i].data.author_flair_text


                                        $('#authorName').html("said by " + comments[i].data.author)

                                        break

                                    } else if (comments[i].data.score > 200) {

                                        $('#comment').html('')
                                        var encoded = (comments[i].data.body_html)
                                        var decode = $('<div />').html(encoded).text()
                                        flair = comments[i].data.author_flair_text
                                      //  console.log(flair)
                                            //decoder.html(comments[i].data.body_html)
                                            // decoder.html(comments[i].data.body_html)
                                            // decodedText += decoder.text()



                                        $('#comment').append(decode)

                                        $('#authorName').html("-said by " + comments[i].data.author + "")


                                        //, who roots for the " + comments[i].data.author_flair_text + ".")

                                        break

                                    }

                                }

                                console.log(flair)
                                function flairFunction(){
                                  if (flair == 'Bears') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/chi.png" />')
                                  } else if (flair == 'Broncos') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://prod.static.broncos.clubs.nfl.com/nfl-assets/img/gbl-ico-team/DEN/logos/home/large.png" />')
                                  } else if (flair == 'Bills') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/buf.png" />')
                                  } else if (flair == 'Browns') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cle.png&h=150&w=150" />')
                                  } else if (flair == 'Buccaneers') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Ftb.png" />')
                                  } else if (flair == 'Chargers') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sdg.png" />')
                                  } else if (flair == 'Chiefs') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/kan.png" />')
                                  } else if (flair == 'Colts') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Find.png" />')
                                  } else if (flair == 'Cowboys') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/dal.png&h=150&w=150" />')
                                  } else if (flair == 'Dolphins') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://www.fbschedules.com/images/logos/nfl/miami-dolphins.png" />')
                                  } else if (flair == 'Eagles') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://prod.static.eagles.clubs.nfl.com/nfl-assets/img/gbl-ico-team/PHI/logos/home/large.png" />')
                                  } else if (flair == 'Falcons') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/atl.png&h=150&w=150" />')
                                  } else if (flair == 'Giants') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nyg.png" />')
                                  } else if (flair == 'Jaguars') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fjax.png" />')
                                  } else if (flair == 'Jets') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a3.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fnyj.png" />')
                                  } else if (flair == 'Lions') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://prod.static.lions.clubs.nfl.com/nfl-assets/img/gbl-ico-team/DET/logos/home/large.png" />')
                                  } else if (flair == 'Packers') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fgb.png" />')
                                  } else if (flair == 'Panthers') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://prod.static.panthers.clubs.nfl.com/nfl-assets/img/gbl-ico-team/CAR/logos/home/large.png" />')
                                  } else if (flair == 'Patriots') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ne.png&h=150&w=150" />')
                                  } else if (flair == 'Raiders') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Foak.png" />')
                                  } else if (flair == 'Rams') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/stl.png" />')
                                  } else if (flair == 'Ravens') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fbal.png" />')
                                  } else if (flair == 'Redskins') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fwsh.png" />')
                                  } else if (flair == 'Saints') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/no.png" />')
                                  } else if (flair == 'Seahawks') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fsea.png" />')
                                  } else if (flair == 'Steelers') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/pit.png" />')
                                  } else if (flair == 'Texans') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a3.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fhou.png" />')
                                  } else if (flair == 'Titans') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://totallypopculture.com/wp-content/uploads/2016/03/a.espncdn2.comcombineri-14fa939d43bcb24c7c9b97f7c9071bfd90bfe8cf" />')
                                  } else if (flair == 'Vikings') {
                                      $('#flairHTML').html('<img class="flairClass" src="http://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fmin.png" />')
                                } else if (flair == 'null') {
                                    $('#flairHTML').html('<img class="flairClass" src="https://pbs.twimg.com/profile_images/726859014664032256/sJu1yu06.jpg" />')
                                }
                                }


                                $('.btn').click(function() {
                                    insult()
                                    })

                                  $('.btn').click(function(){
                                    flairFunction()
                                  })



                            } //closes success funtion
                    }) //
            }) // closes ajax function
    }) //closes ready function
