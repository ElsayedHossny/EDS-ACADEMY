import { redirect } from "next/navigation";

export default function adminDashboard() {
  redirect("/admin/dashboard/users");
}
