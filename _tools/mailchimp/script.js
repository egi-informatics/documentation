var finput;
var data;

window.onload = function(){
  main()
}
function main(){
  finput = document.getElementById('file-input');

  var config = {
  	delimiter: ",",	// auto-detect
  	newline: "",	// auto-detect
  	header: false,
  	dynamicTyping: false,
  	preview: 0,
  	encoding: "",
  	step: undefined,
  	complete: dataLoaded,
  }

  function readFile() {
      var file = finput.files[0];
      console.log("File size:\t" + file.size);

      var p = Papa.parse(file, config);
  }

  function dataLoaded(results){
    var body = document.body;
    data = results.data;
    dataLastIndex = data.length - 2;
    hide(finput);
    hide(document.getElementById('page-title'));

    var fields = [
      "Total Recipients:",
      "Recipients Who Opened:",
      "Total Clicks:",
      "Total Unsubs:",
      "Bounces:",
      "Total Unsubs:"
      ];

    body.innerHTML = "<button onclick='location.reload()'>Restart</button>" + body.innerHTML

    body.innerHTML += "<h2>" + data[1][1] + "</h2>"; // Title
    //body.innerHTML += "<p>" + data[3][1] + "</p>";   // Date
    body.innerHTML += "<h3>Mailchimp Statistics</h3>";

    // Prints all fields to document body
    printFields(fields);

    var articleStart = getArticleStart();
    var lastOfTop = articleStart + 5;

    // Sets last of top to
    if(lastOfTop > dataLastIndex){
      lastOfTop = dataLastIndex;
    }

    body.innerHTML += "<div class='titles'><h3>Top Links</h3><div class='clicks'>Clicks</div></div>";
    for(i = articleStart; i <= lastOfTop; i++){
      body.innerHTML += "<p class='row'><span class='article'>" + urlClean(data[i][0]) + "</span><span class='click-num'>" + data[i][1] + "</span></p>";
    }

    body.innerHTML += "<div class='titles'><h3>All Links</h3><div class='clicks'>Clicks</div></div>";
    for(i = articleStart; i <= dataLastIndex; i++){
      body.innerHTML += "<p class='row'><span class='article'>" + urlClean(data[i][0]) + "</span><span class='click-num'>" + data[i][1] + "</span></p>";
    }
  }

  function urlClean(long){
    return long.replace(/\//g, " ").trim().split(" ").pop();
  }

  function printFields(fields){
    for(var i = 0; i < fields.length; i++){
      document.body.innerHTML += "<p><span class='first'>" + fields[i] + "</span>" + getValue(fields[i]) + "</p>"; // Unsubscriptions
    }
  }
  function getValue(field){
    for(var i = 0; i < data.length; i++){
      if(data[i][0] == field){
        return data[i][1];
      }
    }
  }

  function getArticleStart(){
    for(var i = 0; i < data.length; i++){
      if(data[i][0] == "URL"){
        return i + 1;
      }
    }
  }

  function hide(a){
    a.style.display = "none";
  }

  finput.addEventListener("change", readFile);
}
