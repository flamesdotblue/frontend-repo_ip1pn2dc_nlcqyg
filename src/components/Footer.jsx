export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600">© 2025 Craftify. Built with React & Tailwind.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#skills">Skills</a>
            <a className="hover:text-slate-900" href="#home">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
