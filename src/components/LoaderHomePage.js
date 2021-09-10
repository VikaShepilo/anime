import React from 'react'

const LoaderHomePage = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="header-emblem">
                    <img className="imgEmblem" src="https://wiki.jcdn.ru/w/images/thumb/7/7a/Naruto_anime_logo.png/450px-Naruto_anime_logo.png" alt="naruto" />
                </div>
                <div className="header-button-addingСharacter">
                </div> 
                <div className="header-input-character"> 
                </div>
                <div className="header-end"> 
                </div>
            </div>
            <div className="contant">
                <img src="https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif" alt="loading" />
            </div>
        </div>
    );
}

export default LoaderHomePage