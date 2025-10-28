// components/layouts/DashboardLayout.jsx
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

function SidebarItem({ href, label, active }) {
  const isActive = active === href;
  return (
    <li>
      <Link
        href={href}
        className={`block px-3 py-2 rounded text-sm ${
          isActive ? "bg-gray-100 text-gray-900 font-semibold"
                   : "text-blue-600 hover:bg-gray-50"
        }`}
      >
        {label}
      </Link>
    </li>
  );
}

function Sidebar({ active }) {
  return (
    <aside className="col-span-12 md:col-span-3 lg:col-span-2">
      <ul className="space-y-1">
        <SidebarItem href="/dashboard" label="Главная" active={active} />
        <SidebarItem href="/dashboard/accounts" label="Аккаунты" active={active} />
        <SidebarItem href="/dashboard/groups" label="Группы" active={active} />
        <SidebarItem href="/dashboard/setup" label="AI Сетап" active={active} />
        <SidebarItem href="/dashboard/chats" label="Ответы" active={active} />
        <SidebarItem href="/dashboard/leads" label="Лиды" active={active} />
        <SidebarItem href="/dashboard/stats" label="Статистика" active={active} />
        <SidebarItem href="/dashboard/billing" label="Подписка" active={active} />
      </ul>
    </aside>
  );
}

function Topbar() {
  const { data: session } = useSession();
  return (
    <header className="border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded bg-blue-600" />
          <span className="font-semibold">Replymaster</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-500">{session?.user?.name || "anykord"}</span>
          <button
            className="px-3 py-1 rounded border hover:bg-gray-50"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Выйти
          </button>
        </div>
      </div>
    </header>
  );
}

export default function DashboardLayout({ children, active, title }) {
  return (
    <>
      <Topbar />
      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-12 gap-6">
        <Sidebar active={active} />
        <main className="col-span-12 md:col-span-9 lg:col-span-10">
          {title ? <h1 className="text-3xl font-extrabold mb-6">{title}</h1> : null}
          {children}
        </main>
      </div>
    </>
  );
}
