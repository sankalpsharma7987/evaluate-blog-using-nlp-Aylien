Evaluate Article or Blog

Description
This project is made with HTML, CSS and JavaScript, as part of the Udacity Front-Developer Nano-Degree Program.

General info
The project required to build a page that takes URL for an article or blog to be evaluated by a third-party API. The third-party API used in this case is Meaning-Cloud that evaluates the sentiments associated with the content that is present in the article or blog. The project also required to use webpack to configure and manage the assets such as JavaScript and CSS files that are used in the project.

Project Behavior
The project has two options, either to let user enter the text or enter the URL whose content is to be evaluated by the Meaning-Cloud API
There are different prod and test environments defined for the app to choose the configuration based on the build that is created
The express server reaches out to the third-party API and returns the sentiment results to the browser to render on the screen.
The API key and port are hidden. Please refer to the build-dev and build-prod scripts, in package.json file, to create the .env files required.
Enter the API key and port of your choice in those env files to run the project.
There are two separate files present for the webpack prod and dev configuration. The correct file is used based on the script that is run, either build-dev or build-prod.
The webpack.prod.config file contains configuration to minimize the asset files that will be transferred to general user, over the network. This is to improve the performance of the app.