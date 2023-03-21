# Personal Portfolio Website

[Link To My Website](https://tylerchen.ca)

This frontend website was built to demonstrate my projects that I spent countless hours on.

---

## 💻 Tech Stack

The tech stack that I used for this project are

### `TypeScript`

I used typescript because after developing with vanilla JavaScript, I realized that I could develop a lot faster with auto-complete. Know exactly what type of variable is passed around speeds up the process of debugging.

### `React`

React allows me to write reusable code. Instead of copying the same Navbar on each page, I just need to make one React component that can be displayed on each page. When I need to change that element, I only need to change it once instead of changing each copy.

### `Styled-Components`

Styled Components allow me to turn CSS into Components as well! Instead of having CSS styles exist as their own file, we create components from them. This also means that I can conditionally render styles by passing a prop to the styled component.

### `CI/CD`

GitLab CI allows me to deploy my changes immediately. Since this is a personal portfolio, and I am constantly working on projects, I wanted to make changing my website as easiest as possible! Thus, whenever I make changes to this repo, an updated one will be deployed immediately!

### `Docker`

Docker allows me to containerize my projects with their correct package versions as each of my docker containers can have their own version of NodeJS for example. It also allows me to quickly start up my website with only Docker installed.

### `Apache2 Web Server`

Apache allows me to serve websites to the public depending on which domain I have. It also allows me to reverse proxy to my docker containers! I use Apache instead of Nginx because Apache is harder to understand and thus being stubborn and challenging myself will allow me to learn Nginx a lot more easily.


## 😥 Challenges

- My biggest challenges for this project was getting the pipeline up and running. It was very difficult to find the proper documentation or tutorials to do what I wanted to do. I had spent a few days trying to figure out exactly how to get my GitLab runner to create those docker images inside a docker container. 
- I had also setup my own GitLab Docker Registry because I thought I needed that. 
- Connecting the GitLab's docker socket with my server's docker socket was also a learning curve.
- Finally, my last big challenge would probably be deciding what components should be components. I spent a lot of time experimenting and seeing exactly what pieces of code should become a component.


## 🔮 Future Work

### Tests
I am planning on creating tests that run periodically to check if my website is up and running. 

### Mobile Version
Currently the website is only made for desktop view, but soon I want to create a mobile version.