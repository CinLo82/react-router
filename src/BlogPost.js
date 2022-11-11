import React from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { blogData } from './blogData';

function BlogPost () {
    const navigate = useNavigate();
    const { slug } = useParams();

    const returnToBlog = () => {
        navigate('/blog');
    };

    const blogpost = blogData.find(post => post.slug === slug);

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlog}>Volver al Blog</button>
            <p>{blogpost.author}</p>
            <p>{blogpost.content}</p>
        </>
    );
}

export { BlogPost };