import React from "react";
import { storyblokEditable } from "@storyblok/react";

function ImageBanner({ blok }) {
    return (
        <header {...storyblokEditable(blok)} className="box-border flex relative flex-col shrink-0 pb-8 mt-5 h-auto">
            <img loading="lazy" src={blok.src} alt={blok.alt} className="box-border object-contain overflow-hidden shrink-0 mx-auto mt-5 w-full aspect-[3.7] max-w-[1080px] min-h-[20px] min-w-[20px]" />
            <div className="box-border relative shrink-0 mt-5 h-auto">
                <h1>{blok.title}</h1>
            </div>
            <button type="button" className="box-border relative shrink-0 px-6 py-4 mt-5 text-center rounded appearance-none cursor-pointer bg-[black] text-[white]" onClick={() => alert(blok.buttonText)}>
                {blok.buttonText}
            </button>
        </header>
    );
}

export default ImageBanner;
