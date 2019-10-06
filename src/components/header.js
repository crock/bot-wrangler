import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import logo from '../images/logo.svg'

const StyledHeader = styled.header`
  background-color: #F46912;
  margin-bottom: 1.45rem;
`

const Wrap = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`

const Logo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  img {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 15px;
    width: 50px;
    height: 50px;
  }
`

const SiteTitle = styled.h1`
  margin: 0;
  display: inline-block;
  font-family: Marta, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`

const SiteSlogan = styled.h2`
  margin-bottom: 0;
  color: #FCB826;
  font-size: 1.15rem;
  font-weight: 300;
`

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Navigation = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    flex-basis: 100%;
  }

  a {
    text-decoration: none;
    color: #FCB826;
    padding: 5px 10px;
  } 

  a:hover {
    color: white;
    position: relative;
  }

  .active {
    color: white;
    position: relative;
  }

  .active::after {
    content: '';
    display: block;
    position: absolute;
    background-color: white;
    width: 50%;
    height: 3px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  a:hover::after {
    content: '';
    display: block;
    position: absolute;
    background-color: white;
    width: 50%;
    height: 3px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Header = ({ siteTitle, siteDesc }) => (
  <StyledHeader>
    <Wrap>
      <Logo className="logo">
        <Link to="/">
          <img src={logo} alt="logo" width="100" />
        </Link>
        <TitleGroup>
          <SiteTitle>
            {siteTitle}
          </SiteTitle>
          <SiteSlogan>
            {siteDesc}
          </SiteSlogan>
        </TitleGroup>
      </Logo>
      
      <Navigation className="primary-nav">
        <Link to="/" activeClassName="active">Home</Link>
        <Link to="/blog" activeClassName="active">Blog</Link>
        <Link to="/order" activeClassName="active">Order</Link>
        {/* eslint-disable-next-line */}
        <a href="https://discord.gg/xXsssK" target="_blank">Discord</a>
      </Navigation>
    </Wrap>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDesc: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDesc: ``,
}

export default Header
