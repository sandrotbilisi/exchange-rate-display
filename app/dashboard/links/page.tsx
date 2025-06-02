import SidebarComponent from "@/components/sidebar";
import TableComponent from "./table";

const LinksPage = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <SidebarComponent />
      {/* <div>LinksPage</div> */}
      <div className="w-1/2">
        <TableComponent />
      </div>
    </div>
  );
};

export default LinksPage;
