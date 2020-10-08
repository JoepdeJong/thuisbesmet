import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';

import * as contentful from 'contentful';
import BlogCard from '../Components/Blog/Card';
import BlogPost from '../Components/Blog/Post';

import './Blog.scss'
const Blog = (props) => {
    const { t } = useTranslation()
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState()
    const [assets, setAssets] = useState([])
    
    const client = contentful.createClient({
        space: 'f4namve1kkys',
        accessToken: 'sm1N9rhnVm7tNQ6KTSWlPTyqYal62Cz-qPp9CH17GWk' 
    })

    const changePost = (post) => {
        if(post){
            window.history.pushState(post.title, post.title, `/blog/${post.slug}`)
            setPost(post)
        } else {
            window.history.pushState('Blog', 'Blog', `/blog`)
            setPost(null)
        }
    }

    const fetchPosts = () => {
        client.getEntries({
            content_type: 'blogPost'
        }).then((res) => {
            setPosts(res.items)
            setAssets(res.includes.Asset)
        })
    }
    
    const fetchPost = () => {
        const slug = props.match.params.slug
        if(slug){
            client.getEntries({
                content_type: 'blogPost',
                'fields.slug[match]': slug,
    
            }).then((res) => {
                changePost(res.items[0].fields)
            })
        } else {
            changePost(null)
        }
    }

    useEffect(fetchPosts, [])
    useEffect(fetchPost, [props.match.params])

    const BlogPostWithFeaturedPosts = () => {
        const featuredPosts = posts.filter(x => x.fields.slug !== post.slug)

        if(featuredPosts.length === 0){
            return (
                <div className="Blog">
                    <BlogPost post={post}/>
                </div>
            )
        }
        return (
            <div className="Blog">
                <BlogPost post={post}/>

                <h2>{t('blog.morePosts')}</h2>
                <div className="Blog__cards">
                { featuredPosts.map(({fields}, i) =>
                    <BlogCard onClick={() => changePost(fields)} key={i} assets={assets} {...fields}/>
                )}
                </div>
            </div>
        )
    }

    if(post){
        return BlogPostWithFeaturedPosts()
    }

    return (
        <div>
            <div className="Blog__cards">
            { posts.map(({fields}, i) =>
                <BlogCard onClick={() => changePost(fields)} key={i} assets={assets} {...fields}/>
            )}
            </div>
        </div>
    );
};

export default Blog;