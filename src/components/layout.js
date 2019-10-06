import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Sidebar from "./sidebar"
import RecentPosts from './recent-posts'
import FeaturedBots from './featured-bots'
import "./layout.scss"
import twtrIcon from '../images/twitter-icon.svg'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  font-family: 'Roboto', sans-serif;
`

const PageContent = styled.div`
  flex: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`
const Main = styled.main`
  flex: 1;
  margin-right: 25px;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`

const Footer = styled.footer`
  margin-top: 50px;
`

const Socials = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  padding-bottom: 10px;

  img {
    width: 50px;
    height: 50px;

    &:first-of-type {
      margin-right: 10px;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} siteDesc={data.site.siteMetadata.description} />
      <Container>
        <PageContent>
          <Main>{children}</Main>
          <Sidebar>
            <RecentPosts />
            <FeaturedBots />
          </Sidebar>
        </PageContent>

        <Footer>
          <Socials>
          <a href="https://twitter.com/crocbuzz">
              <img src={twtrIcon} alt="twitter icon" />
            </a>
          </Socials>
          © {new Date().getFullYear()} Alex Crocker, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
