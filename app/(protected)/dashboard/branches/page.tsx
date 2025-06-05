import TableComponent from "./table";
import AddLinkDialog from "./addLinkDialog";
const BranchesPage = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-full max-w-6xl p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Branches</h2>
          <AddLinkDialog />
        </div>

        <TableComponent />
      </div>
    </div>
  );
};

export default BranchesPage;
