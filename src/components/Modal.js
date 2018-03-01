import React from 'react';

const Modal = (props) => {
  
  return (
    <div className="d-none d-md-inline pointer">
      <span className="d-none d-md-inline pointer" data-toggle="modal" data-target="#exampleModal" >{`  ${props.authorName}`}</span>


      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{props.authorName}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h3>Last 5 Articles</h3>
              <h4>User Rating ***</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;