# RateMeFT

Deployed application is at http://ratemeft-env.mfmi26kh72.eu-west-1.elasticbeanstalk.com/

#### Brief:
Build a website hosted on the cloud that stores a rating score for FT.com. My aim for this project is to deploy this to AWS, implement continuous deployment with Docker and create Cloudformation templates.

#### Tools & Tech
I have done this exercise in Javascript, MongoDB and Node deployed to AWS with CircleCI, CodePipeline and Elastic Beanstalk.

#### Versions
Due to the nature of this task and the majority of technologies being new to me, I broke this project down into multiple versions. Those versions were as follows:

* MVP - Basic Node application hosted on AWS
* Version 1 - Dropdown rating feature added to homepage
* Version 2 - Storage of rating in database
* Version 3 - Continuous Integration and Testing of code using build tool
* Version 4 - Continuous Deployment of application to AWS Elastic Beanstalk environment

#### Process
* First, initiate a Node application with Express that renders a single homepage
* Initialise testing tools (Mocha & Chai) and render a welcome message on the homepage.
* Deploy application to AWS ElasticBeanstalk
* Split project directory in to src, views and test folders.
* Add a dropdown menu to homepage that sends a post request to /success page with the value selected from the menu.

At this point I realised that I had forgotten to add a .gitignore file and add node_modules to it. This resulted in previous commits being over 100,000 additions. I realised this, added the .gitignore file and have learnt a valuable lesson!

* Save user selection and carry through to the view in order to test.
* Re-deploy app to EB environment using EB CLI
* Added and made remote connection to PostGres DB to EB app using Amazon RDS
* Add Dockerfile and push image to Dockerhub
* Begin to add MongoDB database to application with Mongoose to store rating value in collection
* Add CircleCI for continuous integration and automated unit testing
* Extended pipeline with AWS CodePipeline for Continuous Deployment to AWS ElasticBeanstalk application
* Add Origami header module to homepage & success page
