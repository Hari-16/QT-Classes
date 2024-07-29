import './App.css';
import './student.css';
import Students from './students';
import Gadgets from './gadgets';
import Stu from './Stu';
import Show from './show';
import Customer from './customer';
import Manager from './Manager';
import Cust from './newCust';
import Person from './person';
import Register from './Register';
import Slider from './Slider';
import FoodItem from './FoodItems';
import Emp from './Emp';
import MyEmployee from './MyEmployee';
import MyProduct from './MyProduct';
// import GetProduct from './webapi';
// import Students from './students';
import ProductData from './ProductData';
import ProdData from './ProdData';
import ShowEmployees from './ShowEmployees';
import FindEmployee from './FindEmployee';
import DeleteEmployee from './DeleteEmployee';
import AddEmployee from './AddEmployee';
import UpdateEmp from './UpdateEmp';

// export default GetProduct;



function App() {
  



  const pdata = {name:'Hari', age:22, country:'India'}
  const perdata ={name:'Krishna',age:22,country:'India'}
  return (
    <div className="App" style={{padding:"15px"}}>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./sliders/slider1.png" class="d-block w-100" alt="slider1"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./sliders/slider2.png" class="d-block w-100" alt="slider2"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./sliders/slider3.png" class="d-block w-100" alt="slider3"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <hr></hr>
      <h1>Bootstrap</h1>
      <hr></hr>
      <Students />
      <hr></hr>
      <h1>Day 09</h1>
      <hr></hr>
      <div className='container-lg'>
        <div className='row'>
          <Gadgets />
        </div>
      </div>
      <hr></hr>
      <h1>React Day 06</h1>
      <hr></hr>
      <Stu  Name="Hari"
            Standard="Mern"
            Ui="95"
            JavaScript="97"
            React="95" />
      <hr></hr>
      <h1>React Day 08</h1>
      <hr></hr>
      <Show/>
      <hr></hr>
      <h1>React Day 09</h1>
      <hr></hr>
      <Customer/>
      <hr></hr>
      <h1>React Day 10</h1>
      <hr></hr>
      <Manager/>
      <hr></hr>
      <h1>React Day 11</h1>
      <hr></hr>
      <Cust />
      <hr></hr>
      <h1>React Day 12,13&14</h1>
      <hr></hr>
      <h4>Method-1</h4>
      <Person name="John" age="22" country="India" />
      <hr></hr>
      <h4>Method-2, Declare const between function&return </h4>
      <Person name={pdata.name} age={pdata.age} country={pdata.country}/>
      <hr></hr>
      <h4>Method-3, Declare const between function&return</h4>
      <Person {...perdata}/>
      <hr></hr>
      <Register/>
      <hr></hr> 
      <h1>React Day 14</h1>
      <Slider />
      <FoodItem />
      <hr></hr>
      <h1>React Day 15</h1>
      <Emp />
      <hr></hr>
      <MyEmployee Id="101" 
                  Name="Natarajan" 
                  Location="Chennai" 
                  Salary="50000" 
                  BasicSalary="25000" 
                  HRA="10000" 
                  SpecialAllowance="15000" />
      <hr></hr>
      <h1>React Day 17 & 18 </h1>
      <h4>Validation Using Formik & Yup</h4>
      <MyProduct />
      <hr></hr>
      <h1>React Day 23 & 24</h1>
      <ProductData/>
      <h4>Using Axios</h4>
      <ProdData/>
      <hr></hr>
      <h1>React Day 25</h1>
      <h4>Using Mangodb</h4>
      <ShowEmployees/>
      <FindEmployee/>
      <hr></hr>
      <h1>React day 26</h1>
      <DeleteEmployee />
      <h5>Add Employee</h5>
      <AddEmployee/>
      <h5>Update the values</h5>
      <UpdateEmp/>
      

      {/* <GetProduct /> */}
      <h4>home</h4>


      <hr></hr>
    </div>
  );
}

export default App;
