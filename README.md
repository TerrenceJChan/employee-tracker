# Team Profile Generator
Create a databse for your organization's employees using an intuitive Node.js app!
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)
## Installation
Walkthrough video can be seen here on [YouTube](https://youtu.be/vf7SPVs0uHw). Make sure to have Node.js and MySQL installed for this app to work properly.  
  
Clone over repo from GitHub: https://githhttps://github.com/TerrenceJChan/employee-tracker  
  
Open the folder in the terminal, and make sure to install the app's necessary dependencies! To do this, use the command `npm i`  

This app makes use of the _dotenv_ package to separate the user's secrets (MySQL login). In the root directory of the app, there is a _.sample-env_ file that should be filled with the user's MySQL credentials. An example of what might exist there is as follows:  

```
DB_USER=root

DB_PASS=ASecurePassword

DB_NAME=organization_db
```

A schema and seeds file is provided. To set up the schema, use the MySQL CLI to give the command `source db/schema.sql`, and optionall `source db/seeds.sql` to insert a sample set of values into the tables.
## Usage
In the terminal, enter `node index.js` in the main directory. The user is presented a main menu. Use the arrow keys to select an appropriate action.  

For actions that require inputs, there are validation checks to ensure that no faulty input is used. After adding a new employee, role, or department, the results can immediately be seen by their associating view options.
## Contributing
This repository is actively monitored! Please go ahead and submit pull requests if you like!
## License
©Terrence Chan 2021. This project is published under the Apache license.
## Questions
For questions, contact me at developer@terrencejchan.com.  
To view other projects by me, visit my [GitHub account](https://github.com/TerrenceJChan).
