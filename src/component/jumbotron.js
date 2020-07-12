import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import JumboImage from '../asset/jumbotron.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


const Jumbo = () => {

  const jumboStyle = {
    backgroundImage: `url(${JumboImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'cover',
    paddingTop: '50px',
    fontWeight: 'bold',
    height: '550px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'   
  }

  const containerStyle = {
    background: 'rgba(161, 204, 165, 0.9)',
    color: 'whiteSmoke',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '25px'
  }

  return(
    <Jumbotron fluid style={jumboStyle}>
        <Container style={containerStyle}>
          <h1>Sayuran hidroponik berkualitas</h1>
          <p>
            Hidroponiku menyediakan sayuran hidroponik sehat tanpa pestisida dan segar
          </p>
        </Container>
    </Jumbotron>
  )
}

export default Jumbo