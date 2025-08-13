# Tech Things HQ

A very simple page that talks about all things Tech! The site has not launched yet and is still currently being built.

## How it works

The visitor is first welcomed at the home screen which shows all the cards of the blog posts. At this time, the image is a placeholder with a Davtek logo. This will change to a dynamic image which is currently being worked on.


<img width="802" height="413" alt="1" src="https://github.com/user-attachments/assets/ce574229-b762-46b0-8ea9-86769b2d236c" />

<img width="802" height="413" alt="1" src="https://github.com/user-attachments/assets/924d9f1b-d252-43ce-a695-d8618b4ea2dc" />


After that, the visitor can click on any of the card, in which they are taken to a page that loads the entire blog post. 


<img width="757" height="413" alt="2" src="https://github.com/user-attachments/assets/c7b52643-c6c9-495d-b4ff-dad078925072" />


## How the Blog Posts Are Created

Believe or not, all these blog posts are written by AI! Using the Gemini 2.5 Flash model, these blogs are powered by an automated n8n workflow that runs on a schedule to run these two times a day. The workflow writes the blog, sends it to a Firestore database, then the website pulls blog posts from the database. Here is how the flow looks like right now:


<img width="596" height="200" alt="3" src="https://github.com/user-attachments/assets/ead621d0-824b-4b1d-a7ba-665eaee718f5" />


Right now, the image generation portion is shutdown as this is the part that is being worked on and is in testing. Once the image generation portion is completed, the website will load the images meant for their respective blog posts. 
