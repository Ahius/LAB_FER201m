import { useParams } from 'react-router-dom'
import { listFilms } from '../shared/ListOfFilms'
import { Card, Col, Container, Icon, Row } from 'react-materialize';
import { useState } from 'react';
import ModalCase from './ModalCase';
export default function Detail() {
    const [isOpen, setIsOpen] = useState(false);
    const userName = useParams();
    const film = listFilms.find(obj => {
        return obj.id == userName.id;
    });

    return (
        <Container>
            <Row>
                <Col s={12} m={6}>
                    <Card className='infoDetail'>
                        <div className="card-image">
                            <img src={`../${film.Image}`} alt='' style={{ width: "100%", height: 550 }} />

                        </div>
                    </Card>
                </Col>
                <Col s={12} m={6}>
                    <Card className="infoContainer ">
                        <div className="card-content">
                            <span className='title'>{film.Title}</span>
                            <br />
                            <span className='info'>{film.Info}</span>
                            <br />

                        </div>
                        <div className='detailShort'>
                            <span className="year">{film.Year}</span>
                            <span className="nation">{film.Nation}</span>
                            <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                                <Icon>ondemand_video</Icon>

                            </a>
                        </div>

                    </Card>
                </Col>

            </Row>
            {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
        </Container>




    );
}