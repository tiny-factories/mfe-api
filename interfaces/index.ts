export type Matter = {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  glossaryMfeApi: string;
  slug: string;
  published: boolean;
};

export type Data = {
  id: string;
  measurement: string;
  untId: string;
  sourceId: string;
  published: string;
  created_at: string;
  updated_at: string;
  locationId: string;
  matterSlug: string;
  licenceId: string;
};

export type License = {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  slug: string;
  url: string;
};

export type Source = {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  slug: string;
  dataHref: string;
  websiteHref: string;
  published: boolean;
};

export type ResponseError = {
  message: string;
};
