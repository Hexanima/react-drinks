import { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import {
  filterDrinksService,
  getRecipeService,
} from "../services/drink.service";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);

  function handleModalClick() {
    setModal(!modal);
  }

  function handleDrinkIdClick(id) {
    setDrinkId(id);
  }

  async function getRecipe() {
    if (!drinkId) return;

    try {
      setLoading(true);
      const recipeData = await getRecipeService(drinkId);
      setRecipe(recipeData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function getDrink({ name, category }) {
    try {
      setLoading(true);
      const drinksData = await filterDrinksService(name, category);
      const drinksWithPrice = drinksData.map((drink) => {
        return { ...drink,
           price: Math.floor(Math.random() * 101) };
      });
      setDrinks(drinksWithPrice);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const contextValues = {
    drinks,
    modal,
    recipe,
    loading,
    handleModalClick,
    handleDrinkIdClick,
    getDrink,
  };

  useEffect(() => {
    getRecipe();
  }, [drinkId]);

  return (
    <DrinksContext.Provider value={contextValues}>
      {children}
    </DrinksContext.Provider>
  );
};

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DrinksProvider, DrinksContext };
