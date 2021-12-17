import Icon from "./components/Icon";

function App() {
    return (
        <div className='App'>
            <img id="desktop" src="images/wallpapers/walnut_desktop.svg" alt="Walnut desktop"/>
            <div id="device">
                <div id="device_screen">
                    <img id="device_background" src="images/wallpapers/minimal_mountains.svg" alt="Minimal mountains"/>

                    <div id="status_bar"></div>
                    <div id="app_icon_grid">
                        <Icon icon="home"/>
                        <Icon icon="profile"/>
                        <Icon icon="awards"/>
                        <Icon icon="gallery"/>
                        <Icon icon="keyboard"/>
                        <Icon icon="settings"/>
                    </div>
                    <div id="app_icon_bar"></div>
                </div>
            </div>
        </div>
    );
}

export default App;