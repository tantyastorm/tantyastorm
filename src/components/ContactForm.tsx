import { FormEvent, useId, useMemo, useState } from "react";
import { externalUrls } from "../data/config";
import { useI18n } from "../i18n";

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

function validate(
  values: FormValues,
  messages: {
    name: string;
    email: string;
    invalidEmail: string;
    message: string;
  },
): FormErrors {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) {
    errors.name = messages.name;
  }

  if (!values.email.trim()) {
    errors.email = messages.email;
  } else if (!emailPattern.test(values.email)) {
    errors.email = messages.invalidEmail;
  }

  if (!values.message.trim()) {
    errors.message = messages.message;
  }

  return errors;
}

export function ContactForm() {
  const { t } = useI18n();
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
      return t.contact.form.status.success;
    }

    if (status === "error") {
      return t.contact.form.status.error;
    }

    if (status === "not-configured") {
      return isDevelopment
        ? t.contact.form.status.notConfiguredDev
        : t.contact.form.status.notConfigured;
    }

    return "";
  }, [isDevelopment, status, t]);

  const updateValue = (name: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status !== "submitting") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values, t.contact.form.errors);
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
        <label htmlFor={`${id}-name`}>{t.contact.form.name}</label>
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
        <label htmlFor={`${id}-email`}>{t.contact.form.email}</label>
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
        <label htmlFor={`${id}-project-type`}>
          {t.contact.form.projectType}
        </label>
        <select
          id={`${id}-project-type`}
          name="projectType"
          value={values.projectType}
          onChange={(event) => updateValue("projectType", event.target.value)}
        >
          <option value="">{t.contact.form.selectProjectType}</option>
          {t.contact.form.projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor={`${id}-budget`}>{t.contact.form.budget}</label>
        <select
          id={`${id}-budget`}
          name="budget"
          value={values.budget}
          onChange={(event) => updateValue("budget", event.target.value)}
        >
          <option value="">{t.contact.form.selectBudget}</option>
          {t.contact.form.budgetOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="form-field form-field--wide">
        <label htmlFor={`${id}-message`}>{t.contact.form.message}</label>
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
        <label htmlFor={`${id}-website`}>{t.contact.form.website}</label>
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
          {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
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
