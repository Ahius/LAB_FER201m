import React, { useState } from 'react'
import { listFilms } from '../shared/ListOfFilms'
import { Button, Card, Col, Container, Row } from 'react-materialize'
import { Link } from 'react-router-dom'
export default function Films() {
    const [film, setFilm] = useState([])
    return (
        <Container>
            <Row>
                {listFilms.map((film, index) => (
                    <Col s={12} m={6} xl={4} key={film.id}>
                        <Card>
                            <div className="card-image">
                                
                                <img src={film.Image} style={{ width: "100%", height: 350 }} />
                                {/* <span style={{color:'gold'}} className="card-title">{film.Title}</span> */}
                                <span className='title'>{film.Title}</span>
                            </div>

                            <div className="card-content">
                                <div className='shortInfo'>
                                    <p>{film.Year}</p>
                                    <p>{film.Nation}</p>
                                </div>
                            </div>
                            <div className="card-action">
                                <div className='btnCard'>
                                    {/* <button className="btn waves-effect waves-light" type="button">Detail</button> */}
                                    <Button className='btn' onClick={() => { setFilm(film) }}>
                                        <a style={{ color: 'white', textAlign: 'center' }} href='#popup1' id='openPopUp'>More</a>
                                    </Button>
                                    <Link to={`detail/${film.id}`}>
                                        <span><Button>Detail</Button></span>
                                    </Link>
                                </div>
                            </div>

                        </Card>
                    </Col>
                ))}
                <div id='popup1' className='overlay'>
                    <div className='popup'>
                        <div className="card-image">
                            <img src={film.Image} style={{ width: "90%", height: 380 }} />
                        </div>
                        <h2>{film.Title}</h2>
                        <a className='close' href='#'>&times;</a>
                        <div className='content'>
                            {film.Info}
                        </div>
                    </div>
                </div>
            </Row>
        </Container>

    )
}