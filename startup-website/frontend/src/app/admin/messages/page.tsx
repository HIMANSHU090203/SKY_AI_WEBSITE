"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import VideoBackground from "../../../components/VideoBackground";

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
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
    if (!token) {
      router.push("/admin/login");
      return;
    }

    const fetchMessages = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL || ""}/api/contact`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!res.ok) {
          if (res.status === 401 || res.status === 403) {
            localStorage.removeItem("adminToken");
            router.push("/admin/login");
          }
          const data = await res.json();
          throw new Error(data.message || "Failed to fetch messages");
        }

        const data = await res.json();
        setMessages(data.messages); // ✅ Fixed: use `data.messages`
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <VideoBackground />
      
      <div className="relative z-10 text-white px-6 py-10">
        <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-orbitron text-4xl font-semibold border-b border-slate-700 pb-4 tracking-tight">
            📩 Admin Contact Messages
          </h2>
          <button
            onClick={handleLogout}
            className="glass-button-danger font-medium px-4 py-2 hover:cursor-pointer"
          >
            Logout
          </button>
        </div>

        {loading && <p className="text-slate-300">Loading messages...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && messages.length === 0 && (
          <p className="text-slate-400">No messages found.</p>
        )}

        {!loading && !error && messages.length > 0 && (
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="min-w-full table-auto border-collapse bg-slate-800">
              <thead>
                <tr className="bg-slate-700 text-slate-200 uppercase text-sm">
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Message</th>
                  <th className="py-3 px-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, idx) => (
                  <tr
                    key={msg._id}
                    className={idx % 2 === 0 ? "bg-slate-900" : "bg-slate-800"}
                  >
                    <td className="py-3 px-4">{msg.name}</td>
                    <td className="py-3 px-4">{msg.email}</td>
                    <td className="py-3 px-4 max-w-sm truncate">{msg.message}</td>
                    <td className="py-3 px-4">
                      {new Date(msg.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
