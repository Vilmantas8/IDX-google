import { BarChart2, DollarSign, ShoppingBag, Users } from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { DashboardCard } from "@/components/admin/DashboardCard";
import { VendorTable } from "@/components/admin/VendorTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-admin-background flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <DashboardCard
              title="Total Revenue"
              value="$45,231"
              icon={<DollarSign className="h-6 w-6 text-admin-primary" />}
              trend={{ value: 12, isPositive: true }}
            />
            <DashboardCard
              title="Active Vendors"
              value="126"
              icon={<Users className="h-6 w-6 text-admin-primary" />}
              trend={{ value: 8, isPositive: true }}
            />
            <DashboardCard
              title="Total Products"
              value="1,234"
              icon={<ShoppingBag className="h-6 w-6 text-admin-primary" />}
              trend={{ value: 3, isPositive: false }}
            />
            <DashboardCard
              title="Sales Growth"
              value="24%"
              icon={<BarChart2 className="h-6 w-6 text-admin-primary" />}
              trend={{ value: 5, isPositive: true }}
            />
          </div>
          <VendorTable />
        </main>
      </div>
    </div>
  );
};

export default Index;