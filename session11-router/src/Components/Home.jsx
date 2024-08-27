import React from 'react'

const Home = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg" className="d-block w-100" alt="..." height='50%' />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-13.jpg" className="d-block w-100" alt="..." height='50%' />
                    </div>
                    <div className="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.kF5kAD3PTxIsRfDH-lgulAHaEo?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." height='50%' />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home