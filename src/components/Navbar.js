import React from 'react';

class Navbar extends React.Component {

    state = {
        topics: [],
        topicsLoaded: false
    }

    fetchTopics = () => {
        return fetch(`${process.env.REACT_APP_API_URL}/topics`)
            .then(buffer => buffer.json())
            .then(topics => topics)
            .catch(err => console.log(err));
    }

    componentWillMount() {
        this.fetchTopics()
            .then(res => this.setState({
                topics: res.topics,
                topicsLoaded: true
            }))
    }

    render() {
        
        return (
            <h1>Navbar Goes Here</h1>
        )
    }

}

export default Navbar;