import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  navItems: NavItem[];
  currentPath: string;
}

export default function MobileMenu({ navItems, currentPath }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // hydration 完了後にポータルを有効化（SSR時のmismatchを防止）
  useEffect(() => {
    setMounted(true);
  }, []);

  // メニュー開放中は body のスクロールをロック
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-foreground hover:bg-gray-100 rounded-md transition-colors"
        aria-label="メニューを開く"
        aria-expanded={open}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {mounted &&
        open &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
              onClick={closeMenu}
            />

            {/* Menu panel */}
            <div className="fixed top-0 right-0 bottom-0 w-72 bg-white border-l border-gray-200 z-[70] shadow-xl overflow-y-auto overscroll-contain">
              <div className="flex justify-end p-4">
                <button
                  onClick={closeMenu}
                  className="p-2 text-foreground hover:bg-gray-100 rounded-md transition-colors"
                  aria-label="メニューを閉じる"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-1 px-4 pb-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`px-4 py-3 text-sm rounded-lg transition-colors ${
                      currentPath === item.href
                        ? "text-foreground font-medium bg-gray-50"
                        : "text-muted-foreground hover:text-foreground hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-4">
                  <a
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full text-center bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-lg px-4 py-2.5 text-sm font-medium transition-all"
                  >
                    お問い合わせ
                  </a>
                </div>
              </nav>
            </div>
          </>,
          document.body,
        )}
    </div>
  );
}
