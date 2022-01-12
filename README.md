# Github Gists

The application is an api to get gists from github as well as mark/unmark them as favorites

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
curl --location --request PUT 'http://localhost:3000/api/v1/gist/favorite/${gistId}'
```
### Unfavorite a gist
```
curl --location --request PUT 'http://localhost:3000/api/v1/gist/unfavorite/${gistId}'
```

## Time Required to build
It took me 3 hours to build this API application.

## How to Run
Clone locally and run
```
npm install
```
### Pre-requisites
- NodeJS
- Node Package Manager

## Author
Vinit Khandelwal

## License
MIT