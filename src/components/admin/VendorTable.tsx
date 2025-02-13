import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const vendors = [
  {
    id: 1,
    name: "John Store",
    email: "john@example.com",
    products: 45,
    status: "active",
    revenue: "$12,450",
  },
  {
    id: 2,
    name: "Sarah's Boutique",
    email: "sarah@example.com",
    products: 32,
    status: "pending",
    revenue: "$8,230",
  },
  {
    id: 3,
    name: "Tech Haven",
    email: "tech@example.com",
    products: 78,
    status: "active",
    revenue: "$23,100",
  },
];

export const VendorTable = () => {
  return (
    <div className="bg-white rounded-lg border border-admin-border p-4 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-admin-text">Recent Vendors</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Products</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Revenue</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vendors.map((vendor) => (
            <TableRow key={vendor.id}>
              <TableCell className="font-medium">{vendor.name}</TableCell>
              <TableCell>{vendor.email}</TableCell>
              <TableCell>{vendor.products}</TableCell>
              <TableCell>
                <Badge
                  className={cn(
                    vendor.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  )}
                >
                  {vendor.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">{vendor.revenue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};