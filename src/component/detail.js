import React from 'react'
import {Image, Container, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector, useEffect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const Detail = (props) => {

  const id = props.match.params.id

  const getData = useSelector(state => state.sayur)                             //mengambil data dari store
  const sayur = Object.entries(getData).filter((el, i) => i == id)              //konversi objek ke array dan filter berdasarkan klik dari card
  console.dir(sayur[0][0])

  const styleRight = {
    margin: '75px auto',
    display: 'flex',
    flexDirection: 'column',
    height: '400px',
    paddingTop: '25px'
  }
  const styleLeft = {
    margin: '75px auto',
    display: 'flex',
    height: '400px'
  }

  return(
    <Container>
      <Row>
        <Col sm={6} style={styleLeft}>
          <Image src={sayur[0][1].gambarbesar} style={{width:'400px'}} rounded />
        </Col>
        <Col sm={6} style={styleRight}>
          <h2>{sayur[0][0]}</h2>
          <h2 style={{color:'red'}}>{sayur[0][1].harga}</h2>
        </Col>
      </Row>
    </Container>
  )

}

export default Detail