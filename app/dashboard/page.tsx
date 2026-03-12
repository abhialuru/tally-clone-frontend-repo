import LogoutButton from "@/components/LogoutButton";

export default function Page() {
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
