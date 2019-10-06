import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const FeatBot = styled.div`
    width: 100%;
    height: 100px;
    max-width: 300px;
    box-shadow: rgb(236, 236, 236) 3px 3px 10px 0;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    margin-bottom: 15px;

    img {
        margin-bottom: 0;
        margin-right: 15px;
        border-radius: 50%;
        border: 3px solid #F46912;
        width: 48px;
        height: 48px;
    }
`

const Widget = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h5 {
        font-size: 1.35rem;
        font-weight: bold;
    }
`

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.75rem;
`

const BotTitle = styled(Link)`
    text-decoration: none;
    color: #F46912;
    font-weight: bold;
`

const BotLang = styled.small`
    color: grey;
    text-transform: uppercase;
`

const FeaturedBots = () => (
        <StaticQuery
          query={graphql`
            query FeaturedBotsQuery {
                allMarkdownRemark(limit: 3) {
                    edges {
                        node {
                            id
                            frontmatter {
                                title
                                slug
                                botLang
                                image
                            }
                        }
                    }
                }
            }
          `}
          render={data => {
            return (
                <Widget className="featured-bots">
                    <h5>Featured Bots</h5>
                    {
                        data.allMarkdownRemark.edges.map(edge => {
                            const { node } = edge
                            const bot = node
                            return (
                                <FeatBot id={bot.id} key={bot.id}>
                                    <img src={`/${bot.frontmatter.image}`} alt={bot.frontmatter.title} />
                                    <TextGroup>
                                        <BotTitle to={`/bot/${bot.frontmatter.slug}`} className="bot-title">{bot.frontmatter.title}</BotTitle>
                                        <BotLang className="bot-lang">{ bot.frontmatter.botLang }</BotLang>
                                    </TextGroup>
                                </FeatBot>
                            )
                        })
                    }
                </Widget>
            )
          }}
        />
)

export default FeaturedBots