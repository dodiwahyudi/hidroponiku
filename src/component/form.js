import React, {Component} from 'react'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

//Ini adalah form isian untuk pembelian produk

class FormRequest extends Component{

  state = {
    nama : '',
    alamat: '',
    hp: 0,
    pesanan: 0
  }

  onChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})  
  }

  handleClick = () => {
    const pesanan = {
      nama: this.state.nama,
      alamat: this.state.alamat,
      jenis: this.props.jenis,
      harga: this.props.harga,
      hp: this.state.hp,
      pesanan: this.state.pesanan
    }
    axios.post('https://hidroponiku-ff4de.firebaseio.com/pesanan.json', pesanan)
    .then(res => alert(`Terima kasih. Pesanan anda sedang diproses`))

    this.setState({
      nama : '',
      alamat: '',
      hp: 0,
      pesanan: 0
    })

  }


  render(){
    const {nama, alamat, hp, pesanan} = this.state
    

    const container = {
      height: '500px',
      width: '480px',
      display: 'flex',
      alignItems: 'center',
    }

    return(
      <Container>
        <Row style={container}>
          <Col>
          
            <Form>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control type="text" placeholder="Masukkan nama anda" name="nama" value={nama} onChange={this.onChange} />
                </Form.Group>

               <Form.Group controlId="formGridAddress1">
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" placeholder="Jl. xxx, Kota Pekanbaru" name="alamat" value={alamat} onChange={this.onChange}/>
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>No HP/WA</Form.Label>
                <Form.Control type="number" placeholder="08xxx" name="hp" value={hp} onChange={this.onChange}/>
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Jumlah Pesanan</Form.Label>
                <Form.Control type="number" placeholder="Kg" name="pesanan" value={pesanan} onChange={this.onChange}/>
              </Form.Group>

              <Button variant="danger" onClick={this.handleClick}>
                Pesan
              </Button>
            </Form>

          </Col>
        </Row>
      </Container>
    )
  }

}

export default FormRequest