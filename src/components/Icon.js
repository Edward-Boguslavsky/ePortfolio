import {useState} from 'react';
import Page from "./Page";

function Icon(props) {
    const [openPage, setOpenPage] = useState(false);

    function openHandler() {
        setOpenPage(true);
    }

    function closeHandler() {
        setOpenPage(false);
    }

    return (
        <div className='Icon' >
            <div id="app_icon" onClick={openHandler}>
                <img id="app_icon_image" src={"images/app_icons/" + props.icon + ".svg"} alt={props.icon + " button"}/>
                <span id="app_icon_text">{props.icon}</span>
            </div>

            {openPage && <Page onClose={closeHandler}/>}
        </div>
    );
}

export default Icon;