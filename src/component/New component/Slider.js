import {Carousel} from "react-bootstrap";
import s from './Jambo.module.css'


export const Slider = ()=>{
    return (

            <Carousel>
                <Carousel.Item className={s.imgTwo}>
                    <img src={'https://fullhdoboi.ru/wp-content/uploads/_ph/6/45828042.jpg'} className='d-block w-100'
                    alt={'first slide'}
                    />
                    <Carousel.Caption>
                        <h3>Web Developer blog</h3>
                        <p>Do you like this front?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={s.imgTwo}>
                    <img src={'https://cdn.gallerix.asia/sr/_EX/863931103/582925092.jpg'} className='d-block w-100'
                         alt={'first slide'}
                    />
                    <Carousel.Caption>
                        <h3>Web Developer blog</h3>
                        <p>Do you like this front?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={s.imgTwo}>
                    <img src={'https://fullhdoboi.ru/wp-content/uploads/_ph/6/45828042.jpg'} className='d-block w-100'
                         alt={'first slide'}
                    />
                    <Carousel.Caption>
                        <h3>Web Developer blog</h3>
                        <p>Do you like this front?</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

    )
}





