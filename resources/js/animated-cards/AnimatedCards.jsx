import React, {StrictMode} from 'react'
import { motion } from "motion/react";
import {APIProvider} from "@vis.gl/react-google-maps";
import DrawingExample from './drawing-example';

export default function () {
    return (
        <div className="flex">
            <motion.div
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg cursor-pointer"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                transition={{type: "spring", stiffness: 400, damping: 10}}
            >
                Hiii there
            </motion.div>


            <StrictMode>
                <APIProvider apiKey={'AIzaSyCnUXZCyMGzaQM2bBx2tYE1TX7_bS2HktU'}>
                    <DrawingExample />
                </APIProvider>
            </StrictMode>
        </div>
    );
}
