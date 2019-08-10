import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTACard from '../components/cta-card'
import BotCard from '../components/bot-card'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CTACard />
    <div className="bot-list">
        <StaticQuery
          query={graphql`
            query BotsQuery {
              allWordpressWpBot {
                edges {
                  node {
                    id
                    wordpress_id
                    title
                    slug
                    acf {
                      preview_server
                    }
                    author {
                      id
                      wordpress_id
                      name
                      slug
                    }
                    content
                    excerpt
                    featured_media {
                      source_url
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            return data.allWordpressWpBot.edges.map(bot => (
              <BotCard botData={bot.node} />
            ))
          }}
        />
    </div>
  </Layout>
)

export default IndexPage
