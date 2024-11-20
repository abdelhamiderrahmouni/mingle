import React, {StrictMode} from 'react'
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import DrawingExample from './drawing-example';

export default function ({wire, ...props}) {
    const position = {lat: 53.54992, lng: 10.00678};

    const message = props.mingleData.message

    // console.log(message) // 'Message in a bottle 🍾'

    // wire.doubleIt(2)
    //     .then(data => {
    //         console.log(data) // 4
    //     })

    return (
        <div>
            <StrictMode>
                <APIProvider apiKey={'AIzaSyCnUXZCyMGzaQM2bBx2tYE1TX7_bS2HktU'}>
                    <DrawingExample />
                </APIProvider>
            </StrictMode>
        </div>
    )
}

// export default GoogleMap
