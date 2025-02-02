# Online IDE

Tiny and Minimal Code Editor supports multiple languages

## Table of Contents

- [NanoDe](#nanode)
  - [Table of Contents](#table-of-contents)
    - [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Screenshots](#screenshots)
      - [Desktop View](#desktop-view)
      - [Links](#links)
    - [My Process](#my-process)
      - [Built with](#built-with)
      - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
      - [References](#references)
      - [Articles](#articles)
    - [Author](#author)

### Overview

NanoDe is a tiny and minimal code editor. It supports multiple languages and has a simple UI. Primarily built with React, Material UI, and Monaco Editor. It uses [Judge0](https://judge0.com/) for code compilations under the hood.

### The Challenge

The challenge was to develop a minimal code editor with multiple language supports. This editor should have

- A simple UI
- Some basic customization options like, font face, font size, theme vice-versa.
- A user can search from the language selectors. The language list might be huge so, it better to implement a search functionality.
- It should have a intuiting code editor interface with minimum support for highlighting, auto-completion, and code snippets.
- There should be a `STDIN` and `STDOUT` section to show the input and output of the code.

### Screenshots

#### Desktop View

![Desktop View](screenshots/NanoDE%20_Desktop_View.png)

#### Links

- Live Site: https://nanode.vercel.app/
- Source Code: https://github.com/moeen-mahmud/NanoDe-Online-IDE

### My Process

#### Built with

- Frontend: React, Material UI, Monaco Editor
- API: Judge0
- Build Tools: Vite
- Deployment: Vercel
- Architecture: Atomic Design

#### What I learned

- How to work with monaco editor specifically with React.
- How to use Monaco Editor API to customize the editor.
- How to use Judge0 API to compile and run the code.
- How to use Webhooks to get the callback results from the API.

### Continued development

- I will try to add more features to this project like, multiple theme support, sample code generation for each languages, code sharing, snippet making.
- I will try to add more languages to the language selector.
- Login and Registration module to save the code snippets and share them with others.
- Pair programming module to code with others.
- User profile module to show the user's profile and their code snippets.
- Customized dashboard for each user.

