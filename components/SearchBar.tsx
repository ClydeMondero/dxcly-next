import { Input } from "@/components/ui/input";
import { MdOutlineSearch } from "react-icons/md";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <Input
        type="text"
        placeholder="Search for products..."
        className="w-full rounded-lg border px-4 py-2 placeholder:text- text-sm border-border bg-transparent focus-visible:ring-secondary"
      />
      <MdOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-white w-5 h-5 pointer-events-none" />
    </div>
  );
}
