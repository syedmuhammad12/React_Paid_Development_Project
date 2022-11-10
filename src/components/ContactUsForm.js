import React from 'react'

export default function ContactUsForm() {
  return (
  
  
    <>
    
<section id = "contact" className="pb-4" style={{backgroundColor: "#49DB72"}}>

    <h2 className="h1-responsive font-weight-bold text-center py-4">Contact us</h2>
    
    
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0}}>

        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div className="row">

                    <div className="col-md-3">
                        <div className="md-form mb-1">
                            <label for="name" className="">First Name</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="md-form mb-1">
                            <label for="name" className="">Last Name</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="md-form mb-1">
                            <label for="email" className="">Company Name</label>
                            <input type="text" id="email" name="email" className="form-control"/>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-3">
                        <div className="md-form mb-1">
                            <label for="name" className="">Job Role</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="md-form mb-1">
                            <label for="name" className="">Email</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="md-form mb-1">
                            <label for="email" className="">Phone Number</label>
                            <input type="text" id="email" name="email" className="form-control"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <div className="md-form mb-1">
                            <label for="name" className="">City</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="md-form mb-1">
                            <label for="name" className="">State/Region</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="md-form mb-1">
                            <label for="email" className="">Country</label>
                            <input type="text" id="email" name="email" className="form-control"/>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-3">
                        <div className="md-form mb-1">
                            <label for="name" className="">Industry - Simplified</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="md-form mb-1">
                            <label for="name" className="">No of Employees</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="md-form mb-1">
                            <label for="email" className="">How can we help you?</label>
                            <input type="text" id="email" name="email" className="form-control"/>
                        </div>
                    </div>
                </div>

                
                <div className="row">


                    <div className="col-md-12">

                        <div className="md-form">
                            <label for="message">Comments</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        </div>

                    </div>
                </div>
                

            </form>

            <div className="text-center text-md-left py-10 mt-4">
                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();" href="/" style={{paddingInline: 30, paddingTop: 10, paddingBottom: 10, backgroundColor: "#F0EAB6", color: 'black', fontWeight: 800}}>Send</a>
            </div>
            <div className="status"></div>
        </div>
        


       
        

    </div>

</section>





    </>
  

  )
}
