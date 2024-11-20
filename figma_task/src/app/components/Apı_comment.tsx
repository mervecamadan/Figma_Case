import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';

interface Comment {
    id: number;
    body: string;
    likes: number;
    user: {
        id: number;
        username: string;
        fullName: string;
        imageUrl: string;
    };
}

const Apı_comment = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetch('https://dummyjson.com/comments')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Yorumlar yüklenemedi!');
                }
                return res.json();
            })
            .then((data) => {
                setComments(data.comments);
                setLoading(false);
            })
    }, []);

    const renderStars = (likes: number) => {
        const stars = [];
        for (let i = 0; i < likes; i++) {
            stars.push(<span key={i} className="text-yellow-400">★</span>);
        }
        return stars;
    };

    return (
        <div className="bg-white h-screen -mb-36 p-4">
            <div className="text-center mb-6">
                <br></br><br></br>
                <p className="text-[var(--mypink)] uppercase font-semibold text-base tracking-wide">
                    Testimonials
                </p>
                <p className="text-l md:text-2xl font-bold text-gray-800 mt-5">
                    Trust our clients
                </p>
            </div>

            <div className="relative mt-9">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    loop
                    pagination={{ clickable: true }}
                >
                    {loading ? (
                        <p className="text-center text-gray-500">Loading comments...</p>
                    ) : error ? (
                        <p className="text-center text-red-500">{error}</p>
                    ) : (
                        comments.map((comment) => (
                            <SwiperSlide key={comment.id}>
                                <div className="flex flex-col items-center space-y-4 p-9">
                                    <img
                                        src={'/user.png'}
                                        alt={comment.user.username}
                                        className="w-20 h-20 rounded-full object-cover"
                                    />


                                    <p>
                                        <span className="text-orange-500 text-l font-semibold">
                                            {comment.user.fullName || 'Unknown User'}
                                        </span>
                                        <span className="text-gray-600 text-ml font-bold">
                                            {' '}
                                            / {comment.user.username}
                                        </span>
                                    </p>

                                    <div className="text-yellow-400 text-2xl">{renderStars(comment.likes)}</div>

                                    <p className="text-gray-600 text-center text-sm mt-2">{comment.body}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default Apı_comment;