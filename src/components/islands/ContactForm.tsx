import { useEffect, useState } from "react";
import { contactSchema, type ContactFormData } from "@/utils/validation";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  useEffect(() => {
    if (status === "ok") {
      const timer = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof ContactFormData]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setFieldErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const errors: Partial<Record<keyof ContactFormData, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormData;
        if (!errors[field]) {
          errors[field] = issue.message;
        }
      }
      setFieldErrors(errors);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.error || "送信に失敗しました");
        setStatus("error");
        return;
      }
      setStatus("ok");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setError("送信に失敗しました");
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-foreground text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500/50 transition-colors";
  const errorInputClasses =
    "w-full px-4 py-2.5 rounded-lg border border-red-300 bg-white text-foreground text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/50 transition-colors";

  return (
    <div className="glass rounded-2xl p-6">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label
            htmlFor="contact-name"
            className="text-sm font-medium text-foreground mb-1.5 block"
          >
            お名前
          </label>
          <input
            id="contact-name"
            name="name"
            placeholder="田中 太郎"
            value={formData.name}
            onChange={handleChange}
            required
            className={fieldErrors.name ? errorInputClasses : inputClasses}
          />
          {fieldErrors.name && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="text-sm font-medium text-foreground mb-1.5 block"
          >
            メールアドレス
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className={fieldErrors.email ? errorInputClasses : inputClasses}
          />
          {fieldErrors.email && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-sm font-medium text-foreground mb-1.5 block"
          >
            お問い合わせ内容
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="ご相談内容をお書きください"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={`${fieldErrors.message ? errorInputClasses : inputClasses} resize-none`}
          />
          {fieldErrors.message && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-teal-500/25 py-3 rounded-lg text-sm font-medium transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "sending" ? (
            "送信中..."
          ) : (
            <>
              送信する
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </>
          )}
        </button>

        {status === "ok" && (
          <p className="text-sm text-emerald-600 text-center">
            送信しました。ご連絡ありがとうございます。
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}
      </form>
    </div>
  );
}
