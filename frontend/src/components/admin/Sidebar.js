import React from "react";
import { Link } from "react-router-dom";



function Sidebar() {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/dashbord"><i className="fa fa-tachometer-alt"></i> Dashboard</Link>
                    </li>

                    <li>
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" className="dropdown-toggle"><i
                            className="fa fa-product-hunt"></i> Products</a>
                        <ul className="collapse list-unstyled collapse.show " id="collapseExample">
                            <li>
                                <Link to="/admin/products"><i className="fa fa-clipboard-list"></i> All</Link>
                            </li>

                            <li>
                                <Link to="/admin/product"><i className="fa fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>
              

                    <li>
                        <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Orders</Link>
                    </li>

                    <li>
                        <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                    </li>
                    <li>
                        <Link to="/admin/agentsForm"><i className="fa fa-users"></i> AgentsForm</Link>
                    </li>


                    <li>
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample" className="dropdown-toggle"><i
                            className="fa fa-product-hunt"></i> Cafeteria</a>
                        <ul className="collapse list-unstyled collapse.show " id="collapseExample2">
                            <li>
                                <Link to="/admin/mannerPalaceForm"><i className="fa fa-clipboard-list"></i> MannerPalace</Link>
                            </li>
                            <li>
                                <Link to="/admin/numbersForm"><i className="fa fa-clipboard-list"></i> Numbers</Link>
                            </li>
                            <li>
                                <Link to="/admin/doublePortion"><i className="fa fa-clipboard-list"></i> DoublePortion</Link>
                            </li>
                        </ul>
                    </li>

                </ul>
            </nav>
        </div>
    )
}


export default Sidebar