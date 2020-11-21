import React from "react";

function Home(props) {
	return (
		<div style={{ paddingTop: 55 }}>
			<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
					<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
					<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="http://placekitten.com/g/500/200" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="http://placekitten.com/g/500/200" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="http://placekitten.com/g/500/200" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</div>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only"></span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only"></span>
				</a>
			</div>

			<div className="container">
				<div className="row" style={{ paddingTop: 55 }}>
					<div className="d-flex justify-content-center">
						<h3>Kelas</h3>
					</div>
					<div class="col">
						<div class="card">
							<img src="http://placekitten.com/g/200/200" class="card-img-top" />
							<div class="card-body">
								<h5 class="card-title">Card title</h5>

								<a href="#" class="btn btn-primary btn-block">
									Add To Card
								</a>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card">
							<img src="http://placekitten.com/g/200/200" class="card-img-top" />
							<div class="card-body">
								<h5 class="card-title">Card title</h5>

								<a href="#" class="btn btn-primary btn-block">
									Add To Card
								</a>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card">
							<img src="http://placekitten.com/g/200/200" class="card-img-top" />
							<div class="card-body">
								<h5 class="card-title">Card title</h5>

								<a href="#" class="btn btn-primary btn-block">
									Add To Card
								</a>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card">
							<img src="http://placekitten.com/g/200/200" class="card-img-top" />
							<div class="card-body">
								<h5 class="card-title">Card title</h5>

								<a href="#" class="btn btn-primary btn-block">
									Add To Card
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
