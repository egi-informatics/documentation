## Update Project Status (OLD)
---

### Update Current Projects Map and Project Page

The current projects map and individual project pages pull status data from `research.json`

0. In Cyberduck, go to `/api/`
0. Duplicate `research.json` &nbsp; <kbd>&#8984; </kbd> + <kbd>D</kbd> and save
0. Move duplicated file to `/api/backup/`
0. Download `research.json` to Desktop
0. Open in text editor
0. Search for project name or I#
0. Change field: `"status" : "In Development",`

  | | | |
  |-|-|-|
  | "In Development" | "In Progress" | "Completed" |

0. Save file and drag back into Cyberduck window to replace file on website

### Update Research Portfolio

0. In Cyberduck, go to `/downloads/research_portfolio/`
0. In Finder, go to `/UnitAdmin/0_EGI_Corporate_Associate.../EGI_Research_Portfolio/`
0. Drag both versions of the research portfolio into the Cyberduck window to to replace files on website

Make sure the new filenames match what they are replacing in Cyberduck. Other systems will break if the filenames change.

### Update Project PDF

0. In Cyberduck, go to `/downloads/project_summaries/`
0. In Finder, go to `/UnitAdmin/0_EGI_Corporate_Associate.../EGI_Current_CostShared_Research/`
0. Drag updated version of the project PDF into the Cyberduck window to to replace file on website

If the filename has changed, edit the project page in [Wordpress Admin](https://egi.utah.edu/wp-admin) to reflect the new url.
