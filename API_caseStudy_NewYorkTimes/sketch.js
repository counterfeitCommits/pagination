
var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=';

//var searchTerm = 'pigs';

var url2 = '&api-key=a7897d28a9eef5735dc1f309e5fec167%3A18%3A75097304';

var megaData;
var input; //get user inout from html DOM element box
  var img;

function setup() {
  //noCanvas();
  var button = select('#submit');
  button.mousePressed(getHeadlines);
  input = select('#searchQuery');
  loadJSON(url + input.value() + url2, gotData);
}

function getHeadlines (){
  //searchTerm = input.value();
  loadJSON(url + input.value() + url2, gotData);
}

function gotData(data){
  
 // println(data);
  megaData = data;
  println('GOT HEADLINES!!');
  for( i = 0; i < megaData.response.docs.length; i++){
    println(megaData.response.docs[i].headline.main);
    println('     ' + megaData.response.docs[i].snippet);
    //createElement('h1', megaData.response.docs[i].headline.main);
    createA(megaData.response.docs[i].web_url, megaData.response.docs[i].headline.main);
    createP( megaData.response.docs[i].snippet);
    //web_url
    //createP( megaData.response.docs[i].multimedia[0].url);
    //img = createImg(megaData.response.docs[i].multimedia[0].url);

  }
}

function draw() {
    image(img, 0, 0);
}