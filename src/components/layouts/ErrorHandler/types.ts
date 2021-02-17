import { ComponentType, ReactNode } from "react";

export interface AppLayoutProps {
  component?: ComponentType<any>;
  render?: (matchProps: any) => ReactNode;
  exact?: boolean;
  path?: string;
}
