import { cn } from "@/cn";
import React from "react";



const CellWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({children, className, ...props}, ref) => (
    <html>
    <head>
               
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </head>
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between gap-2 rounded-medium bg-content2 p-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
    </html>
  ),
);

CellWrapper.displayName = "CellWrapper";

export default CellWrapper;
