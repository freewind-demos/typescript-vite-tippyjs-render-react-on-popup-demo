import React from 'react'
import ReactDOM from 'react-dom'

import {Hello} from './Hello'
import tippy from "tippy.js";

tippy(document.getElementById('button')!, {
    interactive: true,
    onCreate: (instance) => {
        console.log("### ", instance.popper);
        ReactDOM.render(
            <Hello/>,
            instance.popper
        )
    },

})

