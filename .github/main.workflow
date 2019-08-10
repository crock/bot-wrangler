workflow "Build and deploy on push" {
  on = "push"
  resolves = ["deploy-gh-pages"]
}

action "deploy-gh-pages" {
  uses = "JamesIves/github-pages-deploy-action@1.1.3"
  env = {
    BUILD_SCRIPT = "npm install && npm run-script build"
    BRANCH = "gh-pages"
    FOLDER = "public"
    CNAME = "botwrangler.me"
    COMMIT_EMAIL = "hello@crock.dev"
    COMMIT_NAME = "Alex Crocker"
  }
  secrets = [
    "ACCESS_TOKEN",
  ]
}
