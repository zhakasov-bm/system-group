// app/actions/submitForm.js
"use server";

export async function submitForm(prevState, formData) {
  const rawData = {
    name: formData.get("name"),
    company: formData.get("company"),
    city: formData.get("city"),
    phone: formData.get("phone"),
    comment: formData.get("comment"),
    access_key: "5ad1bd5f-b606-4450-ae6e-0630ebca9a84",
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(rawData),
    });

    const data = await res.json();

    if (data.success) {
      return {
        success: true,
        message: "Спасибо за заявку! Мы свяжемся с вами в ближайшее время.",
        errors: {},
      };
    } else {
      return {
        success: false,
        message: "Ошибка отправки, попробуйте снова.",
        errors: {},
      };
    }
  } catch (error) {
    if (error instanceof NetworkError) {
      return {
        success: false,
        message: "Ошибка сети, попробуйте снова.",
        errors: {},
      };
    } else {
      return {
        success: false,
        message: "Произошла ошибка. Попробуйте снова позже.",
        errors: {},
      };
    }
  }
}
