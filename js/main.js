
var apiURL ='https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6'


$.ajax({
  url: apiURL,
  success: function(res){
    console.log(res)
    res.forEach(function(arr){
      $('.name').append('<li>'+ arr.name + '</li>')
      $('.firstBrewed').append('<li>'+ arr.first_brewed + '</li>')
      $('.description').append('<li>'+ arr.description + '</li>')
    });
},
error: function(err){
  console.log(err)
}
});
