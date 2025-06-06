import SidebarComponent from "@/components/sidebar";
import TableComponent from "./table";
import AddTableDialog from "./addTableDialog";
import TableForm from "./form";

const LinksPage = () => {
  return (
    <div className="w-full flex">
      <div className="flex flex-col w-full p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Tables</h2>
          <AddTableDialog />
        </div>
        <TableComponent />
      </div>
    </div>
  );
};

export default LinksPage;
