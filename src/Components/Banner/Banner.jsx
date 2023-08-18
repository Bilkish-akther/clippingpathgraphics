

const Banner = () => {
    return (
        <section className="h-full  max-h-[640px] mb-8 xl:mb-24">
            <div className="flex flex-col lg:flex-row bg-white">
                <div className="mt-10 lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
                    <h4 className="mt-5">Home-portfolio</h4>
                    <h1 className="text-5xl text-black mt-7 font-bold">Our Gallery</h1>
                    <h3 className="text-2xl text-amber-500 mt-5 font-semibold">Why You Fall In Love With Our Gallery</h3>
                    <p className="mt-7">Check out our service showcase to ensure our quality. We always support you <br /> with the best hand designers and grow your faith with satisfaction delivery.</p>
                </div>
                <div className="mt-10 item-end justify-end flex-1 lg:flex me-16">
                    <img src="https://i.ibb.co/rbGJNFZ/gallery.webp" alt="" />
                </div>
            </div>

        </section>
    );
};

export default Banner;
