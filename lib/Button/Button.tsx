import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode;
}
export function Button({children}: ButtonProps): ReactNode {
  return (
    <button className="py-2 px-6 border rounded bg-black text-white">
      {children}
    </button>
  )
}
