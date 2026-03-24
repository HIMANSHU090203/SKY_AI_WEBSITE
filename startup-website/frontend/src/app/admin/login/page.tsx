"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import VideoBackground from "../../../components/VideoBackground";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      // ✅ Use relative path instead of localhost
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("adminToken", data.token);
        router.push("/admin/messages");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <VideoBackground />
      
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl text-white"
      >
        <h2 className="font-orbitron text-3xl font-bold text-center mb-6 tracking-tight">🔐 Admin Login</h2>

        {error && <div className="mb-4 text-red-400 text-sm text-center">{error}</div>}

        <div className="mb-5">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/10 text-white border border-slate-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
            placeholder="admin@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/10 text-white border border-slate-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="glass-button w-full py-2 font-semibold hover:cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}
