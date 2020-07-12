import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom' //modul agar didapatkan props history
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'


class Display extends Component {

  componentDidMount(){
    this.props.handleFetch()   //menjalankan fecth dispacth di class lifecycle
  }

  handleDetail = (i) => this.props.history.push(`/detail/${i}`)
  
  

  render(){

  const container = {
    height: '500px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  const display = Object.entries(this.props.sayur)          //konversi objek ke array agar mudah di mapping

  const listSayur = display.map((el, i) => (                     //mapping array yang berisi data dari props redux dan dijadikan list
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el[1].gambarkecil} />
        <Card.Body>
          <Card.Title>{el[0]}</Card.Title>
          <Card.Text style={{ color: 'red',  }}>
            Rp. {el[1].harga}
          </Card.Text>
          <Button variant="danger" onClick={() => this.handleDetail(i)}>Beli</Button>
        </Card.Body>
      </Card>
    )
  )

    return(
      <div style={container}>
       {listSayur}
      </div>
    )
  }
}

const fetchData = () => (dispatch) => {                               //method fecth data dari API dan disimpan di store
  axios.get("https://hidroponiku-ff4de.firebaseio.com/sayur.json")
  .then(response => {
    dispatch({
      type: 'SAYUR',
      payload: response.data
    })
  })
}

const mapStateToProps = (state) => {  //mengambil data dari store
  return{
    sayur: state.sayur
  }
}

const mapDispatchToProps = (dispatch) => ({  
  handleFetch : () => dispatch(fetchData())
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Display))