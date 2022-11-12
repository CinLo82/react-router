import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from "./auth";
import { blogData } from './blogData';

function BlogPost () {
    const navigate = useNavigate();
    const { slug } = useParams();

    const auth = useAuth();

    const blogpost = blogData.find(post => post.slug === slug);

    const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;

    const canEdit = auth.user?.isEdit;

    const returnToBlog = () => {
            navigate('/blog');
        };
    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlog}>Volver al Blog</button>
            <p>{blogpost.author}</p>
            <p>{blogpost.content}</p>
            {canDelete && (
                <button>Eliminar blogpost</button>
            )}
            {canEdit && (
                <button>Editar blogpost</button>
            )}
        </>
    );
}

export { BlogPost };