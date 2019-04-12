import React, { Component } from 'react';
import './App.css';
import Artist from './Artist'
import {BrowserRouter as Router, Route } from  'react-router-dom';
import {Link} from  'react-router-dom';
import {
  Form, Select, Input, Button, Carousel, Card, Icon, Menu, Avatar
} from 'antd';

const { Meta } = Card;
const { Option } = Select;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class App extends Component {
  state = {
    current: 'home',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  handleOnChange(e){
    [e.target.name] = e.target.value
  }

  render() {
    return (
      
      <div className="App">
      <Router>
          <Route path="/soyArtista" component={Artist}/>

          <header>
<h1 ><Icon type="rocket" />ColArt</h1>
<Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Icon type="home" />Home
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="search" />Ver Artistas</span>}>
            <Menu.Item key="search:1">Música</Menu.Item>
            <Menu.Item key="search:2">Pintura</Menu.Item>
            <Menu.Item key="search:3">Danza</Menu.Item>
            <Menu.Item key="search:4">Teatro</Menu.Item>
        </SubMenu>
        <Menu.Item key="user">  
          <Link className="nav-link" to="/soyArtista"> <Icon type="user" />Soy Artista</Link>        
         </Menu.Item>
      </Menu>
      <br></br>
        <h2>Te presentamos las diversas formas de entretenimiento artístico y cultural.</h2>
</header>

        </Router>

       

       
<sider>
  
        <Form  style={{float:'right'}} >
     
        <Form.Item label="Nombre">

        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre" onChange={this.handleOnChange.bind(this)} />
</Form.Item>
<Form.Item label="Correo electrónico">
<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Correo" />

</Form.Item>
<Form.Item label="Contraseña">
<Input.Password placeholder="Ingresa contraseña" />
</Form.Item>
<Form.Item>
<Button type="primary" >Sé parte de ColArt!</Button>
</Form.Item>
</Form>
</sider>




<content>
        <Carousel autoplay style={{width:70}}>
          <div>
            <img alt="example" src="https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: 1180 }}></img>
          </div>
          <div>
          <img alt="example" src="https://images.pexels.com/photos/952422/pexels-photo-952422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: 1180 }}></img>
          </div>
          <div>
          <img alt="example" src="https://images.pexels.com/photos/1405816/pexels-photo-1405816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: 1180 }}></img>
          </div>
     
        </Carousel>

        <Card title="    Artistas destacados  " className="artsDestacados">
          <Card.Grid style={gridStyle}>

            <Card
              hoverable
              style={{ width: 240, gridStyle }}              
              cover={<Avatar style={gridImgStyle} shape="circle" src="https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>}
            >
             <br></br>
              <Meta
                title="Carolina Sierra - Cantante"
                description="Apasionada por la música. Rock<3"
              />
            </Card>
          </Card.Grid>

          <Card.Grid style={gridStyle}>

            <Card
              hoverable
              style={{ width: 240, gridStyle }}
              cover={<Avatar shape="circle" style={gridImgStyle} src="https://images.pexels.com/photos/379962/pexels-photo-379962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
            >
             <br></br>
              <Meta
                title="Juan Agudelo - Guitarrista"
                description="Me gusta hacer los mejores solos de guitarra. Jazz!!"
              />
            </Card>
          </Card.Grid>

          <Card.Grid style={gridStyle}>

            <Card
              hoverable
              style={{ width: 240, gridStyle }}
              cover={<Avatar shape="circle" style={gridImgStyle} src="https://images.pexels.com/photos/1886694/pexels-photo-1886694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
            >
             <br></br>
              <Meta
                title="Juanita Rendón - Bailarina"
                description="Me encanta la danza de mi tierra."
              />
            </Card>
          </Card.Grid>
          <Card.Grid style={gridStyle}>

            <Card
              hoverable
              style={{ width: 240, gridStyle }}
              cover={<Avatar shape="circle" style={gridImgStyle} src="https://images.unsplash.com/photo-1549123792-275210fbcef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"/>}
            >
             <br></br>
              <Meta
                title="Mariana Valencia - Pintora"
                description="Me gusta el arte grecorromano."
              />
            </Card>
          </Card.Grid>


        </Card>

        </content>


      </div>
    );
  }
}

const gridImgStyle = {

  height: 300,
  textAlign: 'center',
};

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

export default App;
