import { Icons } from "@/components/icons";
import { User } from "@prisma/client";
import type { Icon } from "lucide-react";

export type SiteConfig = {
  name: string;
  links: {
    twitter: string;
    github: string;
  };
};
