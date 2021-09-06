import React from 'react'
import { Link } from "react-router-dom"
import { CloseCircleOutlined } from '@ant-design/icons'

const Card = (props) => {
    let charecter = props.location.propsSearch
    console.log(charecter)
    console.log(charecter.dataId.id)
    return (
        <div className="container">
            <div className="contant">
                <Link to="/">
                    <div>
                        <CloseCircleOutlined />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Card