import React from 'react';

import { BLOCKS, INLINES } from '@contentful/rich-text-types';
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
            `<div class="BlogPost__img"><img src="${fields.file.url}" alt="${fields.description}"/></div>`,
        [INLINES.EMBEDDED_ENTRY]: (node) => {
            if(node.data.target.sys.contentType.sys.id === 'youtubeVideo'){
                return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${node.data.target.fields.code}" title=${node.data.target.fields.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            }
        }
    },
};

export default BlogPost;