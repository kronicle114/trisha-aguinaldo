# Trisha's Portfolio
- Domain: [trisha-aguinaldo.com](http://www.trisha-aguinaldo.com/)
- [https://github.com/kronicle114/trisha-aguinaldo](https://github.com/kronicle114/trisha-aguinaldo)

## Tech Stack
- Vert quick frontend only portfolio website using JavaScript
- Used create-react-app and React Hooks
- Plain old CSS
- Deployed using Heroku and Google Domains
## Dev Instructions
- Clone repo `git clone https://github.com/kronicle114/trisha-aguinaldo.git`
- Install dependencies `npm install`
- Run `npm start`
## Notable Updates
- Added serviceWorker to handle caching / chunking issues after deployment [pwa](https://blog.bitsrc.io/build-progressive-web-apps-with-react-part-1-63f1fbc564a6).
```bash
yarn build
serve -s build
```
## To-dos
- Migrate to MongoDB
- Then build blog section

## Deployment Instructions
- [ ] Check that you are logged into heroku `heroku login`
- [ ] Check that you have the correct git remotes set up: [here](https://devcenter.heroku.com/articles/git)
- [ ] `git add -A; git commit -m "deploy"; git push heroku master;`
