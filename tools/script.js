var finput;

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
    var data = results.data;
    hide(finput);
    body.innerHTML = "<button onclick='location.reload()'>Restart</button>" + body.innerHTML

    body.innerHTML += "<h2>" + data[1][1] + "</h2>"; // Title
    //body.innerHTML += "<p>" + data[3][1] + "</p>";   // Date
    body.innerHTML += "<h3>Mailchimp Statistics</h3>";
    body.innerHTML += "<p><span class='first'>" + data[6][0] + "</span>" + data[6][1] + "</p>";   // Total Recipents
    // body.innerHTML += "<p><span class='first'>" + data[12][0] + "</span>" + data[12][1] + "</p>"; // Total Opens
    body.innerHTML += "<p><span class='first'>" + "Opens:" + "</span>" + data[11][1] + "</p>"; // Recipiens Who Opened
    body.innerHTML += "<p><span class='first'>" + data[15][0] + "</span>" + data[15][1] + "</p>"; // Total Clicks
    body.innerHTML += "<p><span class='first'>" + data[8][0] + "</span>" + data[8][1] + "</p>";   // Bounced
    body.innerHTML += "<p><span class='first'>" + data[17][0] + "</span>" + data[17][1] + "</p>"; // Unsubscriptions

    body.innerHTML += "<h3 class='article'>Top Articles</h3>";
    body.innerHTML += "<div class='article-wrap'></div>";
    var articleWrap = document.getElementsByClassName('article-wrap')[0];
    articleWrap.innerHTML += "<span class='clicks'><span class='article' style='padding-right: 0;'></span>Clicks</span>";
    for(i = 23; i <= 27; i++){
      articleWrap.innerHTML += "<p><span class='article'>" + data[i][0].replace(/\//g, " ").trim().split(" ").pop() + "</span>" + data[i][1] + "</p>";
    }

    body.innerHTML += "<h3 class='article'>All Articles</h3>";
    body.innerHTML += "<div class='article-wrap'></div>";
    articleWrap = document.getElementsByClassName('article-wrap')[1];
    articleWrap.innerHTML += "<span class='clicks'><span class='article' style='padding-right: 0;'></span>Clicks</span>";
    for(i = 23; i <= data.length - 2; i++){
      articleWrap.innerHTML += "<p><span class='article'>" + data[i][0].replace(/\//g, " ").trim().split(" ").pop() + "</span>" + data[i][1] + "</p>";
    }
  }

  function hide(a){
    a.style.display = "none";
  }

  finput.addEventListener("change", readFile);
}
