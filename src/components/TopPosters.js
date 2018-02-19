import React from 'react';

const TopPosters = () => {
    return (
        <aside className="d-none d-md-block col-md-4">
            <h2>TopPosters</h2>
        </aside>
    )
}

export default TopPosters;

   
// while (!props.topPosters) {
//     return (
//         <div className="hidden-sm-down">
//             <h3 className="text-center">Top Posters</h3>
//             <h4> Loading...</h4>
//         </div>
//     )
// }

// if (props.topPosters) {

//     let sorted = Object.entries(props.topPosters).sort((a, b) => {
//         if (a[1].posts < b[1].posts) -1
//         else if (a[1].posts > b[1].posts) 1
//         else return 0
//     }).slice(0,3)
    
//     return (
//         <div className="hidden-sm-down">
//             <h3 className="text-center">Top Posters</h3>
            
//             {sorted.map(user => {

//                 let image = (user[0] === 'weegembump' || user[0] === 'cooljmessy') ? 'https://avatars3.githubusercontent.com/u/6791502?v=3&s=200' : user[1].avatar;
//                 return (
//                     <div className="card mt-2" style={{"box-shadow": "4px 4px 3px Gainsboro"}}>
//                         <img className="card-img-top img-fluid" src={image} alt="Card image cap" />
//                         <div className="card-block card-footer d-flex justify-content-around">
//                             <h6 className="card-text text-center">{user[0]}</h6>
//                             <h6 className="text-center">Posts: {user[1].posts}</h6>
                            
//                         </div>

//                     </div>
//                 )
//             })}
//         </div>
//     )
// }