import React from 'react'
import { Link } from "gatsby"

import robotEmoji from '../images/robot.png'

const CTACard = () => (
    <div id="order" className="card cta"
        style={{
            display: `flex`,
            flexFlow: `row wrap`,
            justifyContent: `center`,
            alignItems: `center`,
            padding: `25px`,
            boxShadow: `rgb(236, 236, 236) 3px 3px 10px 0`,
            marginRight: `25px`,
            marginBottom: `25px`,
            borderRadius: `6px`,
        }}
    >
        <img src={robotEmoji} alt="apple robot face emoji" style={{ display: `inline-flex`, width: `150px`, height: `150px`, marginRight: `25px` }} />
        <div className="text-group"
            style={{
                flex: `2`,
                display: `flex`,
                flexDirection: `column`
            }}
        >
            <h3>Need a custom chat bot?</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim numquam, culpa minus, nihil nostrum cum voluptatum sunt, magni consequatur nobis eveniet dignissimos harum deserunt tenetur doloribus quisquam aperiam impedit? Placeat.</p>
            <Link to="/order" style={{
                width: `200px`,
                height: `40px`,
                lineHeight: `40px`,
                borderRadius: `6px`,
                backgroundColor: `#F46912`,
                color: `#ffffff`,
                textTransform: `uppercase`,
                textDecoration: `none`,
                textAlign: `center`,
            }}>Order Now</Link>
        </div>
        
    </div>
)
  
export default CTACard