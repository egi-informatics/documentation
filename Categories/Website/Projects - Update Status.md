## Update Project Status
---

### Upload updated Research Portfolio

0. Locate updated PDF in `/UnitAdmin/0_EGI_Corporate_Associate.../EGI_Research_Portfolio/`
0. Replace file in `/downloads/research_portfolio/` through FTP (Cyberduck)

### Upload updated Project PDF

0. In Cyberduck, go to `/downloads/project_summaries/`
0. In Finder, go to `/UnitAdmin/0_EGI_Corporate_Associate.../EGI_Current_CostShared_Research/`
0. Drag updated version of the project PDF into the Cyberduck window to to replace file on website

### Check for Project Data Coherency

0. Open the [project data checker](https://egi-projects.herokuapp.com/)  -- [source code](https://github.com/egi-informatics/projects)
0. Run data comparison tool by clicking on the Projects button

### Make necessary changes to research.json

0. Open the [project data manager tool](https://egi.utah.edu/docs/_tools/project-data-manager/) -- [source code](https://github.com/egi-informatics/project-data-manager)
0. Click the 'Load From Web' button
0. Click on the project you need to modify in the list
0. Make the changes and click the green save button
0. Download the updated research.json file by clicking on the gray download button on the left

### Upload updated research.json

0. Replace file on the web server at `/api/research.json`


  <br>This will update:

  - The [current project map](https://egi.utah.edu/research/current-projects/)
  - The listing of current projects on the iPad promo app
  - All the individual project pages (title, status, cost, etc...)
