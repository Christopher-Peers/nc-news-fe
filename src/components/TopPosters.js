import React from 'react';

const TopPosters = (props) => {

    let ascendingPosters = Object.entries(props.topPosters).sort((a, b) => {
      if (a[1].posts < b[1].posts) return 1
      else if (a[1].posts > b[1].posts) return -1
      else return 0
    }).slice(0, 3)

    return (

      <aside className="d-none d-md-block col-md-3 mt-1">
        <h2 className="text-center">Top Posters</h2>

        {ascendingPosters.map((user, i) => {

          let image = (user[0] === 'weegembump' || user[0] === 'cooljmessy') ? 'https://avatars3.githubusercontent.com/u/6791502?v=3&s=200' : user[1].avatar;
          
          return (

            <div className="card mt-3" style={{ "boxShadow": "4px 4px 3px Gainsboro" }} key={`topPosterKey${i}`} >
              <img className="card-img-top img-fluid" src={image} alt={`${user[0]} avatar`} />
              <div className="card-block card-footer d-flex justify-content-around">
                <h6 className="card-text text-center">{user[0]}</h6>
                <h6 className="text-center">Posts: {user[1].posts}</h6>
              </div>
            </div>

          )
          
        })}
      </aside>
    )

}

export default TopPosters;