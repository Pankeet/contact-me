import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOutline, IoCallOutline, IoLocationOutline } from "react-icons/io5";
import CardElement from "./card";
import { InputBox } from "./input";

export default function ContactMe(){
    return (
    <main className="grid lg:grid-cols-2 px-16 py-24">
        <section className="lg:col-span-1">
            <div>
                <span className="lg:text-2xl text-xl text-purple-600/80">
                    <u>Contact Me</u>
                </span>
            </div>
            <div className="lg:text-5xl text-3xl mt-2.5 font-semibold">
                <span>
                    Let&apos;s Create something <br className="hidden lg:block" />
                    amaxing <span className="text-purple-600/90 font-semibold">toghther</span>.
                </span>
            </div>
            <div className="pt-4">
                <span className="text-lg">
                    I would love to hear from you.<br />
                    Fill out the form or reach me through:<br />
                    <div className="flex gap-3 mt-4">
                        <FaGithub size={32} className="cursor-pointer"/>
                        <FaLinkedin size={32} className="cursor-pointer" />
                    </div>
                </span>
            </div>
            <div className="pt-10">
                <Image src="/images/scribble.svg" alt="scribble " width={100} height={20} className="w-24 h-auto drop-shadow-[0_0_8px_rgba(139,92,246,0.45)]" priority />
            </div>
            <div className="pt-10 flex flex-col lg:flex-row gap-7">
                <div className="flex-1 ">
                    <CardElement Icon={<IoCallOutline size={20} />} text="Email" description="pankeet04@gmail.com" />
                </div>
                <div className="flex-1">
                    <CardElement Icon={<IoMailOutline size={20}/>} text="Phone" description="+91 9875142251" />
                </div>
                <div className="flex-1">
                    <CardElement Icon={<IoLocationOutline size={20} />} text="Location" description="Vadodara, Gujarat" />
                </div>
            </div>
        </section>
        <section className="lg:col-span-1 mt-28 lg:mt-0 lg:place-content-center lg:px-12">
            <div className="relative rounded-3xl px-5 py-3 backdrop-blur-xl">
                <span>
                    <IoMailOutline className="p-2 w-10 h-10 rounded-lg text-violet-700 bg-violet-300/60 cursor-pointer" />
                </span>
                <div>
                    <h2 className="font-semibold text-2xl">Send a Message </h2>
                    <p>I&apos;ll get back to you as soon as possible.</p>
                </div>
                <div>
                    <form>
                        <div className="flex gap-4 my-5">
                            <InputBox placeholder="Your Name" Type="text" isTextArea={false}/>
                            <InputBox placeholder="Your Email" Type="email" isTextArea={false}/>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <InputBox placeholder="Subject" Type="text" isTextArea={false}/>
                            <InputBox placeholder="Message" Type="textarea" isTextArea={true} />
                        </div>
                     </form>
                </div>
            </div>
        </section>
    </main>
    )
}