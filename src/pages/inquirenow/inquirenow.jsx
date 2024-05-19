import 'flowbite/dist/flowbite.min.css';
import 'flowbite/dist/flowbite.min.js';
import emailjs from "emailjs-com";

function InquireNow() {
    const sendEmail = (e) => {
        e.preventDefault();
        let parms = {
            name: document.getElementById('name').value,
            email: document.getElementById("email").value,
            subject: document.getElementById('subject').value,
            message: document.getElementById("message").value
            
        }
        console.log("Parameters:", parms); // Debugging log
    
        // Replace placeholders in the email template with actual values
        let templateParams = {
            from_name: parms.name,
            to_email: parms.email,
            subject: parms.subject, 
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

    const handleFormSubmit = (e) => {
        
        // Check if CAPTCHA challenge is completed
        if (window.grecaptcha && window.grecaptcha.getResponse()) {
            // CAPTCHA challenge completed, proceed with form submission
            sendEmail(e);
        } else {
            // CAPTCHA challenge not completed, show error message or handle accordingly
            alert('Please complete the CAPTCHA challenge.');
        }
    
      
        


            
    };
    return (
        <div className="flex justify-center items-center h-full bg-gray-100">
            <div className="max-w-screen-xl px-4 py-48 lg:py-16">
                <div className="mt-6 sm:mt-8 md:gap-6 flex flex-col items-center xl:gap-8 justify-center">
                    <div className="flex flex-col justify-center items-center mx-auto w-full lg:max-w-2xl xl:max-w-4xl space-y-6">
                        <section className="bg-white dark:bg-gray-900">
                            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <h2 className="p-5 text-4xl tracking-tight font-extrabold text-center text-blue-900 dark:text-white">Inquire Now</h2>
                                <div className="border-t border-blue-800 py-4">
                                    <div className="bg-gray-100 shadow-sm dark:bg-gray-800 md:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                        <div className="order-2 sm:order-2 flex flex-col sm:items-start text-center sm:text-left">
                                            <a href="#" id="subject" className="text-base font-bold text-blue-900 hover:underline dark:text-white">King 8 Plastics</a>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">You are about to inquire directly to us. Please check your email.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* form */}
                                <form action="http://localhost:3001/" method="POST" onSubmit={handleFormSubmit} className="space-y-8 ">
                                    
                                <div className="border-t border-b border-blue-800 py-4">
                                    {/* name */}
                                     <label htmlFor="name" className="block mt-2 text-sm font-medium text-blue-900 dark:text-gray-300">Your name</label>
                                          <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your name" required />
                                    {/* email */}
                                    <label htmlFor="email" className="block mt-2 text-sm font-medium text-blue-900 dark:text-gray-300">Your email</label>
                                          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@king8Plastics.com" required />
                                    {/* subject */}
                                    <label htmlFor="subject" className="block mt-2 text-sm font-medium text-blue-900 dark:text-gray-300">Subject</label>
                                          <input type="text" id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Subject of your Inquiry" required />
                                </div>
                        
                                    {/* message */}
                                    <div className="sm:col-span-1">
                                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Other details..."></textarea>
                                    </div>
                                    {/* Google reCAPTCHA */}
                                    <div className="flex justify-center mx-5">
                                    <div className="g-recaptcha" data-sitekey="6LcD2OEpAAAAAG2-9oN0YpEp8oiKLTz9dl8B4JtY"></div>
                                    </div>
                                     {/* confirm button */}
                                    <div className="flex justify-center">
                                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Inquiry</button>
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
