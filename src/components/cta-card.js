import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"

import img from '../images/megaphone.png'

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 25px;
    box-shadow: rgb(236, 236, 236) 3px 3px 10px 0;
    border-radius: 6px;
    margin: 25px 25px 25px 0;
    &:first-of-type { margin-top: 0 }
    @media screen and (max-width: 768px) {
        margin: 25px 0;
    }
`

const Image = styled.img`
    display: inline-flex;
    width: auto;
    height: 150px;
    margin-right: 25px;
`

const TextGroup = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
`

const StyledLink = styled(Link)`
    width: 200px;
    height: 40px;
    line-height: 40px;
    border: none;
    border-radius: 6px;
    background-color: #F46912;
    color: #ffffff;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
`

const CTACard = () => (
    <Container className="card cta-card">
        <Image src={img} alt="megaphone" />
        <TextGroup>
            <h3>Promote Your Bot!</h3>
            <p>Whether you want to sponsor a blog post or promote a product or service that you think my readers would be interested in, we offer a limited amount of advertising to take advantage of. Get in touch today!</p>
            <StyledLink to="/advertising">Tell Me More</StyledLink>
        </TextGroup>
    </Container>
)
  
export default CTACard