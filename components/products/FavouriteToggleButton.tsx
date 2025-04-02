import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

const FavouriteToggleButton = ({ productId }: { productId: string }) => {
  return (
    <Button variant="outline" size="icon" className="w-10 h-10  cursor-pointer">
      <FaHeart />
    </Button>
  );
};

export default FavouriteToggleButton;
