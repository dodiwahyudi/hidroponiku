import React from 'react'
import {Image, Container, Row, Col} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import FormRequest from './form'
import 'bootstrap/dist/css/bootstrap.min.css';

//Detail adalah component yang menyajikan informasi mengenai detail sayuran setelah di salah satu list produk di-klik

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
          <h1 style={{fontWeight: 'bold', color: '#415D43'}}>{sayur[0][0]}</h1>  
          <h2 style={{color:'red'}}>{sayur[0][1].harga} <span style={{color:'black', fontSize: '25px'}}>per kg</span></h2>
          <p><span><i class="fa fa-truck fa-2x" aria-hidden="true"></i></span> Saat ini hanya melayani pengiriman dalam kota</p>
          <p>Ayo pesan sekarang</p>
          <FormRequest jenis={sayur[0][0]} harga={sayur[0][1].harga}/>
        </Col>
      </Row>
    </Container>
  )

}

export default Detail