import "./App.css";
import React, { useRef } from "react";
import { Button } from "primereact/button";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
import { InputText } from "primereact/inputtext";
//import { InputSwitch } from "primereact/inputswitch";
import { InputTextarea } from "primereact/inputtextarea";
import { Avatar } from "primereact/avatar";

function App() {
  //const [value, setValue] = useState(false);
  const rootBtnRef = useRef(null);
  const newsLetterRef = useRef(null);
  const btnRef2 = useRef(null);

  const scrollTo = () => { newsLetterRef.current.scrollIntoView()}

  return (
    <>  
      <div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
        <img src="logo.png" alt="hyper" height={50} />
        <StyleClass
          nodeRef={rootBtnRef}
          selector="@next"
          enterClassName="hidden"
          leaveToClassName="hidden"
          hideOnOutsideClick
        >
          {/* eslint-disable-next-line*/}
          <a
            ref={rootBtnRef}
            className="cursor-pointer block lg:hidden text-700"
          >
            <i className="pi pi-bars text-4xl"></i>
          </a>
        </StyleClass>
        <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
          <section></section>
          <ul className="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li className="relative">
              <StyleClass
                nodeRef={btnRef2}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="scalein"
                leaveToClassName="hidden"
                leaveActiveClassName="fadeout"
                hideOnOutsideClick
              >
                {/* eslint-disable-next-line*/}
                <a 
                  ref={btnRef2}
                  className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 w-full"
                >
                  <span>Products</span>
                  <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                  <Ripple />
                </a>
              </StyleClass>
              <ul className="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                <li>
                {/* eslint-disable-next-line*/}
                  <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full" onClick={() => {
                    window.open("https://aquacode.gumroad.com/l/ViWjz");}}>
                    <i className="pi pi-shield text-2xl mr-2 text-white"></i>
                    <span>Software Development eBook</span>
                    <Ripple />
                  </a>
                </li>
              </ul>
            </li>
            <li>
            {/* eslint-disable-next-line*/}
              <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150" onClick={scrollTo}>
                <span>Newsletter</span>
                <Ripple />
              </a>
            </li>
            <li>
            {/* eslint-disable-next-line*/}
              <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                <span>Links</span>
                <Ripple />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative p-6 overflow-hidden">
        <img
          src="IMG_5754.jpg"
          alt="hero-2"
          className="absolute top-0 left-0 w-auto h-full block md:w-full"
        />

        <div className="text-center my-6 relative">
          <div className="text-6xl text- font-bold mb-1">
            AQUACODE Software
          </div>
          {/*
          <div className="text-6xl text-primary font-bold mb-4">
            Today's Generation
  </div>*/}
          <p
            className="mt2 mb-4 line-height-3 text-3xl text-center mx-auto text-gray"
            style={{ maxWidth: "500px" }}
          >
            20+ years of software development
          </p>

          <Button label="Learn More" type="button" />

          <p className="text-sm mt-4 mb-4 line-height-3 text-white">
            Github, Twitter or LinkedIn
          </p>
          <div className="flex justify-content-center align-items-center">
            <a href="https://github.com/aquacode" className="text-white mr-3">
              <i className="pi pi-github text-2xl"></i>
            </a>
            <a href="https://twitter.com/aquacode" className="text-white mr-3">
              <i className="pi pi-twitter text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/mikebrizic/" className="text-white">
              <i className="pi pi-linkedin text-2xl"></i>
            </a>
  </div> 
  
        </div>
        
      </div>
      
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 md:col-6">
            <img src="new-profile.jpg" alt="Image" className="w-partial" />
        </div>
        <div className="col-12 md:col-6 md:pl-6">
            <div className="p-3 inline-flex align-items-center surface-900 text-0 mb-4 font-medium" style={{ borderRadius: '30px' }}>
                <i className="pi pi-star-fill mr-2"></i>
                <span>Software Development</span>
            </div>
            <div className="text-4xl font-bold text-900 mb-3">First Principles</div>
            <div className="text-700 mb-5 line-height-3 mb-5"></div>

            <div className="flex align-items-center mb-4">
                <i className="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div className="text-900 font-medium mb-2">Divide and Conquer</div>
                    <div className="text-700 text-sm">Make problems smaller and simpler</div>
                </div>
            </div>
            <div className="flex align-items-center mb-4">
                <i className="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div className="text-900 font-medium mb-2">Trial and Error</div>
                    <div className="text-700 text-sm">Tinker, play around, learn</div>
                </div>
            </div>
            <div className="flex align-items-center mb-4">
                <i className="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div className="text-900 font-medium mb-2">Big Rocks First</div>
                    <div className="text-700 text-sm">Focus on hard stuff and then easier things</div>
                </div>
            </div>
            <div className="flex align-items-center">
                <i className="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div className="text-900 font-medium mb-2">Complete One Piece First</div>
                    <div className="text-700 text-sm">Complete at least one part of the whole instead of leaving many unfinished things</div>
                </div>
            </div>
        </div>
    </div>
</div>
    
      


      <div ref={newsLetterRef} className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="py-6 px-3 md:px-6shadow-2 text-center" style={{ background: 'linear-gradient(180deg, #93C5FD 0%, #3F51B5 100%)', borderRadius: '1rem' }}>
        <div className="text-white font-bold text-2xl mb-3">Stay in contact with us</div>
        <span className="block text-indigo-100 font-medium text-xl">Subscribe for our newsletter so that you don't miss any updates.</span>
        <div className="mt-5 mb-3 relative sm:w-20rem mx-auto">
            <InputText className="appearance-none bg-blue-600 border-1 border-blue-400 py-3 pl-3 w-full p-component text-indigo-100 outline-none" style={{ borderRadius: '35px', paddingRight: '6rem' }} value="Your email" />
            <Button type="button" className="absolute" label="Join" style={{ borderRadius: '35px', top: '.5rem', right: '.5rem', bottom: '.5rem' }} />
        </div>
        {/* eslint-disable-next-line*/}
        <span className="text-blue-200">We ensure to protect your privacy.  <a tabIndex="0" className="cursor-pointer text-white">Privacy Policy</a></span>
    </div>
</div>
    
    
      <div className="surface-ground">
        <div className="grid grid-nogutter">
          <div
            className="col-12 md:col-6 bg-no-repeat bg-cover p-8"
            style={{
              backgroundImage:
                "url('20140928_085228.jpg')",
            }}
          >
            <div className="text-white text-2xl font-medium mb-6">
              Contact Us
            </div>
            <div className="text-gray-200 line-height-3 mb-6">
              We look forward to connecting with you!<br />
              Please send us your contact information and a brief message
              and we will reply as soon as possible.{" "}
            </div>
            <ul className="list-none p-0 m-0 mt-6 text-white">
              <li className="flex align-items-center mb-3">
                <i className="pi pi-phone mr-2"></i>
                <span>+12195952633</span>
              </li>
              <li className="flex align-items-center mb-3">
                <i className="pi pi-twitter mr-2"></i>
                <span>@aquacode</span>
              </li>
              <li className="flex align-items-center">
                <i className="pi pi-inbox mr-2"></i>
                <span>info@aquacodesoftware.com</span>
              </li>
            </ul>
          </div>
          <div className="col-12 md:col-6">
            <div className="p-fluid formgrid grid px-4 py-8 md:px-6 lg:px-8">
              <div className="field col-12 lg:col-6 p-float-label mb-4">
                <InputText
                  id="firstname"
                  type="text"
                  className="py-3 px-2 text-lg"
                  placeholder="First Name"
                />
              </div>
              <div className="field col-12 lg:col-6 p-float-label mb-4">
                <InputText
                  id="lastname"
                  type="text"
                  className="py-3 px-2 text-lg"
                  placeholder="Last Name"
                />
              </div>
              <div className="field col-12 mb-4">
                <InputText
                  id="email"
                  type="text"
                  className="py-3 px-2 text-lg"
                  placeholder="Email"
                />
              </div>
              <div className="field col-12 mb-4">
                <InputText
                  id="phone"
                  type="text"
                  className="py-3 px-2 text-lg"
                  placeholder="Phone"
                />
              </div>
              <div className="field col-12 mb-4">
                <InputTextarea
                  id="message"
                  rows="3"
                  autoResize
                  className="py-3 px-2 text-lg"
                  placeholder="Message"
                />
              </div>
              <div className="col-12 text-right">
                <Button
                  type="button"
                  label="Submit"
                  icon="pi pi-envelope"
                  className="px-5 py-3 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
        <div className="bg-gray-900">
          <div className="grid">
            <div className="col-12 md:col-3 flex flex-wrap justify-content-start md:mb-0 mb-3">
              <img
                src="favicon.ico"
                alt="footer sections"
                width={50}
                height={50}
                className="mr-3"
              />
              <div className="text-gray-300 font-bold text-5xl">aquacode</div>
            </div>
            <div className="col-12 md:col-3">
              <div
                className="text-white text-lg mb-4 flex flex-wrap"
                style={{ maxWidth: " 290px" }}
              >
                Chicago, IL 60614
              </div>
              <div className="text-white mb-3">
                <i className="pi pi-phone border-round p-1 mr-2"></i>+1 219 595 2633
              </div>
              <div className="text-white mb-3">
                <i className="pi pi-inbox border-round p-1 mr-2"></i>
                info@aquacodesoftware.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
