import React from 'react';

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import './index.scss'

const BlogPost = (props) => {
    const {post} = props

    const content = documentToHtmlString(post.content, options)
    return (
        <div className="BlogPost">
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{__html: content}} />
            {/* <Markdown source={props.content} /> */}
        </div>
    );
};

const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
            EmbeddedAsset(fields),
    },
};

function EmbeddedAsset(fields) {
    if (fields.description == "video") {
        return <div class="BlogPost__vid"><iframe width="560" height="315" src={fields.file.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    } else {
        return <div class="BlogPost__img"><img src="${fields.file.url}" alt="${fields.description}"/></div>
    }
}

export default BlogPost;