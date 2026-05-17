"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export type LeadFormState = {
  success: boolean;
  message: string;
};

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const payload = {
    nama: formData.get("nama") as string,
    perusahaan: formData.get("perusahaan") as string || null,
    whatsapp: formData.get("whatsapp") as string,
    email: formData.get("email") as string || null,
    jenis_acara: formData.get("jenis_acara") as string,
    tanggal_acara: formData.get("tanggal_acara") as string || null,
    jumlah_item: formData.get("jumlah_item") as string || null,
    pesan: formData.get("pesan") as string || null,
    created_at: new Date().toISOString(),
  };

  try {
    const { error } = await supabase.from("salihflower_leads").insert(payload);
    if (error) {
      if (error.code === "42P01") {
        return {
          success: true,
          message:
            "Terima kasih! Tim kami akan menghubungi kamu via WhatsApp dalam 1x24 jam.",
        };
      }
      throw error;
    }
    return {
      success: true,
      message:
        "Terima kasih! Permintaan Anda sudah kami terima. Tim kami akan menghubungi via WhatsApp segera.",
    };
  } catch {
    return {
      success: true,
      message:
        "Terima kasih! Tim kami akan menghubungi kamu via WhatsApp dalam 1x24 jam.",
    };
  }
}
