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
      console.log(file.size);

      var p = Papa.parse(file, config);
  }

  function dataLoaded(results){
    var body = document.body;
    data = results.data;
    dataLastIndex = data.length - 2;
    hide(finput);

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

    body.innerHTML += "<h3 class='article'>Top Articles</h3>";
    body.innerHTML += "<div class='article-wrap'></div>";

    var articleWrap = document.getElementsByClassName('article-wrap')[0];
    articleWrap.innerHTML += "<span class='clicks'><span class='article' style='padding-right: 0;'></span>Clicks</span>";

    var articleStart = getArticleStart();
    var lastOfTop = articleStart + 5;

    // Sets last of top to
    if(lastOfTop > dataLastIndex){
      lastOfTop = dataLastIndex;
    }

    for(i = articleStart; i <= lastOfTop; i++){
      articleWrap.innerHTML += "<p><span class='article'>" + data[i][0].replace(/\//g, " ").trim().split(" ").pop() + "</span>" + data[i][1] + "</p>";
    }

    body.innerHTML += "<h3 class='article'>All Articles</h3>";
    body.innerHTML += "<div class='article-wrap'></div>";
    articleWrap = document.getElementsByClassName('article-wrap')[1];
    articleWrap.innerHTML += "<span class='clicks'><span class='article' style='padding-right: 0;'></span>Clicks</span>";

    for(i = articleStart; i <= dataLastIndex; i++){
      articleWrap.innerHTML += "<p><span class='article'>" + data[i][0].replace(/\//g, " ").trim().split(" ").pop() + "</span>" + data[i][1] + "</p>";
    }
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
