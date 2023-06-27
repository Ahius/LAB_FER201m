import React from 'react'
import { Button, Card, Col, Collapsible, CollapsibleItem, Container, Icon, Row, Select, TextInput, Textarea } from 'react-materialize'
const handleSubmit = (e) => {
    e.preventDefault()
}
export default function News() {
    return (


        <Container className='containerForm'>
            <Row>
                <Col s={12} m={6}>
                    <Card>

                        <img src="https://static.vecteezy.com/system/resources/previews/000/681/862/original/live-breaking-news-banner-with-global-map.jpg"
                            style={{ width: "100%", height: 307 }} />
                    </Card>
                </Col>
                <Col s={12} m={6}>
                    <Card>
                        <h4>New Movie 2024!</h4>
                        <Collapsible accordion>
                            <CollapsibleItem
                                expanded={false}
                                header="Kingdom of the Planet of the Apes"
                                icon={<Icon>local_movies</Icon>}
                                node="div"
                            >
                                Caesar, the chimpanzee who led the apes to world domination, died at the end of 2017’s War for the Planet of the Apes,
                                the third film in the reboot trilogy of the classic sci-fi franchise. However, there’s more monkey business to be had. (Yes, apes and monkeys are different, but let us have this.) Wes Ball, who helmed the Maze Runner films, directs the fourth film in the series,
                                which takes place many years after the events of War.
                            </CollapsibleItem>
                            <CollapsibleItem
                                expanded={false}
                                header="Despicable Me 4"
                                icon={<Icon>local_movies</Icon>}
                                node="div"
                            >
                                Don’t forget which master the Minions serve. Coming two years after the last installment in the franchise, the spin-off Minions: The Rise of Gru, Despicable Me is going back to the mainline series,
                                though there are no specific details at this point about what trouble Gru and the Minions will get into this time around.
                            </CollapsibleItem>
                            <CollapsibleItem
                                expanded={false}
                                header="Sonic the Hedgehog 3"
                                icon={<Icon>local_movies</Icon>}
                                node="div"
                            >
                                The Sonic the Hedgehog film franchise is speeding right along with a third installment that will presumably bring back Ben Schwartz as Sonic, Colleen O’Shaughnessey as Tails, and Idris Elba as Knuckles. Jim Carrey, who played the villainous Dr. Robotnik in the first two movies, might sit this one out as he’s been talking about retiring from acting. But, there will be at least one foe giving Sonic a run for his money,
                                as Sonic 2 teased a new villain, Shadow the Hedgehog, in its post-credits scene.
                            </CollapsibleItem>
                            <CollapsibleItem
                                expanded={false}
                                header="Joker: Folie à Deux"
                                icon={<Icon>local_movies</Icon>}
                                node="div"
                            >
                                Director Todd Phillips helms this follow-up to the wildly successful R-rated take on the iconic Batman villain that earned Joaquin Phoenix the Oscar for Best Actor. In Folie à Deux, he’ll be joined by Lady Gaga, who is playing his love interest (it’s complicated) 
                        Harley Quinn, and the film will reportedly be a musical. Yes, you read that right.
                            </CollapsibleItem>
                            

                        </Collapsible>
                    </Card>
                </Col>
            </Row>

        </Container>

    )
}
