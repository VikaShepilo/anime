import React from 'react'

export class InfoСharacter extends React.Component {
    state = {
    arr: [],
    }

    componentDidMount() {
        fetch('http://localhost:3000/posts')
            .then(result => result.json())
            .then(result => {
                this.setState({
                    arr: result,
                })
            })
    }

    render() {
        return (
            <div >
            {
                this.state.arr.map(e => (
                    <div class = "ListInfo" kew = {e.id}>
                        <img src={e.img} alt={e.character} width="210" height="260" />
                        {' '}
                        {'Персонаж: '}{e.character}
                    </div>
                ))
            }
            </div>
        );
    }
}
//json-server --watch db.json