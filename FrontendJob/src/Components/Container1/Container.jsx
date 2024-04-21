import React from 'react';
import './Conatiner.css';

import demand from '../Assets/Demand.png';
import first from '../Assets/first-image.png';
import second from '../Assets/second-image.png';
import third from '../Assets/thirs-image.png';
import fourth from '../Assets/fourth-image.png';
import fifth from '../Assets/fifth-image.png';
import image1 from '../Assets/image1.png';
import image2 from '../Assets/image2.png';
import image3 from '../Assets/image3.png'
import image8 from '../Assets/image8.png';
import group8 from'../Assets/group8.png';
import arrow from '../Assets/arrow.png';
import arrow1 from '../Assets/arrow1.png';
import map from '../Assets/map.png';
import footer from '../Assets/footer1.png'
function Container() {
  return (

<>
<section className='four_card_section'>
    <div className="container">
      <div className="row">
        <div className="col-lg-4"> <div className="blue_container" >
      <p>01</p>
      <h2>We stay connected</h2>
     
    </div></div>
        <div className="col-lg-4">  <div className="blue_container" >
        <p>02</p>
      <h2>We believe in diversity & inclusion</h2>
      
    </div></div>
        <div className="col-lg-4">  <div className="blue_container" >
        <p>03</p>
      <h2>We celebrate success</h2>
    </div></div>
      </div>
    </div>
    </section>
{/* we-stay_connected */}

<section className='connect_background'>
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="left_section">
             <div className="main_heading">
              <h2>We <span className='stay_connected'>Stay connected</span></h2>
             </div>

             <div>
            
              <div className='business_logo'>
              <h4 className='ps-5 ms-2'>Quarterly Business Updates</h4>
              <p className='ps-5 ms-2'>We strive to stay connected as a team through communication and collaboration. This materialises every quarter through our Quarterly Business Update events. These gatherings are immersive sessions where every team
member, regardless of rank or tenure, comes together to contribute to our overarching business strategy, and stay connected. They are opportunities to learn from our seasoned leaders and to also share personal insights and achievements that can steer our collective future. In an ever-evolving engineering landscape, staying connected isn’t just a benefit—it’s essential.</p>
              </div>
             </div>

             <div className='industry_logo'>
              <h4 className='ps-5 ms-2 mt-5'>Industry Events & Networking</h4>
              </div>
             <div className='Association_member'>
              <h4 className='ps-5 ms-2 mt-5'>Associations Membership</h4>
              </div>
        </div>
      </div>
      <div className="col-lg-6">

        <div className="right_section">

        </div>
      </div>
    </div>
  </div>
  {/*--We believe in diversity */}
  </section>   
   <section className='second_background'>
    <div className="container" >
      <div className="row">
        <div className="col-lg-6">
          <h1 className='believe'>We believe in <span className='diversity'> diversity & <br/>Inclusion</span></h1>
        </div>
        <div className="col-lg-6"><p className='case ps-5 ms-2'>At CaSE we do not just accept difference — we celebrate it, we support it, and we thrive on it for the benefit of our employees, our services, our industry and our community. We are proud to be an equal opportunity
employer. Guided by our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them.</p> <br /><p className='values ps-5 ms-2'>Our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them Our Commitment to reinventing the standard. With more than 20 nationalities represented in our global workforce, we firmly believe that our ability to deliver high-quality results is fueled by our active efforts to embed diversity and inclusion. We recognise, respect, and strive to create an environment where employees can excel and feel a true sense of belonging.</p>
<br /><h4 className='strategic ps-5 ms-2'>Some of our strategic initiatives include:</h4></div>
      </div>
    </div>
 <img src={demand} alt="demand" className='img-fluid' />
   </section>
   <div className="grid-container">
   <div className="gridItem item1"> <img className=" mt-5 w-100  first_image"src={first}alt="" /></div>
        <div className="gridItem item2"><img className="ps-3 mt-5 w-100   first_image me-2" src={second} alt="" /></div>
        <div className="gridItem item3"><img className=" mt-5 ms-3 img-fluid"src={third} alt="" /> </div>
        <div className="gridItem item4"> <img className="mt-5 ms-3 img-fluid fourth"src={fourth} alt="" /></div>
        <div className="gridItem item5"><h1 >We Celebrate <span>success</span></h1><p>At CaSE we understand that every achievement, big or small, is a result of the hard work and dedication of our team members. We take pride in
celebrating these moments because they underscore the commitment and effort put into each project.
</p><br /><p>Some of our favourite events on the calendar include our coveted Melbourne Cup event and our always amazing Christmas Party. In-between, our
team celebrate together during team cycling events, regular team dinners and social morning teas to celebrate milestones and special days. Taking the time to celebrate wins is our way of showing gratitude and ensuring everyone knows their efforts make a difference.</p></div>
        <div className="gridItem item6"><img src={fifth} alt=""  className='img-fluid'/></div>
 
</div>
<section>
<div className="container">
  <div className="row">
  
    <div className="col-lg-6">
      <h1 className='Employee mt-4 '>Employee <span className='Appreciation'>Appreciation program</span></h1>
      <p className=' mt-4'>Our Employee Appreciation Program is tailored to honor the ongoing commitment and efforts of our long-serving team members. Our 5 Year Club
and 10 Year Club are special milestones within this program, celebrating employees who have dedicated half a decade or a full decade to our
company mission. Each year, members of these clubs are invited to annual events held at select, memorable locations, reflecting our gratitude and
recognition of their unwavering dedication. It's our way of saying thank you and ensuring that every significant chapter in our collective journey is
celebrated with the grandeur it deserves
</p>
    </div>
    <div className="col-lg-6"><img  className='image1'src={image1} alt="" /></div>
  </div>

    <div className="row">
      <div className="col-lg-6">
<img className='image2 ' src={image2} alt="" />
      </div>
      <div className=" col-lg-6"><img className='image3' src={image3} alt="" /></div>
      
    </div>
  </div>


</section>
<section className='fourth-section'>
  <div className="conatiner">
   <div className="row">
    <div className="col-lg-6">
      <img className='image8' src={image8} alt="" />
    </div>
    <div className="col-lg-6">
      <img className="comma"src={group8} alt="" />
      <p className='group8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.</p ><br /><p className='group8-a'>Title</p><br /><p className='group8-b'>Name</p><br />
      <img src={arrow} alt="" /><p className='story'>Read my story</p>
    </div>
   </div>
  </div>
</section>
<section>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h1 className='As'>  As a <span className='global'>global business,</span> we encourage you to contact <span>us no matter where you are located in the world.</span> </h1>
        <br />
        <h6 className='job'>
Browse our job opportunities across the globe.</h6>
<br /><h4 className='open-roles'>Open roles</h4> <img className='arrow1' src={arrow1} alt="" />

      </div>
      <img className='map' src={map} alt="" />
    </div>
  </div>
</section>
<section>
  <div className="container">
    <div className="row">
    
        <img className="footer"src={footer} alt="" />
     
    </div>
  </div>
</section>
</>
   
  );
}

export default Container;