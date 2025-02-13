import { Bell, Search, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const AdminHeader = () => {
  return (
    <header className="bg-white border-b border-admin-border p-4 flex items-center justify-between animate-fade-in">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search..."
            className="pl-10 bg-gray-50 border-gray-200 focus:border-admin-primary"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5 text-gray-600" />
        </Button>
        <div className="h-8 w-8 rounded-full bg-admin-primary text-white flex items-center justify-center">
          A
        </div>
      </div>
    </header>
  );
};