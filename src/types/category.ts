export interface StrapiCategory {
  id: number;
  attributes: {
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    active: boolean | null;
    image: {
      data: null | unknown; // Replace `unknown` with the appropriate type if known
    };
    sub_categories: {
      data: StrapiSubCategory[];
    };
  };
}

export interface StrapiSubCategory {
  id: number;
  attributes: {
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    active: boolean | null;
  };
}

export interface StrapiCategoryResponse {
  data: StrapiCategory[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSubCategoryResponse {
  data: {
    id: number;
    attributes: {
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      active: boolean | null;
      image: {
        data: null | unknown;
      };
      sub_categories: {
        data: StrapiSubCategory[];
      };
    };
  };
  meta: {};
}
