import { createServerClient } from "@/lib/supabase"
import { MessagesTable } from "@/components/admin/messages-table"
import type { Message } from "@/lib/supabase"

export default async function MessagesPage() {
  const supabase = createServerClient()

  const { data: messages, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching messages:", error)
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700">Error loading messages. Please try again later.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact Messages</h1>
          <p className="text-gray-600 mt-2">Manage messages received through your portfolio contact form</p>
        </div>

        <MessagesTable messages={(messages as Message[]) || []} />
      </div>
    </div>
  )
}
