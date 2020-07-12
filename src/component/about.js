import React from 'react'
import {Image, Container, Row, Col} from 'react-bootstrap'
import About from '../asset/about.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


//About adalah component yang menampilkan sekilas tentang usaha ini

const Navigation = () => {

  const styleLeft = {
    margin: '75px auto',
    display: 'flex',
    justifyContent: 'center'
  }

  const styleRight = {
    margin: '75px auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start'
  }

  return(
    <Container>
      <Row>
        <Col sm={6} style={styleLeft}>
          <Image src={About} rounded />
        </Col>
        <Col sm={6} style={styleRight}>
          <h3>"Anda adalah apa yang anda makan"</h3>
          <p>Hidroponiku berkomitmen menyediakan anda sayur berkualitas dan segar. Sistem kami adalah pesan, panen, antar.</p>
          <p>Kami berusaha menyediakan sayuran segar ketika anda terima</p>
        </Col>
      </Row>
    </Container>
   
  )
}

export default Navigation