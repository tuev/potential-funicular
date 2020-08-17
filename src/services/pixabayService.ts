/* eslint-disable @typescript-eslint/camelcase */
import { PixabayCategory, PixabayType } from "@/common/enums/pixabay";
import PixabayNetwork from "@/networks/pixabay";
import get from "lodash/get";

interface PixabayQuery {
  category?: PixabayCategory[];
  type: PixabayType;
  searchKeyword?: string;
  page: number;
}

class PixabayService {
  async getPixaItems(query: PixabayQuery) {
    const params = {
      q: query.searchKeyword,
      image_type: query.type,
      category: query.category,
      page: query.page || 1,
    };
    const response = await PixabayNetwork.get("/", {
      params: {
        ...params,
        key: process.env.VUE_APP_PIXABAY_KEY as string,
        per_page: process.env.VUE_APP_PIXABAY_ITEM_PER_PAGE,
      },
    });
    return get(response, "data", {});
  }
}

const AppPixabayService = new PixabayService();

export default AppPixabayService;
