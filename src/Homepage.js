import React from 'react';
import Articles from './components/Articles';
import TopPosters from './components/TopPosters';

const Homepage = () => {
    return (
        <div className="row">
            <Articles />
            <TopPosters />
        </div>
    )
}

export default Homepage;