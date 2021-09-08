import React from 'react'
import { Link } from "react-router-dom"
import { LoginOutlined, InfoCircleOutlined } from '@ant-design/icons'

const AddingСharacter = () => {
    return (
        <div className="container">
            <div className="header">
                <InfoCircleOutlined />
                <Link to="/"> 
                    <LoginOutlined />
                </Link>
            </div>
            <div className="contant">
                
            </div>
        </div>
    )
}

export default AddingСharacter