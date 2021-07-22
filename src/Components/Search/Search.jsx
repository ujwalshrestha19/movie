import React, { Component } from 'react';
import axios from 'axios';
import { img_300, unavailable } from '../../Config'
import './Search.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            hits: {},
            loading: false,
            message: '',
            poster: ''
        };
        this.cancel = '';
    }

    handleOnInputChange = (e) => {
        const query1 = e.target.value;
        this.setState({
            query: query1,
            loading: true,
            message: ''
        }, () => { this.search(1, query1) })
    }

    search = (updatedPageNo = '', query) => {
        const pageNumber = updatedPageNo ? `&page${updatedPageNo}` : '';
        const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=4ac982e1f4904afdb76e50333fcf1a46&query=${query}${pageNumber}`
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        if (this.cancel) {
            this.cancel.cancel();

        } else {
            this.cancel = axios.source;
            axios.get(searchURL, {
                cancelToken: source.token
            }).
                then(res => {
                    const resultNotFoundMsg = !res.data.results.length ?
                        'There are no more search results.' :
                        console.log(res.data.results.title)
                    this.setState({
                        hits: res.data.results,
                        message: resultNotFoundMsg,
                        loading: false
                    },
                    )
                })
                .catch(error => {
                    if (axios.isCancel(error) || error) {
                        this.setState({
                            loading: false,
                            error: "Failed to fetch data."

                        })
                    }
                })
        }




    };

    renderSearchResults = () => {
        const { hits, poster } = this.state;
        console.log(hits)

        if (Object.keys(hits).length && hits.length) {
            return (

                < div className="results-container" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'

                }} >
                    {
                        hits.map(item => {
                            console.log('runned')
                            return (

                                <div key={item.id} className="media" >
                                    <img src={item.poster_path ? `${img_300}/${item.poster_path}` :
                                        unavailable} alt={item.title} />
                                    <b className="title">{item.title}</b>

                                    {/* <span style={{ flex: 'column' }} className="title">{item.title}
                                        <img src={!poster ? `${img_300}/${item.poster_path}` : unavailable}
                                            alt={item.title} />
                                    </span> */}

                                </div>



                            )
                        })
                    }
                </div >

            )
        }
    }





    render() {
        const { query } = this.state;

        return (
            <div className="search_bar" style={{
                margin: 'auto',

            }} >
                <div className="button"><input

                    type="text"
                    name="query"
                    value={this.state.value}
                    onChange={this.handleOnInputChange}
                    placeholder="Type something to search"
                /></div>

                {/* results */}
                {query ? this.renderSearchResults() : ''}
            </div>
        );
    }
}

export default App;