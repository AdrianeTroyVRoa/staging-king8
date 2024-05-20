import "../../style/output.css";
import { createSignal, onMount } from 'solid-js';
import 'flowbite/dist/flowbite.min.css';
import 'flowbite/dist/flowbite.min.js';
import emailjs from "emailjs-com";
import { toast, Toaster } from "solid-toast";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function InquireNow() {
    const [name, setName] = createSignal('');
    const [email, setEmail] = createSignal('');
    const [subject, setSubject] = createSignal('');
    const [message, setMessage] = createSignal('');
    const [showCaptcha, setShowCaptcha] = createSignal(false);

    onMount(() => {
        // Dynamically create and append the script element
        const script = document.createElement('script');
        script.src = 'https://cdn.emailjs.com/dist/email.min.js';
        script.onload = () => {
          // Initialize EmailJS with your user ID after the script is loaded
          emailjs.init('YMQh1o1VaUixvbnJi'); // Replace with your actual user ID
        };
        document.body.appendChild(script);
    });

    const sendEmail = (e) => {
        e.preventDefault();
        let parms = {
            name: name(),
            email: email(),
            subject: subject(),
            message: message(),
        };

        // Replace placeholders in the email template with actual values
        let templateParams = {
            from_name: parms.name,
            to_email: parms.email,
            subject: parms.subject, 
            message: parms.message
        };

        emailjs.send('service_king8', 'template_y7jupsr', templateParams, 'YMQh1o1VaUixvbnJi')
            .then((result) => {
                toast.success('Message sent successfully!');
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            }, (error) => {
                toast.error('Failed to send the message, please try again.');
            });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Check if CAPTCHA challenge is completed
        if (window.grecaptcha && window.grecaptcha.getResponse()) {
            // CAPTCHA challenge completed, proceed with form submission
            sendEmail(e);
        } else {
            // CAPTCHA challenge not completed, show error message or handle accordingly
            toast.error('Please complete the CAPTCHA challenge.');
            setShowCaptcha(true);
        }
    };

    return (    
        <div className="flex flex-col min-h-screen">
                <Header />
            <div className="max-w-screen-xl px-4 py-48 lg:py-16">
                <div className="mt-6 sm:mt-8 md:gap-6 flex flex-col items-center xl:gap-8 justify-center">
                    <div className="flex flex-col justify-center items-center mx-auto w-full lg:max-w-2xl xl:max-w-4xl space-y-6">
                    <section className="bg-white py-8 lg:py-16 px-4 mx-auto max-w-screen-md rounded-lg shadow-lg">
                            <div className=" mx-auto max-w-screen-md">
                                <h2 className="p-5 text-4xl tracking-tight font-extrabold text-center text-blue-900">Inquire Now</h2>
                                <div className="border-t border-blue-800 py-4">
                                    <div className="bg-gray-100 shadow-sm md:p-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left">
                                        <div className="order-2 sm:order-2 flex flex-col sm:items-center text-center sm:text-left">
                                            <a href="#" id="subject" className="text-base font-bold text-blue-900 hover:underline">King 8 Plastics</a>
                                            <p className="text-sm text-gray-500">You are about to inquire directly to us. Please check your email.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* form */}
                                <form action="http://localhost:3000/" method="POST" onSubmit={handleFormSubmit} className="space-y-8">
                                    <div className="border-t border-b border-blue-800 py-4">
                                        {/* name */}
                                        <label htmlFor="name" className="block mt-2 text-sm font-medium text-blue-900">Your name</label>
                                        <input type="text" id="name" value={name()} onInput={(e) => setName(e.target.value)} pattern="[A-Za-z]*" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Your name" required />
                                        {/* email */}
                                        <label htmlFor="email" className="block mt-2 text-sm font-medium text-blue-900">Your email</label>
                                        <input type="email" id="email" value={email()} onInput={(e) => setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@king8Plastics.com" required />
                                        {/* subject */}
                                        <label htmlFor="subject" className="block mt-2 text-sm font-medium text-blue-900">Subject</label>
                                        <input type="text" id="subject" value={subject()} onInput={(e) => setSubject(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Subject of your Inquiry" required />
                                    </div>
                                    {/* message */}
                                    <div className="sm:col-span-1">
                                        <textarea id="message" value={message()} onInput={(e) => setMessage(e.target.value)} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Message..."></textarea>
                                    </div>
                                    {/* Google reCAPTCHA */}
                                    <div className="flex justify-center mx-5">
                                        <div className="g-recaptcha" data-sitekey="6LcD2OEpAAAAAG2-9oN0YpEp8oiKLTz9dl8B4JtY"></div>
                                    </div>
                                    {/* confirm button */}
                                    <div className="flex justify-center">
                                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Send Inquiry</button>
                                    </div>
                                </form>
                            </div>
                        </section>  
                    </div>
                </div>
            </div>
            <Toaster /> 
            <Footer />

        </div>
    );
}

export default InquireNow;
