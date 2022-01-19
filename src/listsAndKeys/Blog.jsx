import React from "react";

export const Blog = (props) => {
    const content = props.posts.map((post) => {
        return (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        );
    });
    return <div>{content}</div>;
};
