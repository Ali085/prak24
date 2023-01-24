import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from "axios";

function OurTeachers() {
    const [post, setPost] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:1245/users").then((response) => {
        setPost(response.data);
      });
    }, []);
    return (
        
        <>
            <section className='teacher'>
                <div className='teacherHead'>
                    <h2>Our Teacher</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
                </div>
                <div className="Cards">
                    {
                        post.map((element)=>

                    <div className="dataCard">
                        <img src={element.imageUrl} alt="Foto" />
                        <h3>{element.name}</h3>
                        <h4>{element.job}</h4>
                        <p>{element.description}</p>
                    </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default OurTeachers