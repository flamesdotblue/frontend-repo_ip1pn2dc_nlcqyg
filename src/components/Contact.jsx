import { useState } from 'react';
import { Github, Linkedin, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact</h2>
          <p className="text-slate-600 mt-2">Have a question or idea? Let’s build something great.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              <Send size={18} /> Send Message
            </button>
          </form>

          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Connect</h3>
            <p className="text-slate-600 mt-1">Find me on the web</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://github.com/Samarth1518" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-slate-200 hover:bg-white">
                <Github />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-slate-200 hover:bg-white">
                <Linkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-slate-200 hover:bg-white">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
