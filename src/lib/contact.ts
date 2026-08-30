import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { dict, type Lang } from "./i18n";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(120),
  email: z.string().email().max(254),
  phone: z.string().trim().max(40),
  type: z.string().trim().min(1).max(120),
  message: z.string().trim().max(4000),
  lang: z.enum(["pt", "en"]),
});

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const replaceText = (text: string, values: Record<string, string>) =>
  text.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");

type EmailCopy = (typeof dict)["pt"]["email"];

const emailLayout = (content: string, copy: EmailCopy, lang: Lang) => {
  const siteUrl = process.env.SITE_URL;
  const assetUrl = siteUrl.replace(/\/$/, "");
  return `<!DOCTYPE html><html lang="${lang}"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>KwanzaSites</title></head><body style="margin:0;padding:0;background:#07111f;color:#e8f0fb;font-family:Arial,Helvetica,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#07111f;padding:36px 14px;"><tr><td align="center"><table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:640px;background:#0d1b2d;border:1px solid #1d3856;border-radius:14px;overflow:hidden;"><tr><td style="padding:26px 34px;border-bottom:1px solid #1d3856;background:#0a1728;"></td></tr><tr><td style="padding:36px 34px;">${content}</td></tr><tr><td style="padding:24px 34px;border-top:1px solid #1d3856;background:#0a1728;text-align:center;"><p style="margin:0 0 8px;font-size:13px;line-height:1.5;color:#8ea4bc;">${escapeHtml(copy.footerTagline)}</p><a href="${assetUrl}" style="font-size:13px;color:#63a8ff;text-decoration:none;">${escapeHtml(copy.website)}</a></td></tr></table></td></tr></table></body></html>`;
};

const signature = (copy: EmailCopy, assetUrl: string) =>
  `<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:30px;border-top:1px solid #1d3856;padding-top:24px;"><tr><td><img src="${assetUrl}/bannerAssinatura.png" alt="${escapeHtml(copy.signatureCompany)}" width="100%" style="display:block;max-width:520px;height:auto;margin-bottom:18px;" /><p style="margin:0 0 6px;font-size:15px;font-weight:700;color:#e8f0fb;">${escapeHtml(copy.signatureName)}</p><p style="margin:0 0 5px;font-size:13px;color:#8ea4bc;">${escapeHtml(copy.signatureFounder)}</p><p style="margin:0 0 5px;font-size:15px;font-weight:700;color:#63a8ff;">${escapeHtml(copy.signatureCompany)}</p><p style="margin:0 0 5px;font-size:13px;line-height:1.5;color:#8ea4bc;">${escapeHtml(copy.signatureTagline)}</p><a href="${assetUrl}" style="font-size:13px;color:#63a8ff;text-decoration:none;">${escapeHtml(copy.signatureWebsite)}</a></td></tr></table>`;

const createClientEmail = (name: string, copy: EmailCopy, lang: Lang) => {
  const assetUrl = process.env.SITE_URL.replace(/\/$/, "");
  return emailLayout(
    `<p style="margin:0 0 14px;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#63a8ff;">KwanzaSites</p><h1 style="margin:0 0 20px;font-size:26px;line-height:1.25;color:#f5f9ff;">${escapeHtml(copy.confirmationTitle)}</h1><p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#b7c7d9;">${escapeHtml(replaceText(copy.greeting, { name }))}</p><p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#b7c7d9;">${escapeHtml(copy.confirmationIntro)}</p><p style="margin:0;font-size:16px;line-height:1.6;color:#b7c7d9;">${escapeHtml(copy.confirmationBody)}</p><p style="margin:28px 0 6px;font-size:15px;color:#b7c7d9;">${escapeHtml(copy.thankYou)}</p><p style="margin:0;font-size:15px;font-weight:700;color:#f5f9ff;">${escapeHtml(copy.team)}</p>${signature(copy, assetUrl)}`,
    copy,
    lang,
  );
};

const createAdminEmail = (data: z.infer<typeof contactSchema>, copy: EmailCopy, lang: Lang) => {
  const assetUrl = process.env.SITE_URL.replace(/\/$/, "");
  const row = (label: string, value: string) =>
    `<tr><td style="padding:13px 0;border-bottom:1px solid #1d3856;font-weight:700;color:#e8f0fb;width:38%;">${escapeHtml(label)}</td><td style="padding:13px 0;border-bottom:1px solid #1d3856;color:#b7c7d9;">${escapeHtml(value)}</td></tr>`;
  return emailLayout(
    `<p style="margin:0 0 14px;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#63a8ff;">${escapeHtml(copy.adminLabel)}</p><h1 style="margin:0 0 10px;font-size:26px;line-height:1.25;color:#f5f9ff;">${escapeHtml(copy.adminTitle)}</h1><p style="margin:0 0 28px;font-size:15px;line-height:1.6;color:#8ea4bc;">${escapeHtml(copy.adminIntro)}</p><table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;">${row(copy.name, data.name)}${row(copy.company, data.company || copy.notProvided)}${row(copy.email, data.email)}${row(copy.phone, data.phone || copy.notProvided)}${row(copy.solutionType, data.type)}</table><div style="margin-top:24px;padding:20px;background:#12253b;border:1px solid #1d3856;border-radius:10px;"><p style="margin:0 0 10px;font-size:14px;font-weight:700;color:#e8f0fb;">${escapeHtml(copy.message)}</p><p style="margin:0;font-size:15px;line-height:1.6;color:#b7c7d9;white-space:pre-line;">${escapeHtml(data.message || copy.noMessage)}</p></div>${signature(copy, assetUrl)}`,
    copy,
    lang,
  );
};

const sendEmail = async (payload: {
  apiKey: string;
  from: string;
  to: string[];
  subject: string;
  html: string;
  text: string;
  reply_to?: string;
}) =>
  fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${payload.apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: payload.from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
      ...(payload.reply_to && { reply_to: payload.reply_to }),
    }),
  });

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!apiKey || !from) throw new Error("Email service is not configured");
    const copy = dict[data.lang].email;
    const clientText = [
      replaceText(copy.greeting, { name: data.name }),
      "",
      copy.confirmationIntro,
      copy.confirmationBody,
      "",
      copy.thankYou,
      copy.team,
    ].join("\n");
    const adminText = [
      copy.adminTitle,
      "",
      `${copy.name}: ${data.name}`,
      `${copy.company}: ${data.company || copy.notProvided}`,
      `${copy.email}: ${data.email}`,
      `${copy.phone}: ${data.phone || copy.notProvided}`,
      `${copy.solutionType}: ${data.type}`,
      "",
      `${copy.message}:`,
      data.message || copy.noMessage,
    ].join("\n");
    const [adminResponse, clientResponse] = await Promise.all([
      sendEmail({
        apiKey,
        from,
        to: ["manuelpiresluis@gmail.com"],
        reply_to: data.email,
        subject: replaceText(copy.adminSubject, { type: data.type }),
        html: createAdminEmail(data, copy, data.lang),
        text: adminText,
      }),
      sendEmail({
        apiKey,
        from,
        to: [data.email],
        subject: copy.confirmationSubject,
        html: createClientEmail(data.name, copy, data.lang),
        text: clientText,
      }),
    ]);
    if (!adminResponse.ok || !clientResponse.ok)
      throw new Error("Email provider rejected the request");
    return { sent: true };
  });
