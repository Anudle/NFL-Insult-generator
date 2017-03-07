var flairsArray = [
    Bears = {
        name: 'Bears',
        src: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/chi.png'
    },
    Broncos = {
        name: 'Broncos',
        src: 'https://img.clipartfox.com/5a3fbc4db4ac54cb06315c850068e908_logotipo-de-denver-broncos-psd-broncos-clipart_400-211.png'
    },
    Bills = {
        name: 'Bills',
        src: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/buf.png'
    },
    Browns = {
        name: 'Browns',
        src: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cle.png&h=150&w=150'
    },
    Buccaneers = {
        name: 'Buccaneers',
        src: 'http://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Ftb.png'
    },
    Chargers = {
        name: 'Chargers',
        src: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sdg.png'
    },
    Chiefs = {
        name: 'Chief',
        src: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/kan.png'
    },
    Colts = {
        name: 'Colts',
        src: 'http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Find.png'
    },
    Cowboys = {
        name: 'Cowboys',
        src: "http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/dal.png&h=150&w=150"
    },
    Dolphins = {
        name: 'Dolphins',
        src: "http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fmia.png"
    },
    Falcons = {
        name: 'Falcons',
        src: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/atl.png&h=150&w=150'
    },
    Egales = {
        name: 'Egales',
        src: 'http://prod.static.eagles.clubs.nfl.com/assets/nflimg/phi-logo.png'
    },
    Giants = {
        name: 'Giants',
        src: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nyg.png'
    },
    Jaguars = {
        name: 'Jaguars',
        src: 'http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fjax.png'
    },
    Jets = {
        name: 'Jets',
        src: 'http://a3.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fnyj.png'
    },
    Lions = {
        name: 'Lion',
        src: 'http://prod.static.lions.clubs.nfl.com/nfl-assets/img/gbl-ico-team/DET/logos/home/large.png'
    },
    Packers = {
        name: 'Packers',
        src: 'http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fgb.png'
    },
    Panthers = {
        name: 'Panthers',
        src: 'http://prod.static.panthers.clubs.nfl.com/nfl-assets/img/gbl-ico-team/CAR/logos/home/large.png'
    },
    Patriots = {
        name: 'Patriots',
        src: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ne.png&h=150&w=150'
    },
    Raiders = {
        name: 'Raiders',
        src: 'http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Foak.png'
    },
    Rams = {
        name: 'Rams',
        src: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/stl.png'
    },
    Ravens = {
        name: 'Ravens',
        src: 'http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fbal.png'
    },
    Redskins = {
        name: 'Redskins',
        src: 'http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fwsh.png'
    },
    Saints = {
        name: 'Saints',
        src: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/no.png'
    },
    Seahawks = {
        name: 'Seahawks',
        src: 'http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fsea.png'
    },
    Steelers = {
        name: 'Steelers',
        src: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/pit.png'
    },
    Texans = {
        name: 'Texans',
        src: 'http://a3.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fhou.png'
    },
    Titans = {
        name: 'Titans',
        src: 'http://totallypopculture.com/wp-content/uploads/2016/03/a.espncdn2.comcombineri-14fa939d43bcb24c7c9b97f7c9071bfd90bfe8cf'
    },
    Vikings = {
        name: 'Vikings',
        src: 'http://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fmin.png'
    }
]

var selection = 'alert';
var flair;
$('.btn').click(function() {
    if (selection === 'alert') {
        swal("Uh oh, you didn't pick a team.") //an alert to make sure you picked a selection.
    }
})
$(document).ready(function() {

    var comments = []
    //data[1].data.children //simplify the reddit object.


    $('#teams').change(function(event) {
        event.preventDefault();
        selection = $('#teamsSelect').val();
        $('.btn').addClass('loading')
        $.ajax({
            url: 'https://www.reddit.com/r/nfl/comments/' + selection + '.json',

            error: function(err) {
                console.error(err)
            },
            method: 'GET',

            success: function(data) {
                comments = data[1].data.children //simplify the reddit object.

                $('.btn').removeClass('loading')

            } //closes success funtion
        }) //closes change function
    }) // closes ajax function
    function insult() {

        var randomNum = Math.floor(Math.floor(Math.random() * 30))
        for (i = randomNum; i < comments.length; i++) //random number generator.
            if ((comments[i].data.score > 200) && //pulls only comments with > 200 upvotes.
                ((comments[i].data.body.slice(-4) == "gifv") || (comments[i].data.body.slice(-3) == "gif"))) { //comment ends with gif and gifv.
                $('#comment').html('') //refreshes #comment
                $('#comment').html("<iframe src=" + comments[i].data.body + " height=600px width=800px/>") //if a comment is just a like, play the link.

                flair = comments[i].data.author_flair_text
                $('#author').html("-by " + comments[i].data.author) //assign flair and author.
                console.log('flair is ' + flair)
                break
            } else if (comments[i].data.score > 200) {
            //body_html is the html version of the comment, var encoded and var decoded helps parse the document to make it presentable.
            $('#comment').html('')
            var encoded = (comments[i].data.body_html)
            var decode = $('<div />').html(encoded).text() //
            flair = comments[i].data.author_flair_text //assigns flair
            $('#comment').append(decode) //the comment is told.
            $('#authorName').html("-by " + comments[i].data.author + "") //provides the author of the comment.
            console.log('flair is ' + flair)
            break
        }
    }

    //flairFunction sets the flair for each commentor.
    function flairFunction(fl, arr) {
        for (i = 0; i < arr.length; i++) {
            console.log(arr[i].name)
            if (arr[i].name == fl) {
                $('#flairHTML').html('<img class="flairClass" src=' + arr[i].src + ' />')
                console.log(arr[i].src)
                break
            }
        }
    }

    function teamColor() {
        if (selection == '4uqavr/rnfl_roast_of_the_arizona_cardinals_2332') {
            $('body').css('background-color', '#97233F')
            $('.md li, p, .md a').css('color', '#FFB612')
        } else if (selection == '4vo4wf/rnfl_roast_of_the_atlanta_falcons_2932') {
            $('body').css('background-color', '#000000')
            $('.md li, p, .md a').css('color', '#A71930')
        } else if (selection == '4w66hq/rnfl_roast_of_the_baltimore_ravens_final_roast') {
            $('body').css('background-color', '#000000')
            $('.md li, p,.md a').css('color', '#551A8B')
        } else if (selection == '4rwc32/rnfl_roast_of_the_buffalo_bills_632') {
            $('body').css('background-color', '#00338D')
            $('.md li, p,.md a').css('color', '#C60C30')
        } else if (selection == '4uw9wj/rnfl_roast_of_the_carolina_panthers_2432') {
            $('body').css('background-color', '#0085CA')
            $('.md li, p, .md a').css('color', '#000000')
        } else if (selection == '4re99x/rnfl_roast_of_the_chicago_bears') {
            $('body').css('background-color', '#0B162A')
            $('.md li, p, .md a').css('color', '#C83803')
        } else if (selection == '4t0qbx/rnfl_roast_of_the_cincinnati_bengals_1332') {
            $('body').css('background-color', '#FB4F14')
            $('.md li, p, .md a').css('color', '#000000')
        } else if (selection == '4rqbq7/rnfl_roast_of_the_cleveland_browns_532') {
            $('body').css('background-color', '#22150C')
            $('.md li, p, .md a').css('color', '#FB4F14')
        } else if (selection == '4ra2r8/rnfl_roast_of_the_dallas_cowboys_232') {
            $('body').css('background-color', '#002244')
            $('.md li, p, .md a').css('color', '#B0B7BC')
        } else if (selection == '4v2dqe/rnfl_roast_of_the_denver_broncos_253') {
            $('body').css('background-color', '#002244')
            $('.md li, p, .md a').css('color', '#FB4F14')
        } else if (selection == '4u4eie/rnfl_roast_of_the_detroit_lions_1932') {
            $('body').css('background-color', '#B0B7BC')
            $('.md li, p, .md a').css('color', '#005A8B')
        } else if (selection == '4r3by8/rnfl_roast_of_the_green_bay_packers_132') {
            $('body').css('background-color', '#203731')
            $('.md li, p, .md a').css('color', '#FFB612')
        } else if (selection == '4vig76/rnfl_roast_of_the_houston_texans_2832') {
            $('body').css('background-color', '#03202F')
            $('.md li, p, .md a').css('color', '#A71930')
        } else if (selection == '4soujd/rnfl_roast_of_the_indianapolis_colts_1132') {
            $('body').css('background-color', '#FFF')
            $('#authorName').css('color', '#002C5F')
            $('.md li, p, .md a').css('color', '#002C5F')
        } else if (selection == '4s6uan/rnfl_roast_of_the_jacksonville_jaguars_832') {
            $('body').css('background-color', '#006778')
            $('.md li, p, .md a').css('color', '#D7A22A')
        } else if (selection == '4uejyk/rnfl_roast_of_the_kansas_city_chiefs') {
            $('body').css('background-color', '#E31837')
            $('.md li, p, .md a').css('color', '#FFB612')
        } else if (selection == '4s0uwo/rnfl_roast_of_the_st_louis_rams_732') {
            $('body').css('background-color', '#002244')
            $('.md li, p, .md a').css('color', '#B3995D')
        } else if (selection == '4w06ec/rnfl_roast_of_the_miami_dolphins_3132') {
            $('body').css('background-color', '#008E97')
            $('.md li, p, .md a').css('color', '#F58220')
        } else if (selection == '4v86hm/rnfl_roast_of_the_minnesota_vikings_2632') {
            $('body').css('background-color', '#4F2683')
            $('.md li, p, .md a').css('color', '#FFC62F')
        } else if (selection == '4ukacc/rnfl_roast_of_the_new_england_patriots_2232') {
            $('body').css('background-color', '#002244')
            $('.md li, p, .md a').css('color', '#C60C30')
        } else if (selection == '4siq98/rnfl_roast_of_the_new_orleans_saints_1032') {
            $('body').css('background-color', '#000000')
            $('.md li, p, .md a').css('color', '#9F8958')
        } else if (selection == '4vdfcw/rnfl_roast_of_the_new_york_giants_2732') {
            $('body').css('background-color', '#0B2265')
            $('.md li, p, .md a').css('color', '#A71930')
        } else if (selection == '4tazs1/rnfl_roast_of_the_new_york_jets') {
            $('body').css('background-color', '#203731')
            $('.md li, p, .md a').css('color', '#FFF')
        } else if (selection == '4t5xwo/rnfl_roast_of_the_oakland_raiders_1432') {
            $('body').css('background-color', '#000000')
            $('.md li, p, .md a').css('color', '#A5ACAF')
        } else if (selection == '4scmwt/rnfl_roast_of_the_philadelphia_eagles_932') {
            $('body').css('background-color', '#004953')
            $('.md li, p, .md a').css('color', '#A5ACAF')
        } else if (selection == '4u9jqi/rnfl_roast_of_the_pittsburgh_steelers_2032') {
            $('body').css('background-color', '#000000')
            $('.md li, p, .md a').css('color', '#FFB612')
        } else if (selection == '4rk6zu/rnfl_roast_of_the_san_diego_chargers_432') {
            $('body').css('background-color', '#0073CF')
            $('.md li, p, .md a').css('color', '#FFB612')
        } else if (selection == '4tmu7h/rnfl_roast_of_the_san_francisco_49ers_1632') {
            $('body').css('background-color', '#B3995D')
            $('.md li, p, .md a').css('color', '#AA0000')

        } else if (selection == '4vu9q0/rnfl_roast_of_the_seattle_seahawks_3032') {
            $('body').css('background-color', '#002244')
            $('.md li, p, .md a').css('color', '#69BE28')
        } else if (selection == '4sv0xw/rnfl_roast_of_the_tampa_bay_buccaneers_1232') {
            $('body').css('background-color', '#34302B')
            $('.md li, p, .md a').css('color', '#D50A0A')
        } else if (selection == '4sv0xw/rnfl_roast_of_the_tampa_bay_buccaneers_1232') {
            $('body').css('background-color', '#34302B')
            $('.md li, p, .md a').css('color', '#D50A0A')
        } else if (selection == '4tym0t/rnfl_roast_of_the_tennessee_titans_1832') {
            $('body').css('background-color', '#4B92DB')
            $('.md li, p, .md a').css('color', '#C60C30')
        } else if (selection == '4tsqnv/rnfl_roast_of_the_washington_redskins_1732') {
            $('body').css('background-color', '#773141')
            $('.md li, p, .md a').css('color', '#FFB612')
        }
    } //closes team color function
    $('.btn').click(function() { //the insult button
        if(!$(this).hasClass('loading')){
        insult()
        flairFunction(flair, flairsArray)
        teamColor()
      }
    })
}) //closes ready function
