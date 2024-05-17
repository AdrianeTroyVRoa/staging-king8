import "../style/output.css";
import king8 from "../assets/king8-logo.png";
import { createSignal, createEffect } from "solid-js";
import { toast, Toaster } from "solid-toast";
import * as yup from "yup";

const schema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile_number: yup.string().required("Mobile Number is required"),
  password: yup.string().required("Password is required"),
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
  const [displayErr, setDisplayErr] = createSignal(true);

  createEffect(() => {
    const passwordValue = password();
    const confirmPasswordValue = confirmPassword();
    if (passwordValue !== confirmPasswordValue) {
      setConfirmPasswordError("Passwords do not match.");
      if (displayErr()) {
        toast.error(confirmPasswordError());
      }
      setDisplayErr(false);
    } else {
      toast.success("Password Match");
      setDisplayErr(true);
      setConfirmPasswordError("");
    }
  });

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

    if (!confirmPasswordError()) {
      console.log("Should reach if password match");
      try {
        await schema.validate(formData, { strict: true });
        setErrors({});

        const response = await fetch("http://localhost:5000/submit-register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form data submitted successfully");
          console.log(formData);
          setFirstName("");
          setLastName("");
          setEmail("");
          setMobileNumber("");
          setPassword("");
          setConfirmPassword("");
          toast.success("Successfully registered account");
        } else {
          console.error("Failed to submit form data");
          toast.error("Failed to register account");
        }
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const errorMessages = err.inner.reduce((acc, error) => {
            acc[error.path] = error.message;
            return acc;
          }, {});
          setErrors(errorMessages);
          console.log(errors())
          console.log(formData)
          toast.error("Failed to register due to validation errors");
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
                {errors().first_name && (
                  <div style={{ color: "red" }}>{errors().firstName}</div>
                )}
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
                {errors().last_name && (
                  <div style={{ color: "red" }}>{errors().lastName}</div>
                )}
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
                {errors().email && (
                  <div style={{ color: "red" }}>{errors().email}</div>
                )}
              </div>
            </div>

            <div>
              <label
                for="mobileNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                  id="mobileNumber"
                  value={mobileNumber()}
                  onInput={(e) => setMobileNumber(e.target.value)}
                  type="tel"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                {errors().mobileNumber && (
                  <div style={{ color: "red" }}>{errors().mobileNumber}</div>
                )}
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
                {errors().password && (
                  <div style={{ color: "red" }}>{errors().password}</div>
                )}
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
                {errors().confirm_password && (
                  <div style={{ color: "red" }}>{errors().confirmPassword}</div>
                )}
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
