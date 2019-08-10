workflow "Build and deploy on push" {
  on = "push"
  resolves = ["deploy-gh-pages"]
}

action "deploy-gh-pages" {
  uses = "JamesIves/github-pages-deploy-action@1.1.3"
}
