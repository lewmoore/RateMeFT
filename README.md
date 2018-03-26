# RateMeFT

Deployed application is at http://ratemeft-env.mfmi26kh72.eu-west-1.elasticbeanstalk.com/

The introduction of a local MongoDB database seems to have affected the deployment and as such doesn't seem to be sending the POST request to the success page. However this does work in localhost with the Mongo shell open. This is something I am investigating.

#### Brief:
Build a website hosted on the cloud that stores a rating score for FT.com. Provide a diagram of your site architecture showing key components that illustrate your approach.

My aim for this project is to deploy this to AWS, implement continuous deployment with Docker and create Cloudformation templates.

For bonus credit consider using one or more of these techniques:
* Templated infrastructure as code.
* Automated testing
* Origami  Components/FT look and feel
* The ability to view the ratings/results

#### Installation Instructions
To run this application locally:

Please note you must have MongoDB installed to run this. To do this:
* Run `brew update` and `brew install mongodb`

* Clone this repo and run `cd RateMeFT`
* Open the app in your favourite text editor and run `npm install` to install dependencies
* Run `npm start` and the application will be on localhost:8081

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

#### Reflection

##### What went well
I really enjoyed this exercise. I enjoyed integrating the application with AWS and using it to build a pipeline from pushing the code to Github, testing and deploying the code automatically if the build passes. I felt (mostly) comfortable developing the application with Javascript and using Node on the backend.

I feel I learnt a lot about AWS, but at the same time also felt that I only scratched the surface. I enjoyed experimenting with new build tools and introductions to Docker and how it benefits projects.

Overall, I really enjoyed this project and the learning experience of the possibilities of AWS and the benefits of automation in projects.

#### Even better if
I feel I struggled most at a few points within this exercise. Firstly, realising and rectifying my mistakes with the node_modules folder did set me back a small bit, but I also felt this was good practice for rectifying problems you've made and continuing with the task at hand.

The database proved to be a challenge for me. Initially, I spun up a Postgres RDS and linked this to my Elastic Beanstalk application, however I wasn't able to hook this up to my application. So, I decided to try and create a local MongoDB database and connect this up. Again, this proved somewhat of a challenge but also a great learning opportunity for MongoDB as I'd never used this before!

Given more time, I would have loved to explore Cloudformation, Ansible and Docker more and how I can incorporate these to a project. I feel that I opened many doors by simply looking at these technologies, so this is something that I am definitely going to continue to look at.

Also, I would have liked to be able to connect my application to my AWS RDS instance rather than having a local DB. Again, this is something that I will look at.
