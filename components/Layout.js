import NewsBar from "./NewsBar";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <>
        <NewsBar />
        <NavBar />
        <main>{children}</main>
      </>
    </div>
  );
}
