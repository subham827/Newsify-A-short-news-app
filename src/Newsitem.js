import { getByTitle } from '@testing-library/react'
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation'
import React, { Component } from 'react'
import style from './index.css'
// recp

export class Newsitem extends Component {
  

    render() {
       let  {title,description, imageurl,newsurl} = this.props;
        return (
            <div className='my-3' >
              
                <div class="card " style={{width: "18rem", border: 0,color: this.props.nottext}}>
  <img src= {!imageurl ?"http://www.clker.com/cliparts/2/3/7/3/k/J/monkey-news-md.png":imageurl}class="card-img-top" alt="..." />
  <div class="card-body " id="cared" style={{backgroundColor: this.props.nottext, borderBlockColor: this.props.nottext}} >
    <h5 class="card-title" style={{color : this.props.text}}>{title}...</h5>
    <p class="card-text" style={{color : this.props.text}}>{description}...</p>
    <div className='container d-flex justify-content-between'>
    <a rel='noreferrer' href={newsurl} target="_blank" class="btn btn-sm btn-dark" >Read More</a>
    
    </div>
  </div>
</div>
            </div>
        )
    }
}

export default Newsitem
