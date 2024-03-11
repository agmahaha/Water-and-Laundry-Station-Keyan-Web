import { Card, Divider, IconButton, Typography, useTheme, Box } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AnnouncementWidget = ({
    announcementId,
    title,
    description,
    image,
    isEdited
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ shouldRerender, setShouldRerender ] = useState(false);

    const editAnnouncement = (announcementId) => {
        navigate(`/posts/${postId}/edit`);
    }

    const deleteAnnouncement = async () => {
        const response = await fetch(`/posts/${postId}/delete`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        const message = await response.json();
        setShouldRerender(true);
    };

    if (shouldRerender) {
        console.log("rerender")
        return null;
    }

    if (loggedInUserId === postUserId) {
        isUserPoster = true;
    }

    return (
        <WidgetWrapper
        m="2rem 0"
        display='flex'
        flexDirection='column'
        width="40%"
    >
        <Box
        >
            <Typography
                color='black'
                fontSize={30}
                sx={{
                    mt: "0.5rem"
                }}
            >
                {title}
            </Typography>
            <Typography
                color='black'
                fontSize={20}
                sx={{
                    mt: "1rem"
                }}
            >
                {description}
            </Typography>
        </Box>
        <Divider/>
        {/* <Box
            justifySelf="center"
            alignSelf="center"
        >

        {image && (
            <img
            width="500vh"
            height="auto"
            alt="picture"
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
            src={`/assets/${image}`}
            />
            )}
        </Box> */}
        <Divider/>
    </WidgetWrapper>
    )
}

export default AnnouncementWidget;
