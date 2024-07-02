// PostDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { DUMMY_POSTS } from '../data';
import Thumbnail1 from './assets/blog25.jpg';

const PostDetail = () => {
    
    return (
        <section className="post-detail">
            <div className="container post-detail__container">
                <h1>OIANSDOINASIDN</h1>
                <div className="post-detail__thumbnail">
                    <img src={Thumbnail1} alt="" />
                </div>
                <p></p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem temporibus ipsum culpa consequuntur vero, expedita doloribus illo nesciunt? Ratione quam quas magni aliquam autem molestiae nam mollitia, quidem, tempore, quia maiores fuga quo dolores dicta cupiditate tempora officiis suscipit?
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit magnam voluptatem numquam ea nam. Laborum iusto necessitatibus molestiae dolor delectus laboriosam qui in excepturi eum soluta inventore accusantium, eius voluptatem deleniti maiores! Quia itaque excepturi eveniet laboriosam nihil, dicta sit quasi deserunt autem ducimus dolorem nesciunt omnis, tempore impedit accusantium nam officiis vel eum debitis cum ipsam aspernatur? Excepturi nemo, nihil, impedit ea iusto sint commodi illum voluptatibus corrupti repudiandae ex fugiat neque reprehenderit necessitatibus hic aliquam alias sequi perferendis? Consequuntur iure assumenda laboriosam est aliquam maiores cum ad, eum in voluptates? Repellat nostrum molestiae iste ducimus minima. Eaque magni, odio non accusantium id exercitationem. Unde ab corporis similique obcaecati magnam?
                </p>
            </div>
        </section>
    );
};

export default PostDetail;
