import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section>
            <div className='text_container'>
                <h2 className='flex-center'>
                    What We Do
                </h2>
                <p className='flex-center'>We collaborate with brands we believe in</p>
                <div className='cards_container bg'>
                    <div className='cards border borderhover:box-shadow-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="40px" width="40px" >
                            <path d="M15.993 1.385a1.87 1.87 0 012.623 2.622l-4.03 5.27a12.749 12.749 0 01-4.237 3.562 4.508 4.508 0 00-3.188-3.188 12.75 12.75 0 013.562-4.236l5.27-4.03zM6 11a3 3 0 00-3 3 .5.5 0 01-.72.45.75.75 0 00-1.035.931A4.001 4.001 0 009 14.004V14a3.01 3.01 0 00-1.66-2.685A2.99 2.99 0 006 11z" />
                        </svg>

                        <h3 className='padding-y'>Graphic Design</h3>
                        <p>Design something amazing that captures your brand and identity. Simple and elegant patterns that go beyond aesthetics. We craft clean and effective designs that connect with users and drive conversions.</p>
                    </div>
                    <div className='cards'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" fill="currentColor" width="40px" height="40px" id="facebook"><path d="M72.041 11.166c-33.543 0-60.833 27.29-60.833 60.834 0 33.545 27.29 60.834 60.833 60.834 33.544 0 60.835-27.289 60.835-60.834-.001-33.544-27.292-60.834-60.835-60.834zm0 115.668c-30.235 0-54.833-24.598-54.833-54.834 0-30.235 24.598-54.834 54.833-54.834S126.876 41.765 126.876 72c-.001 30.236-24.6 54.834-54.835 54.834z"></path><path d="M90.792 36.304H77.596a.877.877 0 0 0-.09.004c-13.323.042-15.063 9.345-15.07 17.476a1.014 1.014 0 0 0-.028.235v5.708H53.29a1 1 0 0 0-1 1v14.077a1 1 0 0 0 1 1h9.118v30.891a1 1 0 0 0 1 1h13.307a1 1 0 0 0 1-1v-30.89h13.076a1 1 0 0 0 1-1V60.728a1 1 0 0 0-1-1H76.715v-7.567h14.076a1 1 0 0 0 1-1V37.304a.999.999 0 0 0-.999-1z"></path></svg>
                        <h3 className='padding-y'>Social Marketing</h3>
                        <p>Create community and build connections with the target audience. We utilize the power of social media platforms to create a premium introduction for your brand, boost engagement, and increase sales.</p>
                    </div>
                    <div className='cards'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="40px" width="40px" mb-8>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                        </svg>

                        <h3 className='padding-y'>Web Development</h3>
                        <p >Websites that are well formulated, functional, and visually captivating. We thrive to create user experiences that evoke a positive impact and create lasting impressions for the users.</p>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className='principles_container'>
                <div className='principles_columns'>
                    <h2 className='flex-center'>Principles we follow</h2>
                    <div className='principles_cards'>
                        <div className='principles_contents'>
                            <div className='principles_icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="handshake" ><g fill="#F8C00A" data-name="Handshake"><path d="M10.17 38a1.007 1.007 0 0 1-.458-.11L2.09 33.964a1 1 0 0 1-.434-1.342l8.954-17.686a1 1 0 0 1 1.347-.439l7.251 3.7a1 1 0 0 1 .448 1.324l-8.584 17.908a1.006 1.006 0 0 1-.583.516 1.028 1.028 0 0 1-.319.055Zm-6.281-5.36 5.824 3 7.718-16.1-5.49-2.8Z"></path><path d="M20.53 24.084a1 1 0 0 1-.491-.129l-2.906-1.637a1 1 0 1 1 .981-1.743l2.4 1.351c.937-.568 2.965-1.791 4.263-2.524 2.119-1.2 3.611-1.035 5.324.588a1 1 0 0 1-1.375 1.452c-1.064-1.008-1.618-1.06-2.965-.3-1.668.943-4.677 2.777-4.708 2.8a1 1 0 0 1-.523.142Z"></path><path d="M46.837 41.483a3.827 3.827 0 0 1-2.072-.547c-.92-.614-4.968-4.584-5.77-5.373a1 1 0 0 1 1.4-1.426c1.8 1.777 4.888 4.742 5.477 5.135a2.328 2.328 0 0 0 2.364-.244 1.422 1.422 0 0 0-.04-2.182c-1.022-1.15-5.268-5.235-6.2-6.131a66.293 66.293 0 0 1-9.432-4.322l-1.052.688a4.582 4.582 0 0 1-1.771 2.731 2.759 2.759 0 0 1-2.278.532 3.475 3.475 0 0 1-2.409-1.444 4.74 4.74 0 0 1-.166-3.617c.853-3.414 2.237-4.293 4.152-5.509l.421-.269c2.11-1.355 3.921-2.077 5.909-1.182 1.236.557 5.623 2.256 6.869 2.738l4.176-1.369a1 1 0 0 1 .623 1.9l-4.515 1.48a1.007 1.007 0 0 1-.67-.016c-.237-.092-5.815-2.238-7.3-2.908-.891-.4-1.832-.359-4.008 1.039l-.43.275c-1.747 1.109-2.624 1.667-3.284 4.306-.338 1.352-.182 1.9-.059 2.1.158.264.524.371 1.107.517a.856.856 0 0 0 .706-.2A2.587 2.587 0 0 0 29.6 26.4a1 1 0 0 1 .448-.75l1.925-1.259A1 1 0 0 1 33 24.353c.068.037 6.81 3.724 9.763 4.5a1.018 1.018 0 0 1 .438.245c.216.207 5.3 5.075 6.494 6.422a3.4 3.4 0 0 1-.04 4.924 4.013 4.013 0 0 1-2.818 1.039Z"></path><path d="M48.947 37.182a1 1 0 0 1-.405-1.914l3.508-1.554a1 1 0 1 1 .81 1.828L49.351 37.1a1 1 0 0 1-.404.082Z"></path><path d="M53.534 38a1 1 0 0 1-.927-.626l-7.548-18.726a1 1 0 0 1 .59-1.316l8.066-2.886a1 1 0 0 1 1.266.572l7.4 18.574a1 1 0 0 1-.571 1.3l-7.918 3.038a1 1 0 0 1-.358.07zM47.3 18.864l6.791 16.847 6.054-2.32-6.665-16.737zm-4.968 25.652a3.386 3.386 0 0 1-2.264-.779c-1.339-1.19-4.781-4.63-4.927-4.776a1 1 0 0 1 1.414-1.414c.035.035 3.547 3.545 4.841 4.7a1.951 1.951 0 0 0 1.8.12A2.709 2.709 0 0 0 45 40.208a1 1 0 0 1 1.971.34 4.712 4.712 0 0 1-3.11 3.7 4.654 4.654 0 0 1-1.529.268z"></path><path d="M37.678 46.94a3.164 3.164 0 0 1-2.241-.8l-3.552-3.552 1.415-1.415 3.552 3.552a1.8 1.8 0 0 0 1.457.136 2.636 2.636 0 0 0 1.918-1.879 1 1 0 1 1 1.912.586 4.657 4.657 0 0 1-4.46 3.372Z"></path><path d="M33.866 49.611a3.632 3.632 0 0 1-2.269-.735 298.882 298.882 0 0 0-2.715-2.148 1 1 0 1 1 1.231-1.576s1.249.975 2.734 2.163a2.127 2.127 0 0 0 2.1.043 1.559 1.559 0 0 0 .942-1.493 1 1 0 0 1 .969-1.03 1.013 1.013 0 0 1 1.03.97 3.558 3.558 0 0 1-2.048 3.343 4.461 4.461 0 0 1-1.974.463Z"></path><path d="M26.372 49.148a2.5 2.5 0 0 1-.947-.19A4.416 4.416 0 0 1 23.5 47.12a3.151 3.151 0 0 1-2.083-.313 4.825 4.825 0 0 1-2.086-3.088 1 1 0 0 1 .137-.741c.813-1.268 2.039-3.239 2.222-3.65A2.546 2.546 0 0 1 23.35 38a3.358 3.358 0 0 1 2.842.544 2.98 2.98 0 0 1 1.324 2.742 3.329 3.329 0 0 1 2.46 1.251 3.59 3.59 0 0 1 .383 3.067 5.949 5.949 0 0 1-3 3.344 2.534 2.534 0 0 1-.987.2Zm-1.188-3.121c.314.531.875 1.293 1.4 1.074a3.949 3.949 0 0 0 1.882-2.139 1.621 1.621 0 0 0-.1-1.247 1.585 1.585 0 0 0-1.154-.452Zm-3.791-2.35a2.526 2.526 0 0 0 .977 1.372 1.214 1.214 0 0 0 .963.063l2.135-3.66a1.065 1.065 0 0 0-.412-1.264 1.4 1.4 0 0 0-1.1-.281.751.751 0 0 0-.44.243c-.264.585-1.534 2.601-2.123 3.527Z"></path><path d="M18.729 45.239a2.451 2.451 0 0 1-.7-.1c-1.713-.515-2.384-2.733-2.455-2.984a1 1 0 0 1 .093-.765 41.481 41.481 0 0 1 2.815-4.26 3.394 3.394 0 0 1 4.494-.807c.944.655 1.636 2.08.478 3.942a1 1 0 1 1-1.7-1.055c.257-.415.48-.966.081-1.243a1.384 1.384 0 0 0-1.769.382 39.431 39.431 0 0 0-2.435 3.64c.219.523.592 1.122.973 1.235.337.1.8-.246 1.051-.46a1 1 0 0 1 1.308 1.514 3.41 3.41 0 0 1-2.234.961Z"></path><path d="M16.534 42.88a1 1 0 0 1-.323-.054c-.169-.057-4.155-1.45-4.155-4.572a1.012 1.012 0 0 1 .048-.309 11.688 11.688 0 0 1 1.473-2.8 3.105 3.105 0 0 1 3.848-.744 2.589 2.589 0 0 1 1.4 3.207c-.654 2.106-1.325 4.513-1.332 4.538a1 1 0 0 1-.963.731Zm-2.47-4.471c.1.936 1.058 1.648 1.826 2.075.261-.912.648-2.239 1.028-3.466a.6.6 0 0 0-.376-.82 1.2 1.2 0 0 0-1.329.1 10.356 10.356 0 0 0-1.149 2.111Z"></path><path d="M13.877 37.529a1 1 0 0 1-.564-.175l-2.623-1.8a1 1 0 0 1 1.13-1.651l2.623 1.8a1 1 0 0 1-.566 1.826Z"></path></g></svg>
                            </div>
                            <div>
                                <h3>Good Working Environment</h3>
                                <p>We have established a vibrant culture that makes our clients, partners and associates valued and respected.</p>
                            </div>
                        </div>

                    </div>
                    <div className='principles_cards'>
                        <div className='principles_contents'>
                            <div className='principles_icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="upper-arrow"><path fill="#F8C00A" d="M12.71,8.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L11,11.41V15a1,1,0,0,0,2,0V11.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path></svg>                            </div>
                            <div>
                                <h3>Continuous Improvement</h3>
                                <p>We believe in continuous learning. In this evolving world we remain ready to embark on fresh initiatives and trends.</p>
                            </div>
                        </div>

                    </div>
                    <div className='principles_cards'>
                        <div className='principles_contents'>
                            <div className='principles_icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32.062" viewBox="0 0 32 32.062" id="lightbulb"><path fill="#F8C00A" d="M16 0C9.384 0 4 5.384 4 12c0 3.868 1.88 7.52 5.032 9.77.048.034.098.066.148.096.732.43.804 1.816.788 2.07a2.652 2.652 0 0 0-.004.124V28c0 .752.42 1.438 1.09 1.78l4.036 2.062a2.001 2.001 0 0 0 1.812.006l4.084-2.062A1.998 1.998 0 0 0 22.084 28v-3.916c0-1.974 1.206-2.626 1.218-2.632.16-.074.308-.17.442-.284A11.987 11.987 0 0 0 28 12c0-6.616-5.384-12-12-12zm-4.036 24.062s0-.04.002-.062h8.124c0 .03-.008.052-.008.084V26h-8.118v-1.938zm4.036 6L11.966 28h8.118L16 30.062zm6.452-10.422s-1.34.63-2.004 2.36h-8.804c-.248-.692-.678-1.404-1.45-1.858A9.986 9.986 0 0 1 6 12C6 6.478 10.478 2 16 2s10 4.478 10 10a9.977 9.977 0 0 1-3.548 7.64zM17 4a1 1 0 0 0 0 2c2.25 0 5 2.046 5 5.094a1 1 0 0 0 2 0C24 6.532 20.438 4 17 4z"></path></svg>                            </div>
                            <div>
                                <h3>Creative Thinking</h3>
                                <p>We brainstorm thumb-stopping ideas. We innovate creative and captivating stories to differentiate your brand apart from the crowd.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='principles_columns'>
                    <div >
                        <Image src='/1.jpg' alt='1' width={400} height={400} quality={100} className='principles_img' />
                    </div>
                </div>
            </div>
             <div className='columns_container'>
                <div className='principles_columns'>
                <div >
                        <Image src='/4.jpg' alt='1' width={400} height={400} quality={100} className='principles_img' />
                    </div>
                </div>
                <div className='principles_columns'>
                    <h2>How Things Work at Guffadi</h2>
                    <p>Every brand is unique. At Guffadi, we capture the uniqueness of brands and formulate data-driven and result-oriented strategies. Here’s how things work at Guffadi to improve your brand’s presence:</p>
                    <div className='columns_container'>
                        <div className='columns'>
                            <ul>
                                <li className='tick_list'>
                                    <svg className='tick' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="tick" fill="#F8C00A" stroke='#F8C00A'><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4ZM14.66,20.75l9-8-1.32-1.5L14,18.63,9.71,14.29,8.29,15.71l5,5A1,1,0,0,0,14,21,1,1,0,0,0,14.66,20.75Z" data-name="58  Tick, Basic, Essential, Select"></path></svg>
                                    <span>Initial Consultation</span>
                                </li>
                                <li className='tick_list'>
                                    <svg className='tick' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="tick" fill="#F8C00A" stroke='#F8C00A'><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4ZM14.66,20.75l9-8-1.32-1.5L14,18.63,9.71,14.29,8.29,15.71l5,5A1,1,0,0,0,14,21,1,1,0,0,0,14.66,20.75Z" data-name="58  Tick, Basic, Essential, Select"></path></svg>
                                    <span>Market Research</span>
                                </li>
                                <li className='tick_list'>
                                    <svg className='tick' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="tick" fill="#F8C00A" stroke='#F8C00A'><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4ZM14.66,20.75l9-8-1.32-1.5L14,18.63,9.71,14.29,8.29,15.71l5,5A1,1,0,0,0,14,21,1,1,0,0,0,14.66,20.75Z" data-name="58  Tick, Basic, Essential, Select"></path></svg>
                                    <span>Marketing  Strategy</span>
                                </li>
                            </ul>
                        </div>
                        <div className='columns'>
                            <ul>
                            <li className='tick_list'>
                                    <svg className='tick' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="tick" fill="#F8C00A" stroke='#F8C00A'><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4ZM14.66,20.75l9-8-1.32-1.5L14,18.63,9.71,14.29,8.29,15.71l5,5A1,1,0,0,0,14,21,1,1,0,0,0,14.66,20.75Z" data-name="58  Tick, Basic, Essential, Select"></path></svg>
                                    <span>Tactical Execution</span>
                                </li>
                                <li className='tick_list'>
                                    <svg className='tick' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="tick" fill="#F8C00A" stroke='#F8C00A'><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4ZM14.66,20.75l9-8-1.32-1.5L14,18.63,9.71,14.29,8.29,15.71l5,5A1,1,0,0,0,14,21,1,1,0,0,0,14.66,20.75Z" data-name="58  Tick, Basic, Essential, Select"></path></svg>
                                    <span>Monitoring and Evaluation</span>
                                </li>
                                <li className='tick_list'>
                                    <svg className='tick' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="tick" fill="#F8C00A" stroke='#F8C00A'><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4ZM14.66,20.75l9-8-1.32-1.5L14,18.63,9.71,14.29,8.29,15.71l5,5A1,1,0,0,0,14,21,1,1,0,0,0,14.66,20.75Z" data-name="58  Tick, Basic, Essential, Select"></path></svg>
                                    <span>Reporting and Communication</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero
