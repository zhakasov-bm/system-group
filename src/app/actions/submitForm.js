"use server";

import { sendTelegramMessage } from "@/utils/telegram";

export async function submitForm(prevState, formData) {
  const rawData = {
    name: formData.get("name"),
    company: formData.get("company"),
    city: formData.get("city"),
    phone: formData.get("phone"),
    comment: formData.get("comment"),
    access_key: "d37899ce-7aa0-4476-a07b-413b7b4e8354",
  };

  let web3Success = false;

  //Отправка в Web3Forms
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
    web3Success = data.success;
  } catch (err) {
    console.error("❌ Ошибка Web3Forms:", err);
  }

  //Отправка в Telegram
  try {
    const message = `
<b>Новая заявка!</b>
<b>👤 Имя:</b> ${rawData.name}
<b>🏢 Компания:</b> ${rawData.company}
<b>📍 Город:</b> ${rawData.city}
<b>📞 Телефон:</b> ${rawData.phone}
<b>💬 Комментарий:</b> ${rawData.comment || "-"}
    `;
    console.log("📨 Отправка в Telegram...");
    await sendTelegramMessage(message);
    console.log("✅ Отправлено в Telegram!");
  } catch (err) {
    console.error("❌ Ошибка Telegram:", err);
  }

  if (web3Success) {
    return {
      success: true,
      message: "Спасибо за заявку! Мы свяжемся с вами в ближайшее время.",
      errors: {},
    };
  } else {
    return {
      success: false,
      message: "Ошибка отправки формы. Попробуйте снова.",
      errors: {},
    };
  }
}
