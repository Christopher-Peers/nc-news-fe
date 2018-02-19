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

        if (this.state.topicsLoaded) {
            return (
                <nav>
                    <h1>Navbar Goes Here</h1>
                    {this.state.topics.map(el => (<p>{el.title}</p>))}
                </nav>
            )
        } else {
            return (
                <nav>
                    <h1>Navbar Goes Here</h1>
                    <p>Loading...</p>
                </nav>
            )
        }

    }

}

export default Navbar;