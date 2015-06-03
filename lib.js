module.exports = {
  getStrongest: function(arr){
    var strong = arr[0];
    for(var i = 0; i < arr.length; i++){
      if(arr[i].strength > strong.strength){
        strong = arr[i];
      }
    }
    return strong;
  }
}
