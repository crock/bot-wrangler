const path = require('path')
const slash = require('slash')
const _ = require('lodash');

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const result = await graphql(
      `
      {
        allTumblrPost(filter: {state: {eq: "published"}}) {
          edges {
            node {
              id
              slug
              summary
              tags
              timestamp
              title
              type
              date
              trail {
                content
              }
            }
          }
          totalCount
        },
        allMarkdownRemark {
          edges {
            node {
              id
              html
              excerpt(format: PLAIN)
              frontmatter {
                botLang
                maintainers
                openSource
                previewServer
                repo
                slug
                tags
                title
                image
                featured
              }
            }
          }
        }
      }
      `
    )
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

    const postTemplate = path.resolve(`./src/templates/post.js`)
    _.each(result.data.allTumblrPost.edges, edge => {
        const { node } = edge
        const post = node
        createPage({
            path: `/blog/${post.slug}`,
            component: slash(postTemplate),
            context: {
                title: post.title,
                content: post.trail[0].content,
                slug: post.slug,
                excerpt: post.summary,
                date: post.date,
                timestamp: post.timestamp,
                tags: post.tags,
            },
        })
    })

    const botTemplate = path.resolve('./src/templates/bot.js')
    _.each(result.data.allMarkdownRemark.edges, edge => {
      const { node } = edge
      const bot = node
      createPage({
        path: `/bot/${bot.frontmatter.slug}`,
        component: slash(botTemplate),
        context: {
            content: bot.html,
            excerpt: bot.excerpt,
            data: bot.frontmatter
        },
      })
    })
  }