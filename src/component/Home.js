import {Slider} from "./New component/Slider";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Example from "./New component/Jambotron";
import s from './New component/Jambo.module.css'


const Home = ()=>{
    return<>
    <Slider/>
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
               <Col>
                   <Card style={{width:'18rem'}}>
                       <Card.Img variant='top' src={`https://fullhdoboi.ru/wp-content/uploads/_ph/6/45828042.jpg`}/>
                        <Card.Body>
                            <Card.Title>WebDev Blog</Card.Title>
                            <Card.Text>
                                Visual primitives for the component age.
                                Use the best bits of ES6 and CSS to style your apps without stress
                            </Card.Text>
                            <Button variant='primary'>More</Button>
                        </Card.Body>
                   </Card>
               </Col>
                <Col>
                    <Card style={{width:'18rem'}}>
                        <Card.Img variant='top' src={`https://fullhdoboi.ru/wp-content/uploads/_ph/6/45828042.jpg`}/>
                        <Card.Body>
                            <Card.Title>WebDev Blog</Card.Title>
                            <Card.Text>
                                Visual primitives for the component age.
                                Use the best bits of ES6 and CSS to style your apps without stress
                            </Card.Text>
                            <Button variant='primary'>More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width:'18rem'}}>
                        <Card.Img variant='top' src={`https://fullhdoboi.ru/wp-content/uploads/_ph/6/45828042.jpg`}/>
                        <Card.Body>
                            <Card.Title>WebDev Blog</Card.Title>
                            <Card.Text>
                                Visual primitives for the component age.
                                Use the best bits of ES6 and CSS to style your apps without stress
                            </Card.Text>
                            <Button variant='primary'>More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Example/>
        <Container style={{marginBottom:'30px'}}>
            <Row>
                <Col md={7}>
                      <img src={`http://www.visit-petersburg.ru/media/uploads/news/4679/4679_cover.jpg.1050x700_q95_crop_upscale.jpg`} height={400} className={s.img}/>
                </Col>
                <Col md={5}>
                    <h2>web developer blog</h2>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores eligendi nobis sequi tempore. Aliquam, architecto at hic id modi perferendis quae quas ullam unde vel! Deserunt distinctio facilis voluptates.lorem
                </Col>
            </Row>
        </Container>

    </>
}

export default Home