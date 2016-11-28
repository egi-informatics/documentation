## Quick Export of CA List PDFs
---

### Download & Install

1. Download the InDesign export script: <a id="download" href="https://gist.githubusercontent.com/dotspencer/188426dbf55fb584af38e09b70185f85/raw"><button>Download Script</button></a>

1. Download the EGI PDF export preset: <a href="_tools/indesign/EGI High Quality.joboptions?_" download="EGI High Quality.joboptions"><button>Download Preset</button></a>

1. Open downloaded preset (Opens in Acrobat Distiller).

1. Click OK and the preset will be saved for all Adobe programs.

1. In InDesign, show the Scripts panel: Window > Utilities > Scripts

1. Dock the panel on the right toolbar to allow quick access

1. In the Scripts tab, Right-click on `User` and click  `Reveal in Finder`

  ![](http://i.stack.imgur.com/V2iIC.png)

1. Copy downloaded script to this location inside the `Scripts Panel` folder and it will appear inside the InDesign scripts panel.

### Use

1. In InDesign, open `Promo Materials/CA_AB List Program/CA_AB_LIST_&_PROGRAM_2016.indd`

1. In the scripts panel, inside the __User__ folder, double-click on `ca-export-pdf.jsx` to run it.

1. Select which file you want to generate and click OK.

  ![](http://i.stack.imgur.com/QUuKw.png)

1. Select export location and pdfs will be generated and saved.

<script>
function download(url){
  $.ajax({
    url: url,
    success: function(data){
      var blob = new Blob([data], {type: "text/plain"});
      var new_url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = new_url;
      a.download = "ca-export-pdf.jsx";
      a.click();
    }
    });
}
var target;
$('#download').click(function(event){
  event.preventDefault();
  download(event.target.parentElement.href);
});
</script>
