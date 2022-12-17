import React from 'react'

const Error = () => {
    return (
        <>
            <div class="external_wrapper" id="errorpagenew">
                <div class="logo_box">
                    <img src="assets/images/paypal_logo.svg" alt="" />
                </div>
                <div class="container-fluid" id="msg">


                    <div class="row m-0 justify-content-center">
                        <div class="col-md-12">
                            <div class="important-msg" id="img_message">
                                <h5 style={{color:"red"}} >Important Message !</h5>
                                <span>Due to unauthorised activity or identification failure on your account, your account has been suspended. Please get in touch with the support team for regaining account access.</span>
                                {/* <!-- <p>Error CODE:4SD9M7R:8H076LJK</p> --> */}
                                {/* <!--  <a href="tel:+971-568-555777">+971-568-555777</a> --> */}
                                <div class="row_cus">
                                    <div class="col_1">
                                        Call On :
                                    </div>
                                    <div class="col_2">
                                        <a id="phone_noid" href="tel:+1-844-485-2213">+1-844-485-2213</a>
                                    </div>


                                </div>
                                {/* <!-- <h2><a href="javascript:void(Tawk_API.toggle())" class="btn"  style="background-color: #1552f0; color: white">Ask Expert</a></h2> --> */}
                            </div>

                        </div>




                    </div>

                </div>
            </div>




            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> --> */}
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p style={{color: "black", fontSize:"20px"}}>Your account has been blocked!! Call to our support <a
                                href="tel:222222222">22222222222</a></p>
                        </div>
                        {/* <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> --> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error