import React, {useEffect, useState} from 'react';

import './index.scss'
const BlogCard = (props) => {
    const [thumbnail, setThumbnail] = useState({src: '', title: ''})

    useEffect(() => {
        const getThumbnail = (props) => {
            const thumbnailId = props.thumbnail.sys?props.thumbnail.sys.id:null
            if(thumbnailId){
                const asset = props.assets.find(x => x.sys.id === thumbnailId)
                if(asset){
                    setThumbnail({src: asset.fields.file.url, title: asset.fields.file.title})
                }
            }
        }

        getThumbnail(props)
    }, [props])

    return (
        <div className="BlogCard" onClick={props.onClick}>
                <div className="BlogCard__thumbnail">
                    <img src={thumbnail.src} alt={thumbnail.title}/>
                </div>
                <div className="BlogCard__title">{props.title}</div>
        </div>
    );
};

export default BlogCard;