
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Gallery.css'
const Gallery = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='bg-slate-100 mt-5'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="gap-11 font-medium text-xl text-center tabchange">
                    <Tab>Background Removal Service</Tab>
                    <Tab>Car Image Editor Service</Tab>
                    <Tab>Clipping Path services</Tab>
                    <Tab>Ecommerce Product Photo Editing</Tab> <br />
                    <Tab>Ghost Mannequin Service</Tab>
                    <Tab>Image Masking Services</Tab>
                    <Tab>Image Shadow Making Services</Tab>
                    <Tab>Photo Retouching Services</Tab>
                </TabList>

                <hr className='mt-4' />
                <TabPanel>

                {/* tab 1 */}

                    <div className="grid lg:grid-cols-4 mt-10   ">
                        <div className="w-full p-4 lg:w-96 rounded-s-lg ...">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/Tgt44vy/IMG1.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/zrd7wVD/IMG2.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/Bt7D4p2/IMG3.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/4M2xw71/img4.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/6BBjZRN/IMG5.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/C2fg0SJ/IMG6.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/mbzWNYm/IMG7.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/ZWnvqDp/img8.webp" alt="" />
                            </div>
                        </div>
                    </div>

                </TabPanel>

                {/* tab 2 */}
                <TabPanel>
                <div className="grid lg:grid-cols-4 mt-10   ">
                        <div className="w-full p-4 lg:w-96 rounded-s-lg ...">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/tQ6ndrg/img9.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/yWSJCBz/img10.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/d60swMB/img11.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/LgQY6xm/img12.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/xLwwPZN/img13.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/4mh2H6d/img14.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/2cLCdgD/img15.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/NK8Rh21/img16.webp" alt="" />
                            </div>
                        </div>
                    </div>

                </TabPanel>

                {/* tab 3 */}
                <TabPanel>
                <div className="grid lg:grid-cols-4 mt-10   ">
                        <div className="w-full p-4 lg:w-96 rounded-s-lg ...">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/vBJ3wtX/img1.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/GCD95Hc/img2.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/tYrpvbs/img3.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/t4JCtKc/img4.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/nLmjrSB/img5.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/rt0K74z/img6.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/610yGhj/img7.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/d5NPzc8/img8.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* tab 4 */}
                <TabPanel>
                <div className="grid lg:grid-cols-4 mt-10   ">
                        <div className="w-full p-4 lg:w-96 rounded-s-lg ...">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/6YMH3XJ/img9.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/Y7Q2FSJ/img10.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/wRF2HJt/img11.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/fpz04f2/img12.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/3M4r4RZ/img13.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/b1FwttQ/img14.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/fQfC00w/img15.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/GQkrjbG/img16.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </TabPanel>
                {/* tab 5 */}
                <TabPanel>
                <div className="grid lg:grid-cols-4 mt-10   ">
                        <div className="w-full p-4 lg:w-96 rounded-s-lg ...">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/mCvV1c5/img1.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/Chw0Qzz/img2.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/Pj8j7kd/img3.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/wC0cR4p/img4.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/Q8SYhDv/img5.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/N3wB9Tz/img6.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/YXx3cXP/img7.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/D93L1fc/img8.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </TabPanel>
                {/* tab 6 */}
                <TabPanel>
                <div className="grid lg:grid-cols-4 mt-10   ">
                        <div className="w-full p-4 lg:w-96 rounded-s-lg ...">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/rFqHc8r/img1.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/j3C9xZh/img2.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/X3YnBgm/img3.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/99cpk4p/img4.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/P5FjrxV/img5.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/JR8F3Gm/img6.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/7gF9jPV/img7.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/9NXLT6M/img8.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </TabPanel>
                {/* tab 7 */}
                <TabPanel>
                <div className="grid lg:grid-cols-4 mt-10   ">
                        <div className="w-full p-4 lg:w-96 rounded-s-lg ...">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/0KDpxTK/img9.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/kMkkyxL/img10.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/8cj2gHk/img11.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/VgLG17w/img12.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/K2w67sQ/img13.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/0yHM190/img14.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/qD172QX/img15.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/pbJdHgm/img16.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </TabPanel>
                {/* tab 8 */}
                <TabPanel>
                <div className="grid lg:grid-cols-4 mt-10   ">
                        <div className="w-full p-4 lg:w-96 rounded-s-lg ...">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/2yGpHD1/img17.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/vPffJ64/img18.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/mJtpFZQ/img19.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/3fbrW4B/img20.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                               <img className='imgdesign' src="https://i.ibb.co/8BJdQMk/img21.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/x5d6zw9/img22.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/Yyq987J/img23.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full p-4 lg:w-96 ">
                            <div className="p-8 wrapper">
                                <img className='imgdesign' src="https://i.ibb.co/BjgLvBw/img24.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Gallery;
