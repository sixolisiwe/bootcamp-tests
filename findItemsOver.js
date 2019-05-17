function findItemsOver(items, threshold){
    console.log(threshold);
    var itemlist= [];
    for(var j= 0; j<items.length; j++){
     if(items[j].qty>threshold){
     itemlist.push(items[j]);
    }
  }

  console.log(result)
   return itemlist
  }
  var items= [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var threshold= 20;

var result= findItemsOver(items, threshold)
