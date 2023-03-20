import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
    const date = new Date().getFullYear()

    return (
        <Fragment>
            <footer>
                <div className="container-fluid footer">
                    <div className="row footerContent">
                        <div class="col-lg-4 col-md-6 col-sm-12 about ">
                            <h1>About Run Order</h1>
                            <hr></hr>
                            <p>Run Order is an ordering delivery service in the Redeemers University, which offers
                                a wide range of delivery for students and the oppturnity of students volunteering as agents</p>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12 social">
                            <h1>Follow us on </h1>
                            <a><i class="fa-brands fa-instagram"></i> </a>
                            <a><i class="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>



                    <p className="text-center copyRight ">
                        Run Order -{date}, || TechWorksNexus, All Rights Reserved
                    </p>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer