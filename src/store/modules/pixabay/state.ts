import { PixabayModel } from "@/common/models/Pixa";
import { PixabayCategory, PixabayType } from "@/common/enums/pixabay";

export interface PixaState {
  items: PixabayModel[];
  category?: PixabayCategory[];
  type: PixabayType;
  searchKeyword: string;
  loading: boolean;
  page: number;
  total: number;
}

const state: PixaState = {
  items: [],
  category: undefined,
  type: PixabayType.ALL,
  page: 0,
  total: 0,
  searchKeyword: "",
  loading: false,
};

export default state;
