import React from 'react'
import { Card, Col, Container, Row } from 'react-materialize'
export default function FilmsPresentation({ film }) {
    return (
        <Container>
            <Row>
                {film.map((film, index) => (
                    <Col s={12} m={6} xl={4} key={index}>
                        <Card>
                            <div className="card-image">
                                <img src={film.Image} style={{ width: "100%", height: 350 }} />
                                {/* <span className="card-title">{film.Title}</span> */}
                                <span>{film.Title}</span>
                            </div>

                            <div className="card-content">

                                <p>{film.Year}</p>
                                <p>{film.Nation}</p>
                            </div>
                            <div className="card-action">
                                <button className="btn waves-effect waves-light" type="button">Detail</button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}
