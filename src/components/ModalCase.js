// import React from 'react'

// export default function ModalCase({ setIsOpen, film }) {
//     return (
//         <div className='modal-show' onClick={() => setIsOpen(false)}>
//             <div id='modal1' className='modal' style={{ display: 'block', top: '35%' }}>
//                 <div className='modal-content'>
//                     <h4>Video for {film.Title} </h4>
//                     <p><iframe width="100%" height="400px" src='{film.clip}' title='{film.Title}' frameBorder="0"
//                         allow='accelerometer; autoplay; clipboard-write; encrypted-media;
//                     gynroscope; picture-in-picture' allowFullScreen /></p>
//                 </div>
//                 <div className='modal-footer'>
//                     <a className='modal-close red-text'>Close</a>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React from "react";


const ModalCase = ({ setIsOpen, film }) => {
    return (
        
        <div className="modal-show" onClick={() => setIsOpen(false)}>
            
            <div id="modal1" className="modal" style={{ display: 'block', top: "35%" }}>
                <div className="modal-content">
                    <h4>Video for {film.Title}</h4>
                    <p><iframe width="100%" height="400px" src={film.clip} title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
                </div>
                <div className="modal-footer">
                    <a className="modal-close waves-effect waves-green btn-flat">X</a>
                </div>
            </div>
        </div>
    )
}
export default ModalCase;
