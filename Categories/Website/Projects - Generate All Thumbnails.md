## Generate/Update All Project Thumbnails
---

0. Go to `Library2/Uniform_Covers/`
0. Sort by kind and select all PDFs
0. Copy to a new folder on the Desktop
0. Within Terminal, change directory to that folder on the Desktop
0. Run:

    <code>mkdir images
    sips -s format jpeg -z 400 308 *.pdf --out images
    </code>

    - This creates a sub folder called images that contains all the generated project thumbnails

0. Select all files inside the images folder, right click and select rename
0. Replace " " with "", click Rename
0. Replace all images (or add desired image) to web server at:

  `/downloads/project_thumbnails/`
