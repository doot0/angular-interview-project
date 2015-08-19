### Angular Interview Project

**Do not fork this repository.** Instead, clone it and change the `git refs` to your own GitHub repo!

The purpose of this take-home interview project is to assess your frontend development skills in a more real-world context. This will be a very challenging project, and there will be a strict deadline of **3 days**.

### Expectations

- You write this code yourself. People tend to have a "signature" when they write code. Given this, I can recognize copy-pasted code very easily.
- Code must be clean, readable, and commented where appropriate. 
- You develop the most elegant solution, not the hackiest one. Use your design patterns.
- **Absolutely no css bootstrap or other css frameworks (except less or sass)**. This job will require you to produce non-boilerplated css and html markdown. As such, I expect you to have a full and thorough understanding of their intricacies. In addition, overreliance on bootstrap drastically dilutes your understanding of these markdown languages.
- The design must be polished to the best of your ability, and must be mobile responsive. 
- Project must be written in Angular.js. The reason for this is because that is what the current frontend is written in. You are allowed to use any Angular.js module.
- The project must be organized in a way that allows it to scale gracefully.

### Specifications

The goal of this project is to produce a newsfeed for activities. 

The idea is this: 

- As a user, you see a sidebar with a list of your "friends". You can click each friend in the sidebar and see their list of generated content. Or, you can click a button (e.g "All") to see the canonical newsfeed.

- Newsfeed stories can have different types. For example, you can have a newsfeed items that say "X added Y as a friend", "P liked Z item", "T uploaded a new photo". The design of the newsfeed items must be consistent (e.g. each have the ability to comment, favourite, etc). Hint: newsfeed items have 3 components: subject, action, object (e.g. X[subject] added[action] Y[object]).

There are additional specifications that must be completed as well:

- On each server call, an access token must be provided. You can mock this as a random string.
- **You must find a way to mock API calls** in a way that is **invisible to both** the controller and the API itself so that they can produce the data you need to do the frontend, without requiring a real server.
- You must provide console logs. Additionally, you must set up the project to automatically modify all console logs so that you get the following behaviour:
  - `console.info`: All `console.info` logs are prepended automatically with "info:"
  - `console.log`: All `console.log` logs are prepended automatically with "log:"
  - `console.warn`: All `console.info` logs are prepended automatically with "warn:"
  - `console.error`: All `console.log` logs are prepended automatically with "error:"
