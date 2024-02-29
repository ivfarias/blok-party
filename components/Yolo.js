import { storyblokEditable, useStoryblokState } from "@storyblok/react";


const Yolo = ({ blok }) => {
    blok = useStoryblokState(blok);

    return (
        <div {...storyblokEditable(blok)} className="box-border flex relative flex-col shrink-0 pb-8 mt-5 h-auto">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2Ffe975da368f64e1c82ad4271b74c3583%2Faced6bd5851446ada8b1f9f756e5ba9b?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Ffe975da368f64e1c82ad4271b74c3583%2Faced6bd5851446ada8b1f9f756e5ba9b?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Ffe975da368f64e1c82ad4271b74c3583%2Faced6bd5851446ada8b1f9f756e5ba9b?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Ffe975da368f64e1c82ad4271b74c3583%2Faced6bd5851446ada8b1f9f756e5ba9b?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Ffe975da368f64e1c82ad4271b74c3583%2Faced6bd5851446ada8b1f9f756e5ba9b?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Ffe975da368f64e1c82ad4271b74c3583%2Faced6bd5851446ada8b1f9f756e5ba9b?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Ffe975da368f64e1c82ad4271b74c3583%2Faced6bd5851446ada8b1f9f756e5ba9b?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Ffe975da368f64e1c82ad4271b74c3583%2Faced6bd5851446ada8b1f9f756e5ba9b"
                className="box-border object-contain overflow-hidden shrink-0 mx-auto mt-5 w-full aspect-[3.7] max-w-[1080px] min-h-[20px] min-w-[20px]"
            />
            <div className="box-border relative shrink-0 mt-5 h-auto">
                <h1>YOLO!</h1>
            </div>
            <button
                className="box-border relative shrink-0 px-6 py-4 mt-5 text-center rounded appearance-none cursor-pointer bg-[black] text-[white]"
                openLinkInNewTab={false}
            >
                Click me!
            </button>
        </div>
    );
}

export default Yolo;
