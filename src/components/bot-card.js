import React from 'react'
import { Link } from 'gatsby'
import { Z_BLOCK } from 'zlib';

const BotCard = ({ botData }) => {
    const { title, slug, author, acf, content, excerpt, featured_media, wordpress_id } = botData

    return (
        <div className="card bot-card"
            style={{
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `center`,
                alignItems: `center`,
                padding: `25px`,
                boxShadow: `rgb(236, 236, 236) 3px 3px 10px 0`,
                borderRadius: `6px`,
            }}
        >
            <img src={featured_media.source_url} alt="bot avatar" width="150" height="150"
                style={{
                    border: `3px solid #F46912`,
                    display: `block`,
                    margin: `0 auto`,
                    borderRadius: `50%`,
                }}
            />
            <h4 style={{marginBottom: 0, marginTop: `15px`}}>{title}</h4>
            <div style={{marginBottom: `25px`, fontSize: `0.8rem`, color: `darkgrey`}} className="bot-meta"><strong>Creator:</strong> <a href="#">{author.name}</a></div>
            <div style={{textAlign: `center`}} dangerouslySetInnerHTML={{ __html: excerpt }}></div>
            <Link to={`/bot/${slug}`}
                style={{
                    width: `200px`,
                    height: `40px`,
                    lineHeight: `40px`,
                    borderRadius: `6px`,
                    backgroundColor: `#F46912`,
                    color: `#ffffff`,
                    textTransform: `uppercase`,
                    textDecoration: `none`,
                    textAlign: `center`,
                    marginTop: `25px`,
                }}
            >View Details</Link>
        </div>
    )
}

export default BotCard