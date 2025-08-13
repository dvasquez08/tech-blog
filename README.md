# Tech Things HQ

A very simple page that talks about all things Tech! The site has not launched yet and is still currently being built.

## How it works

The visitor is first welcomed at the home screen which starts off at the hero section, then shows all the blog post cards as they scroll down. The nav featires a search bar where users can look up blogs on the site.

### Hero section:

<img width="802" height="413" alt="1" src="https://github.com/user-attachments/assets/ce574229-b762-46b0-8ea9-86769b2d236c" />

### Blog section showing  the blog post cards:

<img width="802" height="413" alt="1" src="https://github.com/user-attachments/assets/924d9f1b-d252-43ce-a695-d8618b4ea2dc" />


After that, the visitor can click on any of the card, in which they are taken to a page that loads the entire blog post. 


<img width="757" height="413" alt="2" src="https://github.com/user-attachments/assets/c7b52643-c6c9-495d-b4ff-dad078925072" />


## How the Blog Posts Are Created

Believe or not, all these blog posts are written by AI! Using the Gemini 2.5 Flash model, these blogs are powered by an automated n8n workflow that runs on a schedule that runs every night. The workflow gets its inspiration by various RSS feeds, writes the blog, creates an image that fits the text, sends it to a Firestore database, then the website pulls blog posts from the database. Here is how the flow looks like right now:


<img width="596" height="200" alt="3" src="https://github.com/user-attachments/assets/ead621d0-824b-4b1d-a7ba-665eaee718f5" /> 

[Take a look at t he site here!](https://techthingshq.com)
