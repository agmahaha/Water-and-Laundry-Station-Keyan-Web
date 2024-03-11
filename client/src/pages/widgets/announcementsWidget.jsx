import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";

const PostsWidget = () => {
    const dispatch = useDispatch();
    // const announcements = 0;
    let isTherePost = false;

    const getAnnouncements = async () => {
        console.log("This is the query ", query)
        const response = await fetch(`/posts/search/${query}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`},
        });
        const data = await response.json();
        dispatch(setPosts({ posts: data }));
        console.log(posts, "getPosts (search)");
    };

    const getFilteredAnnouncements = async () => {
        console.log("getFilteredPosts")
        const response = await fetch(`/posts/order/${filter}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`},
        });
        const data = await response.json();
        dispatch(setPosts({ posts: data }));
        console.log(posts, "getFilteredPosts");
    }

    // useEffect(() => {
    //     if (isProfile) {
    //         getUserPosts();
    //     } else if (isSearch) {
    //         console.log("her", isTherePost)
    //         getPosts();
    //     } else {
    //         console.log("adsf")
    //         if (filter) {
    //             getFilteredPosts();
    //         } else {
    //             getPosts();
    //         }
    //     }
    // }, []);


    if (!isTherePost){
        return (<Typography variant={"h3"}>No Results Found.</Typography>);
    }

    return (
        <>
            {announcements.map(
                ({
                    _id,
                    title,
                    description,
                    image,
                    isEdited,
                }) => (
                    <PostWidget
                        key={_id}
                        announcentId={_id}
                        title={title}
                        description={description}
                        image={image}
                        isEdited={isEdited}
                    />
                )
            )}
        </>
    )
}

export default PostsWidget;
