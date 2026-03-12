import LogoutButton from "@/components/LogoutButton";
import ProtectedRoutes from "@/components/ProtectedRoutes";

function DashboardContent() {
  return (
    <div className="w-full h-screen ">
      <LogoutButton />
      <div className="w-full h-full flex gap-2 justify-center items-center text-2xl font-semibold text-gray-700">
        Dashboard view
        <span className="italic text-sm">(In Progress)</span>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <ProtectedRoutes>
      <DashboardContent />
    </ProtectedRoutes>
  );
}
