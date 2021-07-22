import React from 'react'
import { Carousel } from 'react-bootstrap'
import axios from 'axios';

import { img_500, unavailable } from '../../Config'

export default class ImageSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: [],
            error: false,

        }
    };

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
                <Carousel style={{ backgroundColor: 'black' }}>
                    {
                        content && content.results && content.results.map((c, index) => {
                            return (

                                <Carousel.Item>
                                    <Carousel.Caption>
                                        <h3 style={{ color: 'white', fontWeight: 'bold' }}>{c.title || c.name}</h3>
                                        <p style={{ color: 'white', fontWeight: 'bold' }}>{c.overview}</p>
                                    </Carousel.Caption>
                                    <img style={{ width: '100%', height: '800px', objectFit: 'fill' }}
                                        src={c.poster_path ? `${img_500}/${c.poster_path}` :
                                            unavailable} alt={c.title}
                                        className="img-fluid" />

                                </Carousel.Item>

                            )



                            // )

                        })
                    }
                </Carousel>
            </div >

        )
    }



}




{/* //                 export default class ImageSlider extends React.Component {

//     return(
//                 <div>
//                     
//                 </div >
//                 )
// }
 */}
