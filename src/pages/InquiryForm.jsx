import "../style/output.css";
import { createSignal, onMount } from "solid-js";
import "flowbite/dist/flowbite.min.css";
import "flowbite/dist/flowbite.min.js";
import emailjs from "emailjs-com";
import { toast, Toaster } from "solid-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";

function InquireNow() {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [subject, setSubject] = createSignal("");
  const [message, setMessage] = createSignal("");
  const [phoneNum, setPhoneNum] = createSignal("");

  onMount(() => {
    // Dynamically create and append the script element for reCAPTCHA
    const recaptchaScript = document.createElement("script");
    recaptchaScript.src = "https://www.google.com/recaptcha/api.js";
    recaptchaScript.onload = () => {
      // Initialize reCAPTCHA after the script is loaded
      window.grecaptcha.ready(() => {
        // reCAPTCHA initialized
      });
    };
    document.body.appendChild(recaptchaScript);

    // Dynamically create and append the script element for EmailJS
    const emailjsScript = document.createElement("script");
    emailjsScript.src = "https://cdn.emailjs.com/dist/email.min.js";
    emailjsScript.onload = () => {
      // Initialize EmailJS with your user ID after the script is loaded
      emailjs.init("YMQh1o1VaUixvbnJi"); // Replace with your actual user ID
    };
    document.body.appendChild(emailjsScript);
  });


  const sendEmail = (e) => {
    e.preventDefault();
    let parms = {
      name: name(),
      email: email(),
      phoneNum: phoneNum(),
      subject: subject(),
      message: message(),
    };

    // Replace placeholders in the email template with actual values
    let templateParams = {
      from_name: parms.name,
      to_email: parms.email,
      phoneNum: parms.phoneNum,
      subject: parms.subject,
      message: parms.message,
    };

    // to save info to db
    const inquiryData = {
      name: parms.name,
      subject: parms.subject,
      mobile_num: parms.phoneNum,
      email: parms.email,
      msg: parms.message,
    };

//    emailjs
//      .send(
//        "service_king8",
//        "template_y7jupsr",
//        templateParams,
//        "YMQh1o1VaUixvbnJi",
//      )
//      .then(
//        () => {
//          toast.success("Message sent successfully!");
//        },
//        () => {
//          toast.error("Failed to send the message, please try again.");
//          return;
//        },
//      );

    //saving info to db proper
    try {
      const response = fetch("http://localhost:5000/submit-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiryData),
      }).then((response) => {
        if (response.ok) {
          console.log("Form data submitted successfully");
          console.log(inquiryData);
          setName("");
          setEmail("");
          setPhoneNum("");
          setSubject("");
          setMessage("");
        } else {
          console.error("Failed to submit form data");
          throw new Error("Failed to save data to database");
        }
      });

      toast.promise(response, {
        loading: "Registering your account",
        success: "Message saved to servers",
        error: "Message sent successfully but with errors",
      });
    } catch (err) {
      console.error("An unexpected error occurred:", err);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if CAPTCHA challenge is completed
    if (window.grecaptcha && window.grecaptcha.getResponse()) {
      // CAPTCHA challenge completed, proceed with form submission
      sendEmail(e);
    } else {
      // CAPTCHA challenge not completed, show error message or handle accordingly
      toast.error("Please complete the CAPTCHA challenge.");
      setShowCaptcha(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col auto-mx justify-center items-center px-4 py-16 lg:py-16">
        <div className="w-full max-w-screen-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl pt-5 font-extrabold text-center text-blue-900 mb-8">
            Inquire Now
          </h2>
          <div className="border-t border-b border-blue-800 py-8">
            <div className="bg-gray-100 shadow-sm md:p-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left">
              <div className="order-2 sm:order-2 flex flex-col sm:items-center text-center sm:text-left">
                <a
                  href="#"
                  id="subject"
                  className="text-base font-bold text-blue-900 hover:underline"
                >
                  King 8 Plastics
                </a>
                <p className="text-sm text-gray-500">
                  You are about to inquire directly to us. Please check your
                  email.
                </p>
              </div>
            </div>
          </div>
          <form
            action="http://localhost:3000/"
            method="POST"
            onSubmit={handleFormSubmit}
            className="space-y-6"
          >
            <div className="pt-5 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-blue-900"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name()}
                  onInput={(e) => setName(e.target.value)}
                  pattern="\b[A-Z][a-z]*\b(?:\s[A-Z][a-z]*)*"
                  className="w-full p-2.5 rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email()}
                  onInput={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="name@king8Plastics.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNum"
                  className="block text-sm font-medium text-blue-900"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNum"
                  value={phoneNum()}
                  onInput={(e) => setPhoneNum(e.target.value)}
                  className="w-full p-2.5 rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="+639XXXXXXXXXX"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-blue-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject()}
                  onInput={(e) => setSubject(e.target.value)}
                  className="w-full p-2.5 rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Subject of your Inquiry"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-blue-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message()}
                  onInput={(e) => setMessage(e.target.value)}
                  rows="6"
                  className="w-full p-2.5 rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Message..."
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LdfcOQpAAAAABjG8hk5XKdOvmZ7Epuyj_iIeEwB"
                ></div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-700 text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
      <Footer />
    </div>
  );
}

export default InquireNow;
