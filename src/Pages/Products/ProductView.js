import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';
const ProductView = () => {
	return (
		<>
			<section className="header">
				<div className="container">
					<nav class="navbar navbar-expand-lg navbar-light ">
						<Link class="navbar-brand" to="#">
							Logo
						</Link>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>

						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav ms-auto">
								<li class="nav-item active">
									<Link class="nav-link" to="#">
										Home <span class="sr-only">(current)</span>
									</Link>
								</li>
								<li class="nav-item">
									<Link class="nav-link" to="#">
										Link
									</Link>
								</li>
							
							</ul>
							<form class="form-inline my-2 my-lg-0">
								<input
									class="form-control mr-sm-2"
									type="search"
									placeholder="Product"
									aria-label="Search"
								/>
                              
							</form>
                            <span className="search"><i className='fa fa-search'></i></span>
						</div>
					</nav>
				</div>
			</section>
            <section className='productContainer'>
                <div className='container-fluid'>
                    <div className='row'>
                        <h2 className='text-center'>Online Markdown <span>Feed</span></h2>
                        <div className='col-3'>
                        <div className='sidebarFilter'>
                           <h4 className='filterHead'>Filter</h4>
                           <h5 className='categoryHead'>Categories</h5>
                           <div className='checkBox'>
                               <div className='wrapper d-flex justify-content-between'>
                                <div className='inputBox'>
                               <input type = "checkbox"/>
                               <label>Apparel</label>

                                </div>
                                <div className='numProducts'>
                                    <span>(554)</span>
                                </div>
                               </div>
                               <div className='wrapper d-flex justify-content-between'>
                                <div className='inputBox'>
                               <input type = "checkbox"/>
                               <label>Automotive</label>

                                </div>
                                <div className='numProducts'>
                                    <span>(524)</span>
                                </div>
                               </div>
                               <div className='wrapper d-flex justify-content-between'>
                                <div className='inputBox'>
                               <input type = "checkbox"/>
                               <label>Body</label>

                                </div>
                                <div className='numProducts'>
                                    <span>(154)</span>
                                </div>
                               </div>
                           </div>
                        </div>

                        </div>
                        <div className='col-9'>
                            <div className='row'>

                            <div className='col-2'>
                                dlkfjkldjfg
                            </div>
                            <div className='col-2'>
                                hihihi
                            </div>
                            <div className='col-2'>
                                kgjkkjfk
                            </div>
                            <div className='col-2'>
                                kgjkkjfk
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
		</>
	);
};
export default ProductView;
