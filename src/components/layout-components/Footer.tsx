

const Footer = () => {
    return (
        <footer className="bg-frontground">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="grid grid-cols-12 gap-6 px-6 py-10  text-text">
                    <div className="col-span-12 lg:col-span-5 pr-15">
                        <h3 className="font-bold mb-4">THÔNG TIN LIÊN HỆ</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2209.2947238407537!2d106.7117334!3d10.844616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d5562bffff%3A0x24149195aece9c96!2zQ8OUTkcgVFkgQ-G7lCBQSOG6pk4gR0nhuqJJIFBIw4FQIE7hu4BOIFThuqJORyBT4buQIFZJ4buGVCBOQU0!5e1!3m2!1svi!2s!4v1746764007534!5m2!1svi!2s"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className="col-span-12 lg:col-span-2">
                        <h3 className="font-bold mb-4">LIÊN KẾT NHANH</h3>
                        <ul className="text-gray-500  dark:text-gray-400 font-medium">
                            <li className="mb-2">
                                <a className="hover:opacity-80" href="/">Giới Thiệu</a>
                            </li>
                            <li className="mb-2">
                                <a className="hover:opacity-80" >Tư Vấn</a>
                            </li>
                            <li className="mb-2">
                                <a className="hover:opacity-80">Đào Tạo</a>
                            </li>
                            <li className="mb-2">
                                <a className="hover:opacity-80" >Tài Liệu Tham Khảo</a>
                            </li>
                            <li className="mb-2">
                                <a className="hover:opacity-80" >Tin Tức</a>
                            </li>
                            <li className="mb-2">
                                <a className="hover:opacity-80" >HUB Công Nghệ</a>
                            </li>
                        </ul>
                    </div>


                    <div className="col-span-12 lg:col-span-2">
                        <h3 className="font-bold mb-4">THÔNG TIN LIÊN HỆ</h3>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <div className="flex items-center space-x-2 py-2 ">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />                                </svg>
                                <a href="tel:0332120339">086 864 6332</a>
                            </div>
                            <div className="flex items-center space-x-2 py-2 ">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1" />
                                </svg>
                                <a href="mailto:info@vds.io.vn">info@vds.io.vn</a>
                            </div>

                        </ul>
                    </div>

                    <div className="col-span-12 lg:col-span-3">
                        <h3 className="font-bold mb-4">THƯ MỚI</h3>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-2">
                                <a>Đăng ký Mail để nhận thông báo từ VDS sớm hơn.</a>
                                <div className="flex space-x-2 mt-2">
                                    <input
                                        type="email"
                                        id="helper-text"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@mail.com"
                                    />
                                    <button
                                        type="submit"
                                        className="text-background bg-title  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ">
                                        Submit
                                    </button>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a
                        href="https://vds.io.vn/" className="hover:underline">© vds.io.vn</a>, All Right Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/tuvanvagiaiphapchuyendoiso" className="text-gray-500  hover:text-gray-900 dark:hover:text-white">

                            <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd"
                                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                      clip-rule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://www.youtube.com/@kinhtexanh.id.vn1"
                           className="text-gray-500 hover:text-gray-900 pr-2 dark:hover:text-white">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path
                                    d="M23.498 6.186a2.87 2.87 0 0 0-2.016-2.03C19.67 3.5 12 3.5 12 3.5s-7.67 0-9.482.656A2.87 2.87 0 0 0 .502 6.186 29.862 29.862 0 0 0 0 12a29.86 29.86 0 0 0 .502 5.814 2.87 2.87 0 0 0 2.016 2.03C4.33 20.5 12 20.5 12 20.5s7.67 0 9.482-.656a2.87 2.87 0 0 0 2.016-2.03A29.86 29.86 0 0 0 24 12a29.862 29.862 0 0 0-.502-5.814zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
                            </svg>
                            <span className="sr-only">YouTube channel</span>
                        </a>
                        <a href="https://zalo.me/2699478055973721660" className="text-gray-500 hover:text-gray-900 pr-2 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 50 50" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.782 0.166016H27.199C33.2653 0.166016 36.8103 1.05701 39.9572 2.74421C43.1041 4.4314 45.5875 6.89585 47.2557 10.0428C48.9429 13.1897 49.8339 16.7347 49.8339 22.801V27.1991C49.8339 33.2654 48.9429 36.8104 47.2557 39.9573C45.5685 43.1042 43.1041 45.5877 39.9572 47.2559C36.8103 48.9431 33.2653 49.8341 27.199 49.8341H22.8009C16.7346 49.8341 13.1896 48.9431 10.0427 47.2559C6.89583 45.5687 4.41243 43.1042 2.7442 39.9573C1.057 36.8104 0.166016 33.2654 0.166016 27.1991V22.801C0.166016 16.7347 1.057 13.1897 2.7442 10.0428C4.43139 6.89585 6.89583 4.41245 10.0427 2.74421C13.1707 1.05701 16.7346 0.166016 22.782 0.166016Z" fill="#6B7280"/>
                                <path opacity="0.12" fill-rule="evenodd" clip-rule="evenodd" d="M49.8336 26.4736V27.1994C49.8336 33.2657 48.9427 36.8107 47.2555 39.9576C45.5683 43.1045 43.1038 45.5879 39.9569 47.2562C36.81 48.9434 33.265 49.8344 27.1987 49.8344H22.8007C17.8369 49.8344 14.5612 49.2378 11.8104 48.0966L7.27539 43.4267L49.8336 26.4736Z" fill="#001A33"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.779 43.5892C10.1019 43.846 13.0061 43.1836 15.0682 42.1825C24.0225 47.1318 38.0197 46.8954 46.4923 41.4732C46.8209 40.9803 47.1279 40.4677 47.4128 39.9363C49.1062 36.7779 50.0004 33.22 50.0004 27.1316V22.7175C50.0004 16.629 49.1062 13.0711 47.4128 9.91273C45.7385 6.75436 43.2461 4.28093 40.0877 2.58758C36.9293 0.894239 33.3714 0 27.283 0H22.8499C17.6644 0 14.2982 0.652754 11.4699 1.89893C11.3153 2.03737 11.1636 2.17818 11.0151 2.32135C2.71734 10.3203 2.08658 27.6593 9.12279 37.0782C9.13064 37.0921 9.13933 37.1061 9.14889 37.1203C10.2334 38.7185 9.18694 41.5154 7.55068 43.1516C7.28431 43.399 7.37944 43.5512 7.779 43.5892Z" fill="white"/>
                                <path d="M20.5632 17H10.8382V19.0853H17.5869L10.9329 27.3317C10.7244 27.635 10.5728 27.9194 10.5728 28.5639V29.0947H19.748C20.203 29.0947 20.5822 28.7156 20.5822 28.2606V27.1421H13.4922L19.748 19.2938C19.8428 19.1801 20.0134 18.9716 20.0893 18.8768L20.1272 18.8199C20.4874 18.2891 20.5632 17.8341 20.5632 17.2844V17Z" fill="#6B7280"/>
                                <path d="M32.9416 29.0947H34.3255V17H32.2402V28.3933C32.2402 28.7725 32.5435 29.0947 32.9416 29.0947Z" fill="#6B7280"/>
                                <path d="M25.814 19.6924C23.1979 19.6924 21.0747 21.8156 21.0747 24.4317C21.0747 27.0478 23.1979 29.171 25.814 29.171C28.4301 29.171 30.5533 27.0478 30.5533 24.4317C30.5723 21.8156 28.4491 19.6924 25.814 19.6924ZM25.814 27.2184C24.2785 27.2184 23.0273 25.9672 23.0273 24.4317C23.0273 22.8962 24.2785 21.645 25.814 21.645C27.3495 21.645 28.6007 22.8962 28.6007 24.4317C28.6007 25.9672 27.3685 27.2184 25.814 27.2184Z" fill="#6B7280"/>
                                <path d="M40.4867 19.6162C37.8516 19.6162 35.7095 21.7584 35.7095 24.3934C35.7095 27.0285 37.8516 29.1707 40.4867 29.1707C43.1217 29.1707 45.2639 27.0285 45.2639 24.3934C45.2639 21.7584 43.1217 19.6162 40.4867 19.6162ZM40.4867 27.2181C38.9322 27.2181 37.681 25.9669 37.681 24.4124C37.681 22.8579 38.9322 21.6067 40.4867 21.6067C42.0412 21.6067 43.2924 22.8579 43.2924 24.4124C43.2924 25.9669 42.0412 27.2181 40.4867 27.2181Z" fill="#6B7280"/>
                                <path d="M29.4562 29.0944H30.5747V19.957H28.6221V28.2793C28.6221 28.7153 29.0012 29.0944 29.4562 29.0944Z" fill="#6B7280"/>
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer