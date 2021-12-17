import {useState} from 'react';

function Page(props) {

    const [closeAnim, setCloseAnim] = useState(false);
    
    function closeHandler() {
        props.onClose(); 
    }

    return (
        <div className='Page'>
            <div id="app_page">  
                <img id="page_close_button" src={"images/system_icons/x.svg"} alt="Close button" onClick={closeHandler}/>

                
            </div>
        </div>
    );
}

export default Page;