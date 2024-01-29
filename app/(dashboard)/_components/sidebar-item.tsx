"use client";

import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItems = ({ icon, label, href }: SidebarItemProps) => {
  return <div>SidebarItems</div>;
};
