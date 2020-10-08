import React, {useState, useEffect} from 'react';

import * as contentful from 'contentful';

import { Link, useHistory } from 'react-router-dom';
import BlogCard from '../Card';

import './index.scss'

const BlogList = () => {
    const [posts, setPosts] = useState([])
    const [assets, setAssets] = useState([])
    
    const client = contentful.createClient({
        space: 'f4namve1kkys',
        accessToken: 'sm1N9rhnVm7tNQ6KTSWlPTyqYal62Cz-qPp9CH17GWk' 
    })

    const fetchPosts = () => {
        client.getEntries({
            content_type: 'blogPost',
            limit: 3
        }).then((res) => {
            setPosts(res.items)
            setAssets(res.includes.Asset)
        })
    }

    const history = useHistory();
    const showPost = (slug) => history.push(`/blog/${slug}`);
    
    useEffect(fetchPosts, [])

    return (
        <div>
            <div className="BlogList">
            { posts.map(({fields}, i) =>
                <BlogCard key={i} onClick={() => showPost(fields.slug)} assets={assets} {...fields}/>
            )}
            </div>
        </div>
    );
};

export default BlogList;