"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useActionState } from "react";
import { submitForm } from "@/app/actions/submitForm";
import { useTranslations } from "next-intl";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

const fieldKeys = ["name", "company", "city", "phone", "comment"];

const Modal = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [state, formAction, isPending] = useActionState(
    submitForm,
    initialState
  );

  const t = useTranslations("Form");

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  const inputClassName = (field) =>
    `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-600 focus:outline-none ${
      state?.errors?.[field] ? "border-red-500" : "border-gray-300"
    }`;

  const renderFormField = (id) => {
    const error = state?.errors?.[id];
    const isTextarea = id === "comment";

    return (
      <div key={id}>
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t(`fields.${id}.label`)}
        </label>
        {isTextarea ? (
          <textarea
            id={id}
            name={id}
            placeholder={t(`fields.${id}.placeholder`)}
            required
            className={inputClassName(id)}
            rows="4"
          />
        ) : (
          <input
            id={id}
            name={id}
            placeholder={t(`fields.${id}.placeholder`)}
            required
            className={inputClassName(id)}
            type="text"
          />
        )}
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  };

  const modalContent = (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-2xl max-h-[90%] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {state.success ? (
          <div className="text-center py-8">
            <div className="text-green-500 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {t("successTitle")}
            </h3>
            <p className="text-gray-600 mt-2">{t("successMessage")}</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              {t("title")}
            </h2>

            {state.message && !state.success && (
              <p className="text-sm text-red-500 mb-2 text-center">
                {t("errorMessage") || state.message}
              </p>
            )}

            <form action={formAction} className="space-y-4">
              {fieldKeys.map(renderFormField)}

              <button
                type="submit"
                className="md:max-w-full w-full rounded-4xl px-8 py-3 bg-primary-600 text-white font-semibold cursor-pointer transition-colors duration-300"
                disabled={isPending}
              >
                {isPending ? t("submitting") : t("submit")}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
