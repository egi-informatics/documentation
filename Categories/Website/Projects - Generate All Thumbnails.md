## Generate/Update All Project Thumbnails
---

0. Go to `Library2/Archive_Covers/`
0. Copy `BACKUP_UpdatedReportCovers` to the Desktop

   - This folder contains PDF covers for all EGI projects

0. Within Terminal, change directory to that folder on the Desktop
0. Run:

    <code>mkdir images
    sips -s format jpeg -z 400 308 *.pdf --out images
    </code>

    - This creates a folder called images that contains all the generated project thumbnails

0. Replace all images (or add desired image) to web server at:

  `/downloads/project_thumbnails/`
