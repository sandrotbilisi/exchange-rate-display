import SidebarComponent from "@/components/sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <SidebarComponent />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
