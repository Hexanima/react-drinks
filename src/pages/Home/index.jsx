import DrinksList from "../../components/DrinksList";
import SearchForm from "../../components/SearchForm";
import DrinkDetailModal from "../../components/DrinkModal";

function Home() {
  return (
    <div>
      <SearchForm />

      <DrinksList />

      <DrinkDetailModal />
    </div>
  );
}

export default Home;
