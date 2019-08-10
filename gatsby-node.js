const path = require('path')
const slash = require('slash')
const _ = require('lodash');

// For function createNodeField
// exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
//   const { createNode } = actions

//   const result = await graphql(
//     `
    // {
    //   allWordpressWpBot {
    //     edges {
    //       node {
    //         id
    //         wordpress_id
    //         title
    //         slug
    //         acf {
    //           preview_server
    //         }
    //         author {
    //           id
    //           wordpress_id
    //           name
    //           slug
    //         }
    //         content
    //         excerpt
    //         featured_media {
    //           source_url
    //         }
    //       }
    //     }
    //   }
    // }
//     `
//   )

//   const botData = _.each(result.data.allWordpressWpBot.edges, edge => {
//       return {
//           inviteLink: edge.node.acf.preview_server,
//           excerpt: edge.node.excerpt,
//           slug: edge.node.slug,
//           author: {
//             name: edge.node.author.name,
//             slug: edge.node.author.slug,
//             id: edge.node.wordpress_id,
//           },
//           featuredImage: edge.node.featured_media.sourceUrl,
//       }
//   })

//   const nodeContent = JSON.stringify(botData)
  
//     _.each(result.data.allWordpressWpBot.edges, edge => {
//       const nodeMeta = {
//           id: createNodeId(`bot-node-${edge.node.wordpress_id}`),
//           parent: null,
//           children: [],
//           internal: {
//             type: `BotCard`,
//             contentDigest: createContentDigest(botData),
//             content: nodeContent,
//             mediaType: `text/html`,
//           }
//       }

//       const node = Object.assign({}, botData, nodeMeta)
//       createNode(node)
//     })
// }

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    // Query for markdown nodes to use in creating pages.
    const result = await graphql(
      `
      {
        allWordpressPost {
          edges {
            node {
              id
              wordpress_id
              title
              slug
              author {
                id
                wordpress_id
                name
                slug
              }
              content
              date
              excerpt
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
    // Create pages for each markdown file.
    const blogTemplate = path.resolve(`./src/templates/blog.js`)
    let posts = result.data.allWordpressPost.edges.map(post => post.node)
    createPage({
        path: `/blog/`,
        component: slash(blogTemplate),
        context: {
            posts: posts
        }
    })

    const postTemplate = path.resolve(`./src/templates/post.js`)
    _.each(result.data.allWordpressPost.edges, edge => {
        createPage({
            // will be the url for the page
            path: `/blog/${edge.node.slug}`,
            // specify the component template of your choice
            component: slash(postTemplate),
            // In the ^template's GraphQL query, 'id' will be available
            // as a GraphQL variable to query for this posts's data.
            context: {
                id: edge.node.wordpress_id,
                title: edge.node.title,
                author: {
                    name: edge.node.author.name,
                    slug: edge.node.author.slug,
                    id: edge.node.author.wordpress_id,
                },
                content: edge.node.content,
                slug: edge.node.slug,
                excerpt: edge.node.excerpt,
                date: edge.node.date,
            },
        })
    })
  }