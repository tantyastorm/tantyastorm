import { FormEvent, useId, useMemo, useState } from "react";
import { externalUrls } from "../data/config";

type FormValues = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
  website: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell me a little about the project.";
  }

  return errors;
}

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "not-configured"
  >("idle");
  const endpoint = externalUrls.contactFormEndpoint;

  const isDevelopment = import.meta.env.DEV;
  const statusMessage = useMemo(() => {
    if (status === "success") {
      return "Thanks. Your message was sent successfully.";
    }

    if (status === "error") {
      return "The message could not be sent. Your details are still here, so you can try again.";
    }

    if (status === "not-configured") {
      return isDevelopment
        ? "Contact form endpoint is not configured. Add VITE_CONTACT_FORM_ENDPOINT to enable submissions."
        : "The contact form is not available right now. Please use email or a profile link instead.";
    }

    return "";
  }, [isDevelopment, status]);

  const updateValue = (name: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status !== "submitting") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    if (values.website) {
      setStatus("success");
      setValues(initialValues);
      return;
    }

    if (!endpoint) {
      setStatus("not-configured");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          projectType: values.projectType,
          budget: values.budget,
          message: values.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor={`${id}-name`}>Name</label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(event) => updateValue("name", event.target.value)}
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${id}-name-error` : undefined}
        />
        {errors.name ? (
          <span className="form-error" id={`${id}-name-error`}>
            {errors.name}
          </span>
        ) : null}
      </div>

      <div className="form-field">
        <label htmlFor={`${id}-email`}>Email</label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => updateValue("email", event.target.value)}
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${id}-email-error` : undefined}
        />
        {errors.email ? (
          <span className="form-error" id={`${id}-email-error`}>
            {errors.email}
          </span>
        ) : null}
      </div>

      <div className="form-field">
        <label htmlFor={`${id}-project-type`}>Project type</label>
        <select
          id={`${id}-project-type`}
          name="projectType"
          value={values.projectType}
          onChange={(event) => updateValue("projectType", event.target.value)}
        >
          <option value="">Select a project type</option>
          <option>Python automation</option>
          <option>Web scraping</option>
          <option>Desktop application</option>
          <option>Data processing</option>
          <option>Backend or API integration</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor={`${id}-budget`}>Estimated budget</label>
        <select
          id={`${id}-budget`}
          name="budget"
          value={values.budget}
          onChange={(event) => updateValue("budget", event.target.value)}
        >
          <option value="">Select a range</option>
          <option>Under $500</option>
          <option>$500 - $1,500</option>
          <option>$1,500 - $5,000</option>
          <option>$5,000+</option>
        </select>
      </div>

      <div className="form-field form-field--wide">
        <label htmlFor={`${id}-message`}>Message</label>
        <textarea
          id={`${id}-message`}
          name="message"
          autoComplete="off"
          rows={6}
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
        />
        {errors.message ? (
          <span className="form-error" id={`${id}-message-error`}>
            {errors.message}
          </span>
        ) : null}
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input
          id={`${id}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateValue("website", event.target.value)}
        />
      </div>

      <div className="form-footer">
        <button
          className="button button--primary"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {statusMessage ? (
          <p
            className={`form-status form-status--${status}`}
            role="status"
            aria-live="polite"
          >
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
