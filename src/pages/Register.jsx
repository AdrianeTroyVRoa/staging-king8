import "../style/output.css";
import king8 from "../assets/king8-logo.png";
import { object, string, number, InferType } from "yup";
import { createEffect, createSignal } from "solid-js";

const schema = object({
  firstName: string()
    .min(2, "must be at least 2 characters long")
    .max(50, "must be at most 50 characters only")
    .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
    .required(),
  lastName: string()
    .min(2, "must be at least 2 characters long")
    .max(50, "must be at most 50 characters only")
    .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
    .required(),
  email: string().email("must be a valid email").required(),
  mobileNumber: string()
    .min(10, "must start with 9")
    .max(10, "must start with 9")
    .required(),
  password: string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password cannot be longer than 20 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character",
    )
    .required("Password is required"),
});

export default function Register() {
  const [firstName, setFirstName] = createSignal("");
  const [lastName, setLastName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [mobileNumber, setMobileNumber] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [confirmPassword, setConfirmPassword] = createSignal("");
  const [confirmPasswordError, setConfirmPasswordError] = createSignal("");
  const [errors, setErrors] = createSignal({});

  createEffect(() => {
    const passwordValue = password();
    const confirmPasswordValue = confirmPassword();

    if (passwordValue !== confirmPasswordValue) {
      setConfirmPassword("Passwords do not match.");
    } else {
      setConfirmPassword("");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstName(),
      lastName: lastName(),
      email: email(),
      mobileNumber: mobileNumber(),
      password: password(),
    };

    if (!confirmPasswordError()) {
      try {
        await schema.validate(formData, { strict: true });
        setErrors({});

        const response = await fetch("localhost:5000/submit-register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form data submitted successfully");
          setFirstName("");
          setLastName("");
          setEmail("");
          setMobileNumber("");
          setPassword("");
          setConfirmPassword("");
          toast.success('Successfully registered account')
        } else {
          console.error("Failed to submit form data");
          toast.error('Failed to register account')
        }
      } catch (validationErrors) {
        const errorMessages = validationErrors.inner.reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
        setErrors(errorMessages);
        toast.error('Failed to register due to validation errors')
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
                for="firstName"
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
                {errors().name && (
                  <div style={{ color: "red" }}>{errors().name}</div>
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
                {errors().name && (
                  <div style={{ color: "red" }}>{errors().name}</div>
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
                {errors().name && (
                  <div style={{ color: "red" }}>{errors().name}</div>
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
                {errors().name && (
                  <div style={{ color: "red" }}>{errors().name}</div>
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
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                {errors().name && (
                  <div style={{ color: "red" }}>{errors().name}</div>
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
                  name="confirm_password"
                  onInput={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                {errors().name && (
                  <div style={{ color: "red" }}>{errors().name}</div>
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
    </>
  );
}
