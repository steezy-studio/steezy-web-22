export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The DateTime type adheres to ISO 8601 standard. */
  _DateTime: any;
};

/** This union type holds all content models */
export type AllModels = Area | LandingpageGrid | LandingpageGridRow | Project;

/** Single Area */
export type Area = {
  __typename?: 'Area';
  _ab_testing_active?: Maybe<Scalars['Boolean']>;
  _ab_testing_version?: Maybe<Scalars['String']>;
  /** Count of bookmark events */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item */
  _id: Scalars['String'];
  /** Count of like events */
  _likes?: Maybe<Scalars['Int']>;
  _locale: Scalars['String'];
  _locales: Array<Scalars['String']>;
  /** The time for when the content item is or will be published */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events */
  _votes?: Maybe<Scalars['Int']>;
  area_name?: Maybe<Scalars['String']>;
  sub_areas?: Maybe<Scalars['String']>;
};

export enum AreaSortInput {
  AreaNameAsc = 'area_name_ASC',
  AreaNameDesc = 'area_name_DESC',
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  SubAreasAsc = 'sub_areas_ASC',
  SubAreasDesc = 'sub_areas_DESC'
}

export type AreaWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches if the Id field is equal to one of the items in the given list */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches any content item containing the given text term (full-text search) */
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with all items from the given list */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with at least one item from the given list */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item that is tagged */
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  /** Matches any content item not tagged with an item from the given list */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the field is equal to the given value */
  area_name?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive */
  area_name_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field is less then the given value */
  area_name_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is greater then the given value */
  area_name_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is equal to the given value */
  sub_areas?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive */
  sub_areas_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field is less then the given value */
  sub_areas_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is greater then the given value */
  sub_areas_starts_with?: InputMaybe<Scalars['String']>;
};

/** List of Areas items */
export type Areas = {
  __typename?: 'Areas';
  items: Array<Area>;
  total: Scalars['Int'];
};

/** Prepr Asset model */
export type Asset = {
  __typename?: 'Asset';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alignment?: Maybe<AssetAlignment>;
  author?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  cdn_files?: Maybe<Array<Maybe<CdnFile>>>;
  cover?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  mime_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Prepr Asset model */
export type AssetCoverArgs = {
  crop?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


/** Prepr Asset model */
export type AssetUrlArgs = {
  crop?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  player?: InputMaybe<Scalars['String']>;
  preset?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  res?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export enum AssetAlignment {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

/** Assets holds multiple Asset items in a content item */
export type Assets = {
  __typename?: 'Assets';
  _type?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Asset>>>;
};

export type CdnFile = {
  __typename?: 'CdnFile';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type CdnFileUrlArgs = {
  crop?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ContentIntegration = {
  __typename?: 'ContentIntegration';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  data?: Maybe<Array<Maybe<KeyValue>>>;
};

export type ContentIntegrations = {
  __typename?: 'ContentIntegrations';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<ContentIntegration>>>;
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<AllModels>>>;
  total?: Maybe<Scalars['Int']>;
};

export enum ContentItemsSortInput {
  ChangedOn = 'changed_on',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnDesc = 'created_on_DESC',
  PublishOn = 'publish_on',
  PublishOnDesc = 'publish_on_DESC'
}

export type ContentItemsWhereInput = {
  _channels_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _stories_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _stories_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _typename_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Represents a geolocation point with latitude and longitude */
export type Coordinates = {
  __typename?: 'Coordinates';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type FacebookPost = {
  __typename?: 'FacebookPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type InstagramPost = {
  __typename?: 'InstagramPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type KeyValue = {
  __typename?: 'KeyValue';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** Single LandingpageGrid */
export type LandingpageGrid = {
  __typename?: 'LandingpageGrid';
  _ab_testing_active?: Maybe<Scalars['Boolean']>;
  _ab_testing_version?: Maybe<Scalars['String']>;
  /** Count of bookmark events */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item */
  _id: Scalars['String'];
  /** Count of like events */
  _likes?: Maybe<Scalars['Int']>;
  _locale: Scalars['String'];
  _locales: Array<Scalars['String']>;
  /** The time for when the content item is or will be published */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events */
  _votes?: Maybe<Scalars['Int']>;
  landingpage_grid?: Maybe<Scalars['String']>;
  landingpage_projects_grid?: Maybe<Array<LandingpageGridRow>>;
};

export type LandingpageGridItem = {
  __typename?: 'LandingpageGridItem';
  _id?: Maybe<Scalars['String']>;
  /** @deprecated Use `__typename` instead */
  _type?: Maybe<Scalars['String']>;
  offset_project?: Maybe<Scalars['Boolean']>;
  projects?: Maybe<Array<Maybe<Project>>>;
};

/** Single LandingpageGridRow */
export type LandingpageGridRow = {
  __typename?: 'LandingpageGridRow';
  _ab_testing_active?: Maybe<Scalars['Boolean']>;
  _ab_testing_version?: Maybe<Scalars['String']>;
  /** Count of bookmark events */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item */
  _id: Scalars['String'];
  /** Count of like events */
  _likes?: Maybe<Scalars['Int']>;
  _locale: Scalars['String'];
  _locales: Array<Scalars['String']>;
  /** The time for when the content item is or will be published */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events */
  _votes?: Maybe<Scalars['Int']>;
  grid_row?: Maybe<Array<Project>>;
  offset?: Maybe<Scalars['Boolean']>;
  prepr_name?: Maybe<Scalars['String']>;
};

export enum LandingpageGridRowSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PreprNameAsc = 'prepr_name_ASC',
  PreprNameDesc = 'prepr_name_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC'
}

export type LandingpageGridRowWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches if the Id field is equal to one of the items in the given list */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches any content item containing the given text term (full-text search) */
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with all items from the given list */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with at least one item from the given list */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item that is tagged */
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  /** Matches any content item not tagged with an item from the given list */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  grid_row?: InputMaybe<ProjectWhereInput>;
  /** Matches if the field is equal or not equal to the given value */
  offset?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the field is equal to the given value */
  prepr_name?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive */
  prepr_name_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field is less then the given value */
  prepr_name_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is greater then the given value */
  prepr_name_starts_with?: InputMaybe<Scalars['String']>;
};

/** List of LandingpageGridRows items */
export type LandingpageGridRows = {
  __typename?: 'LandingpageGridRows';
  items: Array<LandingpageGridRow>;
  total: Scalars['Int'];
};

export enum LandingpageGridSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  LandingpageGridAsc = 'landingpage_grid_ASC',
  LandingpageGridDesc = 'landingpage_grid_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC'
}

export type LandingpageGridWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches if the Id field is equal to one of the items in the given list */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches any content item containing the given text term (full-text search) */
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with all items from the given list */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with at least one item from the given list */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item that is tagged */
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  /** Matches any content item not tagged with an item from the given list */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the field is equal to the given value */
  landingpage_grid?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive */
  landingpage_grid_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field is less then the given value */
  landingpage_grid_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is greater then the given value */
  landingpage_grid_starts_with?: InputMaybe<Scalars['String']>;
  landingpage_projects_grid?: InputMaybe<LandingpageGridRowWhereInput>;
};

/** List of LandingpageGrids items */
export type LandingpageGrids = {
  __typename?: 'LandingpageGrids';
  items: Array<LandingpageGrid>;
  total: Scalars['Int'];
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Number = {
  __typename?: 'Number';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Single Project */
export type Project = {
  __typename?: 'Project';
  _ab_testing_active?: Maybe<Scalars['Boolean']>;
  _ab_testing_version?: Maybe<Scalars['String']>;
  /** Count of bookmark events */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item */
  _id: Scalars['String'];
  /** Count of like events */
  _likes?: Maybe<Scalars['Int']>;
  _locale: Scalars['String'];
  _locales: Array<Scalars['String']>;
  /** The time for when the content item is or will be published */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events */
  _votes?: Maybe<Scalars['Int']>;
  client_logo?: Maybe<Array<Maybe<Asset>>>;
  client_name?: Maybe<Scalars['String']>;
  client_photo?: Maybe<Array<Maybe<Asset>>>;
  client_position?: Maybe<Scalars['String']>;
  client_quote?: Maybe<Scalars['String']>;
  grid_image?: Maybe<Array<Maybe<Asset>>>;
  hero_image?: Maybe<Array<Maybe<Asset>>>;
  landingpage_grid_image?: Maybe<Array<Maybe<Asset>>>;
  next_project?: Maybe<Array<Project>>;
  prepr_display_name?: Maybe<Scalars['String']>;
  project_description?: Maybe<Scalars['String']>;
  project_detail_name?: Maybe<Scalars['String']>;
  project_facts?: Maybe<Array<Maybe<_Prepr_Types>>>;
  project_grid_name?: Maybe<Scalars['String']>;
  project_presentation?: Maybe<Array<Maybe<_Prepr_Types>>>;
  project_tags?: Maybe<Array<Area>>;
};

export type ProjectArea = {
  __typename?: 'ProjectArea';
  _id?: Maybe<Scalars['String']>;
  /** @deprecated Use `__typename` instead */
  _type?: Maybe<Scalars['String']>;
  project_area?: Maybe<Array<Maybe<Area>>>;
};

export type ProjectFacts = {
  __typename?: 'ProjectFacts';
  _id?: Maybe<Scalars['String']>;
  /** @deprecated Use `__typename` instead */
  _type?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
};

export type ProjectGridBlockquote = {
  __typename?: 'ProjectGridBlockquote';
  _id?: Maybe<Scalars['String']>;
  /** @deprecated Use `__typename` instead */
  _type?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['Boolean']>;
  blockquote_text?: Maybe<Scalars['String']>;
};

export type ProjectGridRow = {
  __typename?: 'ProjectGridRow';
  _id?: Maybe<Scalars['String']>;
  /** @deprecated Use `__typename` instead */
  _type?: Maybe<Scalars['String']>;
  grid_item_image?: Maybe<Array<Maybe<Asset>>>;
};

export type ProjectGridVimeo = {
  __typename?: 'ProjectGridVimeo';
  _id?: Maybe<Scalars['String']>;
  /** @deprecated Use `__typename` instead */
  _type?: Maybe<Scalars['String']>;
  vimeo_id?: Maybe<Scalars['String']>;
};

export enum ProjectSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  ClientNameAsc = 'client_name_ASC',
  ClientNameDesc = 'client_name_DESC',
  ClientPositionAsc = 'client_position_ASC',
  ClientPositionDesc = 'client_position_DESC',
  ClientQuoteAsc = 'client_quote_ASC',
  ClientQuoteDesc = 'client_quote_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PreprDisplayNameAsc = 'prepr_display_name_ASC',
  PreprDisplayNameDesc = 'prepr_display_name_DESC',
  ProjectDescriptionAsc = 'project_description_ASC',
  ProjectDescriptionDesc = 'project_description_DESC',
  ProjectDetailNameAsc = 'project_detail_name_ASC',
  ProjectDetailNameDesc = 'project_detail_name_DESC',
  ProjectGridNameAsc = 'project_grid_name_ASC',
  ProjectGridNameDesc = 'project_grid_name_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC'
}

export type ProjectWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches if the Id field is equal to one of the items in the given list */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches any content item containing the given text term (full-text search) */
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with all items from the given list */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with at least one item from the given list */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item that is tagged */
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  /** Matches any content item not tagged with an item from the given list */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the field is equal to the given value */
  client_name?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive */
  client_name_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field is less then the given value */
  client_name_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is greater then the given value */
  client_name_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is equal to the given value */
  client_position?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive */
  client_position_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field is less then the given value */
  client_position_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is greater then the given value */
  client_position_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is equal to the given value */
  client_quote?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive */
  client_quote_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field is less then the given value */
  client_quote_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is greater then the given value */
  client_quote_starts_with?: InputMaybe<Scalars['String']>;
  next_project?: InputMaybe<ProjectWhereInput>;
  /** Matches if the field is equal to the given value */
  prepr_display_name?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive */
  prepr_display_name_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field is less then the given value */
  prepr_display_name_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is greater then the given value */
  prepr_display_name_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is equal to the given value */
  project_description?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive */
  project_description_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field is less then the given value */
  project_description_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is greater then the given value */
  project_description_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is equal to the given value */
  project_detail_name?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive */
  project_detail_name_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field is less then the given value */
  project_detail_name_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is greater then the given value */
  project_detail_name_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is equal to the given value */
  project_grid_name?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive */
  project_grid_name_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field is less then the given value */
  project_grid_name_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is greater then the given value */
  project_grid_name_starts_with?: InputMaybe<Scalars['String']>;
  project_tags?: InputMaybe<AreaWhereInput>;
};

/** List of Projects items */
export type Projects = {
  __typename?: 'Projects';
  items: Array<Project>;
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single Area */
  Area?: Maybe<Area>;
  /** Retrieve multiple Areas */
  Areas?: Maybe<Areas>;
  /** Retrieve content items from all models */
  ContentItems?: Maybe<ContentItems>;
  /** Retrieve a single LandingpageGrid */
  LandingpageGrid?: Maybe<LandingpageGrid>;
  /** Retrieve a single LandingpageGridRow */
  LandingpageGridRow?: Maybe<LandingpageGridRow>;
  /** Retrieve multiple LandingpageGridRows */
  LandingpageGridRows?: Maybe<LandingpageGridRows>;
  /** Retrieve multiple LandingpageGrids */
  LandingpageGrids?: Maybe<LandingpageGrids>;
  /** Retrieve personalized Areas for the giving Customer ID */
  Personalized_Areas?: Maybe<Areas>;
  /** Retrieve personalized LandingpageGridRows for the giving Customer ID */
  Personalized_LandingpageGridRows?: Maybe<LandingpageGridRows>;
  /** Retrieve personalized LandingpageGrids for the giving Customer ID */
  Personalized_LandingpageGrids?: Maybe<LandingpageGrids>;
  /** Retrieve personalized Projects for the giving Customer ID */
  Personalized_Projects?: Maybe<Projects>;
  /** Recommendation recipe suitable for recommending globally popular Areas */
  Popular_Areas?: Maybe<Areas>;
  /** Recommendation recipe suitable for recommending globally popular LandingpageGridRows */
  Popular_LandingpageGridRows?: Maybe<LandingpageGridRows>;
  /** Recommendation recipe suitable for recommending globally popular LandingpageGrids */
  Popular_LandingpageGrids?: Maybe<LandingpageGrids>;
  /** Recommendation recipe suitable for recommending globally popular Projects */
  Popular_Projects?: Maybe<Projects>;
  /** Retrieve a single Project */
  Project?: Maybe<Project>;
  /** Retrieve multiple Projects */
  Projects?: Maybe<Projects>;
  /** Recommendation recipe suitable for recommending Areas which are similar to the giving item */
  Similar_Areas?: Maybe<Areas>;
  /** Recommendation recipe suitable for recommending LandingpageGridRows which are similar to the giving item */
  Similar_LandingpageGridRows?: Maybe<LandingpageGridRows>;
  /** Recommendation recipe suitable for recommending LandingpageGrids which are similar to the giving item */
  Similar_LandingpageGrids?: Maybe<LandingpageGrids>;
  /** Recommendation recipe suitable for recommending Projects which are similar to the giving item */
  Similar_Projects?: Maybe<Projects>;
};


export type QueryAreaArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryAreasArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<AreaSortInput>;
  where?: InputMaybe<AreaWhereInput>;
};


export type QueryContentItemsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentItemsSortInput>;
  where?: InputMaybe<ContentItemsWhereInput>;
};


export type QueryLandingpageGridArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryLandingpageGridRowArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryLandingpageGridRowsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<LandingpageGridRowSortInput>;
  where?: InputMaybe<LandingpageGridRowWhereInput>;
};


export type QueryLandingpageGridsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<LandingpageGridSortInput>;
  where?: InputMaybe<LandingpageGridWhereInput>;
};


export type QueryPersonalized_AreasArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPersonalized_LandingpageGridRowsArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPersonalized_LandingpageGridsArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPersonalized_ProjectsArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPopular_AreasArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AreaWhereInput>;
};


export type QueryPopular_LandingpageGridRowsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LandingpageGridRowWhereInput>;
};


export type QueryPopular_LandingpageGridsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LandingpageGridWhereInput>;
};


export type QueryPopular_ProjectsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryProjectsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProjectSortInput>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QuerySimilar_AreasArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AreaWhereInput>;
};


export type QuerySimilar_LandingpageGridRowsArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LandingpageGridRowWhereInput>;
};


export type QuerySimilar_LandingpageGridsArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LandingpageGridWhereInput>;
};


export type QuerySimilar_ProjectsArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type Quote = {
  __typename?: 'Quote';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type Resource = {
  __typename?: 'Resource';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SearchOptionsInput = {
  includeReferences?: InputMaybe<Scalars['Boolean']>;
};

export type SimilarRulesInput = {
  /** Adjust the weight of AI generated entities in the recommendation algorithm */
  entities?: InputMaybe<Scalars['Float']>;
  /** Adjust the weight of content references in the recommendation algorithm */
  references?: InputMaybe<Scalars['Float']>;
  /** Adjust the weight of tags in the recommendation algorithm */
  tags?: InputMaybe<Scalars['Float']>;
};

export type SoundCloudPost = {
  __typename?: 'SoundCloudPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SpotifyPlaylist = {
  __typename?: 'SpotifyPlaylist';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Text = {
  __typename?: 'Text';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  format?: Maybe<TextFormat>;
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export enum TextFormat {
  Code = 'Code',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  Html = 'HTML'
}

export type TikTokPost = {
  __typename?: 'TikTokPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TwitterPost = {
  __typename?: 'TwitterPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type VimeoPost = {
  __typename?: 'VimeoPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type YouTubePost = {
  __typename?: 'YouTubePost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** Event type is specifying the kind of event the customer has with your content. */
export enum _Event {
  Bookmark = 'Bookmark',
  Clickthrough = 'Clickthrough',
  Comment = 'Comment',
  Like = 'Like',
  Purchase = 'Purchase',
  Share = 'Share',
  Subscribe = 'Subscribe',
  View = 'View',
  Vote = 'Vote'
}

/** This union type contains all content elements */
export type _Prepr_Types = Assets | ContentIntegrations | Coordinates | FacebookPost | InstagramPost | LandingpageGridItem | NavigationItem | Number | ProjectArea | ProjectFacts | ProjectGridBlockquote | ProjectGridRow | ProjectGridVimeo | Quote | Resource | SoundCloudPost | SpotifyPlaylist | Text | TikTokPost | TwitterPost | VimeoPost | YouTubePost;
