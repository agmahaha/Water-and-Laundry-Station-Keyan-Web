"use client";

import { useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps"
import { Box, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export default function GMap() {
    const position = { lat: 14.575455244859533, lng: 121.04237086871804 };

    return (
        <APIProvider apiKey={'AIzaSyDB9Rut_fEF2NNFWBNzzrAJs_kumHVga2s'}>
            <Box
                sx={{
                    height: "50vh",
                    width: "50vh"
                }}
            >
                <Map 
                    zoom={20}
                    center={position}
                    mapId={'f297f5290da96981'}
                >
                    <AdvancedMarker 
                        position={position}
                    >
                        <Pin />
                    </AdvancedMarker>
                </Map>
            </Box>
        </APIProvider>
    )
}