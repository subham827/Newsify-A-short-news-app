import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes  from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import style from './index.css'



export class News extends Component {
    static defaultProps = {
        country: "in",
        category: "business",
        title: "general",
        // text : "goldenrod",
        mode : "light",
        nottext : 'white'
    
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        title: PropTypes.string,
        // text : PropTypes.string,
        mode : PropTypes.string,
        nottext : PropTypes.string
  }
  c = ""
   
  
  articles = []
    constructor(props){
        
        
        super(props);
        this.state = { articles: this.articles,
            page : 1,
        loading: false,
        
        
        totalResults : 0
    }

    }
async componentDidMount(){
    this.props.setProgress(10);
    
     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2562f29a404f4f8688bb55adbda939e8&page=1&pageSize=10`
     this.props.setProgress(25);
        this.setState({loading: true})
     let data = await fetch(url);
     this.props.setProgress(50);
     let parsedData = await data.json();
     this.props.setProgress(75);
     
     this.setState({articles: parsedData.articles, loading: false, 
            totalResults: parsedData.totalResults
    })
    this.props.setProgress(100);
    
    }

fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2562f29a404f4f8688bb55adbda939e8&page=${this.state.page+1}&pageSize=10`
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading: false})
    this.setState({
        articles: [...this.state.articles, ...parsedData.articles],
        
        page : this.state.page + 1,
        totalResults : parsedData.totalResults})
}
 

    render() {
        return (
            <>
    
                <h2 style={{color : this.props.text}} className='text-center my-3'>Top headlines <span style={{color:"red"}}>{this.props.title} </span> </h2>
            
                    <InfiniteScroll
                     dataLength={this.state.articles.length}
                     next = {this.fetchMoreData}
                        hasMore={this.state.articles.length < this.state.totalResults}
                        loader={<Spinner> </Spinner>} style={style}>  
                    <div className='container'>
                <div className='row'>
               { this.state.articles.map( (element) => {
                   
                   
                   
                   
                   
                   
                   return <div className='col-md-4' key={element.url}>
              <Newsitem  title={element.title===null ? element.title : element.title.slice(0,30)} description={element.description===null ? element.description : element.description.slice(0,70)} imageurl={element.urlToImage} newsurl={element.url} nottext={this.props.nottext} text = {this.props.text}/>
              </div>
                   
                })}
              </div>
              </div>
                </InfiniteScroll>
           
             
            </>
        )
    }
}

export default News
