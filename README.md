# Trisha's Portfolio
- Domain: [trisha-aguinaldo.com](http://www.trisha-aguinaldo.com/)
- [https://github.com/kronicle114/trisha-aguinaldo](https://github.com/kronicle114/trisha-aguinaldo)

## Tech Stack
- Made using React Hooks
- Plain old CSS
- Deployed using Heroku and Google Domains

## Contact Me
[LinkedIn](https://www.linkedin.com/in/paguinaldo/)
trisha.aguinaldo@gmail.com


## Dev Instructions
- Run `npm start`
- Added serviceWorker to handle caching / chunking issues after deployment [pwa](https://blog.bitsrc.io/build-progressive-web-apps-with-react-part-1-63f1fbc564a6).
```bash
yarn build
serve -s build
```

## Deployment Instructions
- [ ] Check that you are logged in to heroku `heroku login`
- [ ] Check that you have the correct git remotes set up: [here](https://devcenter.heroku.com/articles/git)
- [ ] `git add -A; git commit -m "deploy"; git push heroku master;`
