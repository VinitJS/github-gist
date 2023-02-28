const main = require("../../app");
const supertest = require("supertest");

describe('Favorite Gists', () => {

    let app;
    beforeAll(async () => {
        app = await main
    });

    test("Favorite Do Gist By Id", async () => {
        const basePath = "/api/v1/gist";
        const id = "391a44f57e57c603ca101363da817637";
        const restPath = `/favorite/do/${id}`;
        await supertest(app).put(basePath + restPath)
            .expect(200)
            .then((response) => {
                result = JSON.parse(response.text)
                expect(result).toEqual({ success: true, data: {}, error: null });
        });
    });
    
    test("Get Favorite Gists", async () => {
        const basePath = "/api/v1/gist";
        const restPath = `/favorite`;
        await supertest(app).get(basePath + restPath)
            .expect(200)
            .then((response) => {
                result = JSON.parse(response.text)
                expect(result).toEqual({
                    "success": true,
                    "data": {
                      "favoriteGists": [
                        {
                          "url": "https://api.github.com/gists/391a44f57e57c603ca101363da817637",
                          "forks_url": "https://api.github.com/gists/391a44f57e57c603ca101363da817637/forks",
                          "commits_url": "https://api.github.com/gists/391a44f57e57c603ca101363da817637/commits",
                          "id": "391a44f57e57c603ca101363da817637",
                          "node_id": "G_kwDOAC69yNoAIDM5MWE0NGY1N2U1N2M2MDNjYTEwMTM2M2RhODE3NjM3",
                          "git_pull_url": "https://gist.github.com/391a44f57e57c603ca101363da817637.git",
                          "git_push_url": "https://gist.github.com/391a44f57e57c603ca101363da817637.git",
                          "html_url": "https://gist.github.com/391a44f57e57c603ca101363da817637",
                          "files": {
                            "openpgp.md": {
                              "filename": "openpgp.md",
                              "type": "text/markdown",
                              "language": "Markdown",
                              "raw_url": "https://gist.githubusercontent.com/abc/391a44f57e57c603ca101363da817637/raw/1aaf8c5afa57fc17aa2e803309d197cb51e5909e/openpgp.md",
                              "size": 52,
                              "truncated": false,
                              "content": "openpgp4fpr:b4dcfbc5fb9e983f02e4c90546327c86ab17044f"
                            }
                          },
                          "public": true,
                          "created_at": "2023-01-16T00:51:21Z",
                          "updated_at": "2023-01-16T00:51:21Z",
                          "description": "",
                          "comments": 0,
                          "user": null,
                          "comments_url": "https://api.github.com/gists/391a44f57e57c603ca101363da817637/comments",
                          "owner": {
                            "login": "abc",
                            "id": 3063240,
                            "node_id": "MDQ6VXNlcjMwNjMyNDA=",
                            "avatar_url": "https://avatars.githubusercontent.com/u/3063240?v=4",
                            "gravatar_id": "",
                            "url": "https://api.github.com/users/abc",
                            "html_url": "https://github.com/abc",
                            "followers_url": "https://api.github.com/users/abc/followers",
                            "following_url": "https://api.github.com/users/abc/following{/other_user}",
                            "gists_url": "https://api.github.com/users/abc/gists{/gist_id}",
                            "starred_url": "https://api.github.com/users/abc/starred{/owner}{/repo}",
                            "subscriptions_url": "https://api.github.com/users/abc/subscriptions",
                            "organizations_url": "https://api.github.com/users/abc/orgs",
                            "repos_url": "https://api.github.com/users/abc/repos",
                            "events_url": "https://api.github.com/users/abc/events{/privacy}",
                            "received_events_url": "https://api.github.com/users/abc/received_events",
                            "type": "User",
                            "site_admin": false
                          },
                          "forks": [],
                          "history": [
                            {
                              "user": {
                                "login": "abc",
                                "id": 3063240,
                                "node_id": "MDQ6VXNlcjMwNjMyNDA=",
                                "avatar_url": "https://avatars.githubusercontent.com/u/3063240?v=4",
                                "gravatar_id": "",
                                "url": "https://api.github.com/users/abc",
                                "html_url": "https://github.com/abc",
                                "followers_url": "https://api.github.com/users/abc/followers",
                                "following_url": "https://api.github.com/users/abc/following{/other_user}",
                                "gists_url": "https://api.github.com/users/abc/gists{/gist_id}",
                                "starred_url": "https://api.github.com/users/abc/starred{/owner}{/repo}",
                                "subscriptions_url": "https://api.github.com/users/abc/subscriptions",
                                "organizations_url": "https://api.github.com/users/abc/orgs",
                                "repos_url": "https://api.github.com/users/abc/repos",
                                "events_url": "https://api.github.com/users/abc/events{/privacy}",
                                "received_events_url": "https://api.github.com/users/abc/received_events",
                                "type": "User",
                                "site_admin": false
                              },
                              "version": "6a281b43ad511a9e0a50367406cae3b743b8cf95",
                              "committed_at": "2023-01-16T00:51:20Z",
                              "change_status": {
                                "total": 1,
                                "additions": 1,
                                "deletions": 0
                              },
                              "url": "https://api.github.com/gists/391a44f57e57c603ca101363da817637/6a281b43ad511a9e0a50367406cae3b743b8cf95"
                            }
                          ],
                          "truncated": false
                        }
                      ]
                    },
                    "error": null
                });
        });
    });
    
    test("Favorite Undo Gist By Id", async () => {
        const basePath = "/api/v1/gist";
        const id = "391a44f57e57c603ca101363da817637";
        const restPath = `/favorite/undo/${id}`;
        await supertest(app).put(basePath + restPath)
            .expect(200)
            .then((response) => {
                result = JSON.parse(response.text)
                expect(result).toEqual({ success: true, data: {}, error: null });
        });
    });
});