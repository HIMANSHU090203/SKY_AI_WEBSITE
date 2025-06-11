"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetch("/api/contact", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) {
          if (res.status === 401 || res.status === 403) {
            localStorage.removeItem("adminToken");
            router.push("/admin/login");
          }
          const data = await res.json();
          throw new Error(data.message || "Failed to fetch messages");
        }
        return res.json();
      })
      .then(setMessages)
      .catch((err) => setError(err.message));
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-3xl font-bold mb-6">Contact Messages</h2>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-black rounded">
          <thead>
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Message</th>
              <th className="py-2 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id} className="border-t">
                <td className="py-2 px-4">{msg.name}</td>
                <td className="py-2 px-4">{msg.email}</td>
                <td className="py-2 px-4">{msg.message}</td>
                <td className="py-2 px-4">{new Date(msg.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 