# Github Gists

The application is an api to get gists from github as well as mark/unmark them as favorites.

1. The API is built using Express library.

2. Has funcdamental security implemented as middlewares using hpp, cors, xss, helmet

3. Has rate limiter

4. All inputs are validated with joi

5. Has a uniform API response

6. Has errors handled explicitly with errorHandler middleware

## Gists

### Get Gists by Username

```
curl --location --request GET 'http://localhost:3000/api/v1/gist/user/${username}'
```

### Get Gist by Id

```
curl --location --request GET 'http://localhost:3000/api/v1/gist/id/${gistId}'
```

### Get favorited Gists

```
curl --location --request GET 'http://localhost:3000/api/v1/gist/favorite'
```
### Favorite a Gist
```
curl --location --request PUT 'http://localhost:3000/api/v1/gist/favorite/do/${gistId}'
```
### Unfavorite a gist
```
curl --location --request PUT 'http://localhost:3000/api/v1/gist/favorite/undo/${gistId}'
```

## How to Run

1. Clone locally and run

```
npm install
```

2. Create a database named gists on PostgreSQL running locally

3. Add .env file with variables mentioned in .env_example

4. test application

```
npm run test
```

5. run application for development

```
npm run dev
```

6. run application for development

```
npm start
```

### Pre-requisites
- NodeJS

## Author
Vinit Khandelwal

## License
MIT