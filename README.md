# Tech Things HQ

A very simple page that talks about all things Tech! The site has not launched yet and is still currently being built.

## Howw it works

The visitor is first welcomed at the home screen which shows all the cards of the blog posts. At this time, the image is a placeholder with a Davtek logo. This will change to a dynamic image which is currently being worked on.

<img width="802" height="413" alt="1" src="https://github.com/user-attachments/assets/c1a1fa1e-98e2-4194-acef-83e8b43c7afe" />

After that, the visitor can click on any of the card, in which they are taken to a page that loads the entire blog post. 

<img width="757" height="413" alt="2" src="https://github.com/user-attachments/assets/7915a0a3-27b5-4877-8543-9c535ed81bdf" />

## How the Blog Posts Are Created

Believe or not, all these blog posts are written by AI! Using the Gemini 2.5 Flash model, these blogs are powered by an automated n8n workflow that runs on a schedule to run these two times a day. The workflow writes the blog, sends it to a Firestore database, then the website pulls blog posts from the database. Here is how the flow looks like right now:

<img width="596" height="200" alt="3" src="https://github.com/user-attachments/assets/8fe88880-c441-4427-82b5-852ca57545e4" />

Right now, the image generation portion is shutdown as this is the part that is being worked on and is in testing. Once the image generation portion is completed, the website will load the images meant for their respective blog posts. 
