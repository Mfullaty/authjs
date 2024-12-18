"use client";

import RoleGate from "@/components/auth/role-gate";
import FormSuccess from "@/components/form-success";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { admin } from "@/actions/admin";

const AdminPage = () => {
    const onServerActionClick = () => {
        admin()
         .then((data) => {
            if(data.error){
                toast.error("Forbidden Server Action Access")
            }
            if(data.success){
                toast.error("Allowed Server Action Access")
            }
         })
    }
  const OnApiRouteClick =  () => {
     fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed Api Route Access")
    } else {
          toast.error("Forbidden Api Route Access")
      } 
    });
  };

  return (
    <Card>
      <CardHeader>
        <p className="text-2xl font-semibold text-center">🗝️ Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Showing to only Admins */}
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="Only ADMINS Can View This" />
        </RoleGate>

        {/* Showig to only users */}
        <RoleGate allowedRole={UserRole.USER}>
          <FormSuccess message="Only USERS Can View This" />
        </RoleGate>

        {/* Admin Only API Route */}
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin only api route</p>
          <Button
            onClick={OnApiRouteClick}
          >
            Click to test
          </Button>
        </div>

        {/* Admin Only Server Action */}
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin only server action</p>
          <Button onClick={onServerActionClick} >Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
