export default function Discover() {
    return (
        <div className="flex flex-col justify-center item-center">
            <div className="text-5xl font-bold w-96 h-50">DISCOVER THE WORLD IN A NEW WAY</div>
            <div className="flex mt-5 mb-5 space-x-2">
                <span class="material-symbols-outlined">
                    play_circle
                </span>
                <p>WATHC THE VIDEO</p>
            </div>
            <div className="flex items-center">
                <div className="w-96 h-35">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quod tenetur, dolor numquam expedita odio non voluptates porro culpa similique alias vero libero! Ab praesentium in laudantium quos enim minus?</p>
                </div>
                <div className="flex ml-24 items-center justify-center space-x-10">
                    <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/PuNMDyxRtw4"></iframe>
                    <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/s2P_wlnol54"></iframe>
                </div>
            </div>
            <div>@credit</div>

        </div>
    )
}