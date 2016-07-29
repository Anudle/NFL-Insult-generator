$(document).ready(function(){
$.ajax({
  url: 'https://www.reddit.com/r/nfl/comments/4v2dqe/rnfl_roast_of_the_denver_broncos_2532.json',
  error: function(err) {console.error(err)},
  method: 'GET',
  success: function(data) {
    var comments = data[1].data.children
    var randomNum = Math.floor(Math.random() * 30)

    console.log(randomNum)
    for (i=0; i<comments.length; i++)
console.log(comments[randomNum].data.body)

}

})
})
