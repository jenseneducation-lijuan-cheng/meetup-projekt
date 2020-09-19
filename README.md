# meetup-projekt

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Docker Heroku
```
heroku login
```
###
```
docker ps
```
###
```
heroku container:login
```
###
```
heroku container:push -a meetup-lijuan web
```
###
```
heroku container:release -a meetup-lijuan web
```
###
```
ps:scale web=1 -a meetup-lijuan
```
