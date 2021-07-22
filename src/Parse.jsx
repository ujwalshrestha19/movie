// import React, { Component } from 'react'
// import { Card } from 'react-bootstrap'

// export default class Parse extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             items: [],
//             visible: 0,
//             error: false
//         }

//         this.loadMore = this.loadMore.bind(this);


//     };

//     loadMore() {
//         this.setState((prev) => {
//             return { visible: prev.visible + 4 };


//         });
//     }
//     componentDidMount() {
//         fetch("https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=8d2de98e089f1c28e1a22fc19a24ef04").then(
//             res => res.json()
//         ).then(res => {
//             this.setState({
//                 items: res
//             });
//         }).catch(error => {
//             console.error(error);
//             this.setState({
//                 error: true
//             });
//         });
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.items.slice(0, this.state.visible).map((item, index) => {
//                     return (

//                         <div className="col-sm-4 py-2">
//                             <div className="len">
//                                 <Card>
//                                     <Card.Img style={{
//                                         height: "400px",
//                                         width: "auto"
//                                     }} variant="top" src={item.image} fluid />
//                                     <Card.Body>
//                                         <Card.Title style={{
//                                             maxHeight: "25px",
//                                             overflow: "clip",
//                                             fontWeight: "bold"
//                                         }} >{item.title}</Card.Title>
//                                         <Card.Text style={{
//                                             maxHeight: "100px",
//                                             minHeight: "100px",
//                                             overflow: "clip",
//                                             fontSize: "12px"
//                                         }}>
//                                             {item.description}
//                                         </Card.Text>
//                                     </Card.Body>

//                                 </Card>
//                             </div>
//                         </div>
//                     );
//                 })
//                 }


//             </div>
//         )
//     }
// }
