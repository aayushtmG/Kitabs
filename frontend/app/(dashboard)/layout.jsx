import '.././globals.css'
import AdminDasboardLayout from '@/components/AdminDashboardLayout';
export const metadata = {
  title: "Admin panel",
  description: "kitabs books",
};


export default function AdminLayout({ children }) {
  return (
    <AdminDasboardLayout>
      <main >{children}</main>
    </AdminDasboardLayout>);
}
