Jared notes on setting up the Informatics email:

-------------------------

Informatics email set up – so the informatics team can send from it.
items to be aware of:
- Emailing from this email to an internal (university) email there will have a delay.
- Email sent from using this account on a mac, a copy will NOT be stored in the sent items folder, or university servers. The only copy will be in on my computer -> sent. Not the case with a PC
- The name change will not let recipients (or us if there is a problem) know who actually sent the email

## MAC: ##
- Open outlook, select outlook->preferences->accounts
- In the accounts window, select the dropdown arrow next to the plus sign at the bottom, select other email or email (depending on the outlook version)
- Fill in the following
  - Email: informatics@egi.utah.edu
  - password: the users university password (CIS/email)
- new fields will show enter the following:
  - username: users unid@umail.utah.edu
  - type: imap (should already be selected)
  - incoming server: .
  - outgoing server: smtp.utah.edu
    - check override default port, and enter 587 in the port box
    - check use SSL to connect
- select add account
- Change the account description to Informatics
- Change the full name to Informatics
- Under outgoing server select more options
  - Select none for authentication
- Close the window


## WINDOWS: ##
- Open outlook, select file->account settings->account settings in the drop down
- Under the email tab select new
- Select manual setup or additional server types
- Select pop or imap
- Fill in the following
  - User Information:
§  Your name: user name or Informatics
§  Email address: informatics@egi.utah.edu
  - Server Information:
§  Account time IMAP
§  Incoming mail server imap.umail.utah.edu
§  Outgoing mail server smtp.utah.edu
  - Logon Information
§  User name: Users unid
§  Users password: password
§  Check remember password
- Select more settings in the bottom right corner
  - Select advanced tab
  - Fill in the following
§  Incoming port: 993
§  Encrypted: SSL
§  Outgoing Port: 25
§  Encrypted: TLS
- Select ok
- Select next, it will auto test.
- Select finish
