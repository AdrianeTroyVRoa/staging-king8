import "../style/output.css";
import king8 from "../assets/king8-logo.png";
import { createSignal, createEffect } from "solid-js";
import { toast, Toaster } from "solid-toast";
import * as yup from "yup";
//import zxcvbn from "zxcvbn"; //for password strength checker

const schema = yup.object().shape({
  first_name: yup
    .string()
    .min(2, "First Name needs to be at least 2 characters")
    .max(50, "First Name only allows up to 50 characters")
    .required("First Name is required"),
  last_name: yup
    .string()
    .min(2, "Last Name needs to be at least 2 characters")
    .max(50, "Last Name only allows up to 50 characters")
    .required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format",
    )
    .required("Email is required"),
  mobile_number: yup
    .string()
    .min(10, "Philippine Mobile Number is required to be 10 characters")
    .max(10, "Philippine Mobile Number is required to be 10 characters"),
  password: yup
    .string()
    .min(8, "Password needs to be at least 8 characters")
    .max(40, "Password should be utmost 40 characters only")
    .required("Password is required"),
});

export default function Register() {
  console.log("Hello");
  const [firstName, setFirstName] = createSignal("");
  const [lastName, setLastName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [mobileNumber, setMobileNumber] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [confirmPassword, setConfirmPassword] = createSignal("");
  const [confirmPasswordError, setConfirmPasswordError] = createSignal("");
  const [errors, setErrors] = createSignal({});

  const handleSubmit = async (e) => {
    console.log("Reached submit function");
    e.preventDefault();
    const formData = {
      first_name: firstName(),
      last_name: lastName(),
      email: email(),
      mobile_number: mobileNumber(),
      password: password(),
    };

    const passwordValue = password();
    const confirmPasswordValue = confirmPassword();
    if (passwordValue !== confirmPasswordValue) {
      setConfirmPasswordError("Passwords do not match");
      toast.error(confirmPasswordError());
    } else {
      setConfirmPasswordError("");
    }

    if (!confirmPasswordError()) {
      console.log("Should reach if password match");
      try {
        await schema.validate(formData, { abortEarly: false });
        setErrors({});

        const response = fetch("http://localhost:5000/submit-register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }).then((response) => {
          if (response.ok) {
            console.log("Form data submitted successfully");
            console.log(formData);
            setFirstName("");
            setLastName("");
            setEmail("");
            setMobileNumber("");
            setPassword("");
            setConfirmPassword("");
          } else {
            console.error("Failed to submit form data");
            throw new Error("Failed to register account");
          }
        });

        toast.promise(response, {
          loading: "Registering your account",
          success: "You're in! Verify account via your email now",
          error: "Error occurred while registering your account",
        });
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const errorMessages = {};
          err.inner.forEach((error) => {
            errorMessages[error.path] = error.message;
          });

          console.log(mobileNumber());
          for (const field in errorMessages) {
            toast.error(`Input Error: ${errorMessages[field]}`);
          }
        } else {
          console.error("An unexpected error occurred:", err);
          toast.error("An unexpected error occurred. Please try again later.");
        }
      }
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <a href="/">
            <img
              className="mx-auto h-20 w-auto"
              src={king8}
              alt="Mindanao King 8 Plastic"
            />
          </a>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an MK8P Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                for="first_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="first_name"
                  type="text"
                  value={firstName()}
                  onInput={(e) => setFirstName(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="last_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="last_name"
                  value={lastName()}
                  onInput={(e) => setLastName(e.target.value)}
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  value={email()}
                  onInput={(e) => setEmail(e.target.value)}
                  type="email"
                  autocomplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="mobileNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mobile Number
              </label>
              <div className="mt-2 flex items-center">
                <span>+63</span>
                <input
                  id="mobileNumber"
                  value={mobileNumber()}
                  onInput={(e) => setMobileNumber(e.target.value)}
                  type="tel"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div>
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  value={password()}
                  onInput={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div>
                <label
                  for="confirm_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm_password"
                  value={confirmPassword()}
                  onInput={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            By clicking <span className="italic">Register</span>, you agree to
            our&nbsp;
            <a
              href="#"
              class="font-semibold leading-6 text-blue-950 hover:text-blue-700"
            >
              Terms
            </a>
            ,&nbsp;
            <a
              href="#"
              class="font-semibold leading-6 text-blue-950 hover:text-blue-700"
            >
              Privacy Policy
            </a>
            &nbsp; and&nbsp;
            <a
              href="#"
              class="font-semibold leading-6 text-blue-950 hover:text-blue-700"
            >
              Cookie Policy
            </a>
          </p>
          <p class="mt-10 text-center text-sm text-gray-500">
            Already have an account?&nbsp;
            <a
              href="/login"
              class="font-semibold leading-6 text-blue-950 hover:text-blue-700"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
      <Toaster />
    </>
  );
}
