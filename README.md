# RateMeFT

Deployed application is at http://ratemeft-env.mfmi26kh72.eu-west-1.elasticbeanstalk.com/

#### Brief:
Build a website hosted on the cloud that stores a rating score for FT.com. My aim for this project is to deploy this to AWS, implement continuous deployment with Docker and create Cloudformation templates.

#### Tools & Tech
Tools and technology that I am using for this project include Javascript, Node, AWS (Elastic Beanstalk, Cloudformation & DynamoDB)

#### Process
* First, initiate a Node application with Express that renders a single homepage
* Initialise testing tools (Mocha & Chai) and render a welcome message on the homepage.
* Deploy application to AWS ElasticBeanstalk
* Split project directory in to src, views and test folders.
* Add a dropdown menu to homepage that sends a post request to /success page with the value selected from the menu.

At this point I realised that I had forgotten to add a .gitignore file and add node_modules to it. This resulted in previous commits being over 100,000 additions. I realised this, added the .gitignore file and have learnt a valuable lesson!

* Save user selection and carry through to the view in order to test.
