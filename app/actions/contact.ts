"use server"

import { createServerClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "All fields are required",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address",
    }
  }

  try {
    const supabase = createServerClient()

    const { error } = await supabase.from("messages").insert([
      {
        name,
        email,
        subject,
        message,
      },
    ])

    if (error) {
      console.error("Database error:", error)
      return {
        success: false,
        message: "Failed to send message. Please try again.",
      }
    }

    revalidatePath("/admin/messages")

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Unexpected error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}

export async function markMessageAsRead(messageId: number) {
  try {
    const supabase = createServerClient()

    const { error } = await supabase.from("messages").update({ read: true }).eq("id", messageId)

    if (error) {
      console.error("Error marking message as read:", error)
      return { success: false }
    }

    revalidatePath("/admin/messages")
    return { success: true }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false }
  }
}

export async function deleteMessage(messageId: number) {
  try {
    const supabase = createServerClient()

    const { error } = await supabase.from("messages").delete().eq("id", messageId)

    if (error) {
      console.error("Error deleting message:", error)
      return { success: false }
    }

    revalidatePath("/admin/messages")
    return { success: true }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false }
  }
}
