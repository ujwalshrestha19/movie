import React from 'react'
import axios from 'axios';
import SingleMovie from './SingleMovie/SingleMovie.js';
import Search from './Search/Search.jsx'

export default class Movies extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            content: [],
            visible: 1,
            error: false,

        }


        // this.loadMore = this.loadMore.bind(this);


    };

    // fetchMovie = async () => {
    //     const { content } = this.state;
    //     const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=4ac982e1f4904afdb76e50333fcf1a46`)
    //     this.setState({
    //         content: data
    //     })

    // }
    // loadMore() {
    //     this.setState((prev) => {
    //         return { visible: prev.visible + 4 };


    //     });
    // }
    componentDidMount() {
        axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=4ac982e1f4904afdb76e50333fcf1a46").
            then(
                res => {
                    this.setState({
                        content: res.data

                    });


                }).catch(error => {
                    console.error(error);
                    this.setState({
                        error: true
                    });
                });

    }


    render() {
        const { content, showHide1, showHide2 } = this.state;
        console.log(content.page);



        return (

            <div>
                {/* {this.state.content.slice(0, this.state.visible).map((item, index) => {
                    return (

                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>

                                <Link className="btn btn-primary" to={{
                                    pathname: "/single",
                                    aboutProps: {
                                        name: item.title
                                    }
                                }}>Go somewhere</Link>
                                <button onClick={this.fetchMovie}>Fetch</button>





                            </Card.Body>
                        </Card>
                    );
                })} */}
                <Search />
                {

                }
                <div className="movies"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around'

                    }}>
                    {

                        content && content.results && content.results.map((c, index) =>

                            < SingleMovie
                                key={c.id}
                                id={c.id}
                                poster={c.poster_path}
                                title={c.title || c.name}
                                date={c.forst_air_date || c.release_date}
                                media_type={c.media_type}
                                vote_average={c.vote_average}
                            />)}
                </div>

                {/* {console.log(Object.keys(content).map(key => console.log(key)))} */}


            </div >
        )

    }




}

