"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MailOpen, Trash2, Eye, Calendar, User } from "lucide-react"
import { markMessageAsRead, deleteMessage } from "@/app/actions/contact"
import type { Message } from "@/lib/supabase"

interface MessagesTableProps {
  messages: Message[]
}

export function MessagesTable({ messages }: MessagesTableProps) {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [isDeleting, setIsDeleting] = useState<number | null>(null)

  const handleMarkAsRead = async (messageId: number) => {
    await markMessageAsRead(messageId)
  }

  const handleDelete = async (messageId: number) => {
    if (confirm("Are you sure you want to delete this message?")) {
      setIsDeleting(messageId)
      await deleteMessage(messageId)
      setIsDeleting(null)
      if (selectedMessage?.id === messageId) {
        setSelectedMessage(null)
      }
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const unreadCount = messages.filter((m) => !m.read).length

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Messages List */}
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Messages ({messages.length})</span>
              {unreadCount > 0 && <Badge variant="destructive">{unreadCount} unread</Badge>}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-96 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  <Mail className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>No messages yet</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                        selectedMessage?.id === message.id ? "bg-blue-50 border-blue-200" : ""
                      } ${!message.read ? "bg-blue-25 border-l-4 border-l-blue-500" : ""}`}
                      onClick={() => setSelectedMessage(message)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            {message.read ? (
                              <MailOpen className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Mail className="h-4 w-4 text-blue-500" />
                            )}
                            <p
                              className={`text-sm font-medium truncate ${
                                !message.read ? "text-gray-900" : "text-gray-600"
                              }`}
                            >
                              {message.name}
                            </p>
                          </div>
                          <p className="text-sm text-gray-500 truncate mt-1">{message.subject}</p>
                          <p className="text-xs text-gray-400 mt-1">{formatDate(message.created_at)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Message Detail */}
      <div className="lg:col-span-2">
        {selectedMessage ? (
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>{selectedMessage.name}</span>
                    {!selectedMessage.read && <Badge variant="secondary">Unread</Badge>}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{selectedMessage.email}</span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(selectedMessage.created_at)}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {!selectedMessage.read && (
                    <Button variant="outline" size="sm" onClick={() => handleMarkAsRead(selectedMessage.id)}>
                      <Eye className="h-4 w-4 mr-2" />
                      Mark as Read
                    </Button>
                  )}
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(selectedMessage.id)}
                    disabled={isDeleting === selectedMessage.id}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    {isDeleting === selectedMessage.id ? "Deleting..." : "Delete"}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Subject:</h4>
                  <p className="text-gray-700">{selectedMessage.subject}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Message:</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <Button asChild className="w-full sm:w-auto">
                    <a href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}>
                      Reply via Email
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="flex items-center justify-center h-96">
              <div className="text-center text-gray-500">
                <Mail className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-medium">Select a message to view</p>
                <p className="text-sm">Choose a message from the list to see its details</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
