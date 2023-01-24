import React from 'react'
import './index.scss'
function OurPrograms() {
    return (
        <section className='Programs'>
            
            <div className='programsHead'>
                <h2>Our Programs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
            </div>
            <div className='programmerDivs'>
                <div className="img">
                    <img src="https://preview.colorlib.com/theme/oneschool/images/undraw_youtube_tutorial.svg" alt="foto" />
                </div>
                <div className="educationTxt">
                    <h3>We Are Excellent In Education</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                    <div className='iconText'>
                        <i class="fa-solid fa-user-graduate"></i>
                        <p>22,931 Yearly Graduates</p>
                    </div>
                    <div className='iconText'>
                        <i class="fa-solid fa-building-columns"></i>
                        <p>150 Universities Worldwide</p>
                    </div>
                </div>
            </div>
            <div className='programmerDivs'>
                <div className="educationTxt">
                    <h3>Strive for Excellent</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                    <div className='iconText'>
                        <i class="fa-solid fa-user-graduate"></i>
                        <p>22,931 Yearly Graduates</p>
                    </div>
                    <div className='iconText'>
                        <i class="fa-solid fa-building-columns"></i>
                        <p>150 Universities Worldwide</p>
                    </div>
                </div>
                {/* /////////////////////// */}
                <div className="img">
                    <img src="https://preview.colorlib.com/theme/oneschool/images/undraw_teaching.svg" alt="foto" />
                </div>
            </div>
            <div className='programmerDivs'>
                <div className="img">
                    <img src="https://preview.colorlib.com/theme/oneschool/images/undraw_teacher.svg" alt="foto" />
                </div>
                <div className="educationTxt">
                    <h3>Education is life</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                    <div className='iconText'>
                        <i class="fa-solid fa-user-graduate"></i>
                        <p>22,931 Yearly Graduates</p>
                    </div>
                    <div className='iconText'>
                        <i class="fa-solid fa-building-columns"></i>
                        <p>150 Universities Worldwide</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurPrograms