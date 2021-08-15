
import './App.css';
import Grid from './Components/Grid/Grid';

import Header from './Components/Header/Header';
import SideNav from './Components/SideNav/SideNav';

function App() {
  
  return (
    <div className="App">
      
      <SideNav/>
      
      <Header/>
      <div className="main--grid">
      <Grid img="https://imgk.timesnownews.com/story/chad-montano-lP5MCM6nZ5A-unsplash.jpg?tr=w-400,h-300,fo-auto" name="Maxican Taco" class="item1"/>
      <Grid img="https://cdn.mydukaan.io/v1/image/892x892/827331/10d9812e-39cf-45b7-832b-076c512841da.png" name="Farmhouse Pizza" class="item2"/>
      <Grid img="https://www.chilitochoc.com/wp-content/uploads/2020/05/crispy-chicken-burger-e1615289026561.jpg" name="Chicken Burger" class="item3"/>
      <Grid img="https://static.toiimg.com/thumb/55046506.cms?width=1200&height=900" name="Loaded Nachos" class="item4"/>
      <Grid img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBuIzM6T-07lDn9F4gR80hptPJpPnpIKO8g&usqp=CAU" name="Hakka Noodles" class="item5"/>
      </div>
      
      

    </div>
  );
}

export default App;
