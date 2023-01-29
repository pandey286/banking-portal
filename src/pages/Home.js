import React from "react";

const Home = () => {
    return (
        <>
            <div>
                <section class="carousel-section">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://www.csb.co.in/sites/default/files/CSB-FD-Website-Banner-750px-383px-CSB_02_02_11_22.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.csb.co.in/sites/default/files/CSB_One_Card_Web_Banner_7500x383.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.csb.co.in/sites/default/files/CSB-NRE-&-FCNR-Banner-750-px-X-383-px-CSB_06_05_11_22.png" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Home;