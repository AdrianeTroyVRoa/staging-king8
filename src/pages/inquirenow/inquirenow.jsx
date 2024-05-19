import 'flowbite/dist/flowbite.min.css';
import 'flowbite/dist/flowbite.min.js';
import emailjs from "emailjs-com";
import Header from "../../components/Header";

function InquireNow() {
    const sendEmail = (e) => {
        e.preventDefault();
        let parms = {
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }
        console.log("Parameters:", parms); // Debugging log
    
        // Replace placeholders in the email template with actual values
        let templateParams = {
            to_email: parms.email,
            message: parms.message
        };
    
        emailjs.send('service_king8', 'template_y7jupsr', templateParams, 'YMQh1o1VaUixvbnJi')
            .then((result) => {
                console.log("Email Sent:", result.text); // Debugging log
                alert('Message sent successfully!');
            }, (error) => {
                console.error("Error:", error.text); // Debugging log
                alert('Failed to send the message, please try again.');
            });
    };
    return (
        <div className="flex justify-center items-center h-full bg-gray-100">
            <Header/>
            <div className="max-w-screen-xl px-4 py-48 lg:py-16">
                <div className="mt-6 sm:mt-8 md:gap-6 flex flex-col items-center xl:gap-8 justify-center">
                    <div className="flex flex-col justify-center items-center mx-auto w-full lg:max-w-2xl xl:max-w-4xl space-y-6">
                        <section className="bg-white dark:bg-gray-900">
                            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <h2 className="mb-4 p-5 text-4xl tracking-tight font-extrabold text-center text-blue-900 dark:text-white">Inquire Now</h2>
                                <div className="border-t border-b border-blue-800 py-4">
                                    <div className="bg-white shadow-sm dark:bg-gray-800 md:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                        <div className="order-2 sm:order-2 flex flex-col sm:items-start text-center sm:text-left">
                                            <a href="#" id="subject" className="text-base font-bold text-blue-900 hover:underline dark:text-white">Pipes</a>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">You are about to inquire about our Pipes that are high Quality!</p>
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={sendEmail} className="space-y-8 pt-5">
                                <div className="border-t border-b border-blue-800 py-4">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                                </div>
                                
                                    <div className="sm:col-span-1">
                                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Other details..."></textarea>
                                    </div>
                                    <div className="flex justify-center">
                                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirm</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InquireNow;
