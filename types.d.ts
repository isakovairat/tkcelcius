export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
  JSON: { input: any; output: any }
  Upload: { input: any; output: any }
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  contains?: InputMaybe<Scalars["Boolean"]["input"]>
  containsi?: InputMaybe<Scalars["Boolean"]["input"]>
  endsWith?: InputMaybe<Scalars["Boolean"]["input"]>
  eq?: InputMaybe<Scalars["Boolean"]["input"]>
  eqi?: InputMaybe<Scalars["Boolean"]["input"]>
  gt?: InputMaybe<Scalars["Boolean"]["input"]>
  gte?: InputMaybe<Scalars["Boolean"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  lt?: InputMaybe<Scalars["Boolean"]["input"]>
  lte?: InputMaybe<Scalars["Boolean"]["input"]>
  ne?: InputMaybe<Scalars["Boolean"]["input"]>
  nei?: InputMaybe<Scalars["Boolean"]["input"]>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars["Boolean"]["input"]>
  notContainsi?: InputMaybe<Scalars["Boolean"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  startsWith?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type Brand = {
  __typename?: "Brand"
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  slug: Scalars["String"]["output"]
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type BrandEntity = {
  __typename?: "BrandEntity"
  attributes?: Maybe<Brand>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type BrandEntityResponse = {
  __typename?: "BrandEntityResponse"
  data?: Maybe<BrandEntity>
}

export type BrandEntityResponseCollection = {
  __typename?: "BrandEntityResponseCollection"
  data: Array<BrandEntity>
  meta: ResponseCollectionMeta
}

export type BrandFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<BrandFiltersInput>
  or?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type BrandInput = {
  name?: InputMaybe<Scalars["String"]["input"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  slug?: InputMaybe<Scalars["String"]["input"]>
}

export type Category = {
  __typename?: "Category"
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  slug: Scalars["String"]["output"]
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type CategoryEntity = {
  __typename?: "CategoryEntity"
  attributes?: Maybe<Category>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type CategoryEntityResponse = {
  __typename?: "CategoryEntityResponse"
  data?: Maybe<CategoryEntity>
}

export type CategoryEntityResponseCollection = {
  __typename?: "CategoryEntityResponseCollection"
  data: Array<CategoryEntity>
  meta: ResponseCollectionMeta
}

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<CategoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type CategoryInput = {
  name?: InputMaybe<Scalars["String"]["input"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  slug?: InputMaybe<Scalars["String"]["input"]>
}

export type ContentReleasesRelease = {
  __typename?: "ContentReleasesRelease"
  actions?: Maybe<ContentReleasesReleaseActionRelationResponseCollection>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  name: Scalars["String"]["output"]
  releasedAt?: Maybe<Scalars["DateTime"]["output"]>
  scheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  status: Enum_Contentreleasesrelease_Status
  timezone?: Maybe<Scalars["String"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type ContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ContentReleasesReleaseAction = {
  __typename?: "ContentReleasesReleaseAction"
  contentType: Scalars["String"]["output"]
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  entry?: Maybe<GenericMorph>
  isEntryValid?: Maybe<Scalars["Boolean"]["output"]>
  locale?: Maybe<Scalars["String"]["output"]>
  release?: Maybe<ContentReleasesReleaseEntityResponse>
  type: Enum_Contentreleasesreleaseaction_Type
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type ContentReleasesReleaseActionEntity = {
  __typename?: "ContentReleasesReleaseActionEntity"
  attributes?: Maybe<ContentReleasesReleaseAction>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type ContentReleasesReleaseActionEntityResponse = {
  __typename?: "ContentReleasesReleaseActionEntityResponse"
  data?: Maybe<ContentReleasesReleaseActionEntity>
}

export type ContentReleasesReleaseActionEntityResponseCollection = {
  __typename?: "ContentReleasesReleaseActionEntityResponseCollection"
  data: Array<ContentReleasesReleaseActionEntity>
  meta: ResponseCollectionMeta
}

export type ContentReleasesReleaseActionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>
  contentType?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  isEntryValid?: InputMaybe<BooleanFilterInput>
  locale?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ContentReleasesReleaseActionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>
  release?: InputMaybe<ContentReleasesReleaseFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ContentReleasesReleaseActionInput = {
  contentType?: InputMaybe<Scalars["String"]["input"]>
  isEntryValid?: InputMaybe<Scalars["Boolean"]["input"]>
  locale?: InputMaybe<Scalars["String"]["input"]>
  release?: InputMaybe<Scalars["ID"]["input"]>
  type?: InputMaybe<Enum_Contentreleasesreleaseaction_Type>
}

export type ContentReleasesReleaseActionRelationResponseCollection = {
  __typename?: "ContentReleasesReleaseActionRelationResponseCollection"
  data: Array<ContentReleasesReleaseActionEntity>
}

export type ContentReleasesReleaseEntity = {
  __typename?: "ContentReleasesReleaseEntity"
  attributes?: Maybe<ContentReleasesRelease>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type ContentReleasesReleaseEntityResponse = {
  __typename?: "ContentReleasesReleaseEntityResponse"
  data?: Maybe<ContentReleasesReleaseEntity>
}

export type ContentReleasesReleaseEntityResponseCollection = {
  __typename?: "ContentReleasesReleaseEntityResponseCollection"
  data: Array<ContentReleasesReleaseEntity>
  meta: ResponseCollectionMeta
}

export type ContentReleasesReleaseFiltersInput = {
  actions?: InputMaybe<ContentReleasesReleaseActionFiltersInput>
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ContentReleasesReleaseFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>
  releasedAt?: InputMaybe<DateTimeFilterInput>
  scheduledAt?: InputMaybe<DateTimeFilterInput>
  status?: InputMaybe<StringFilterInput>
  timezone?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ContentReleasesReleaseInput = {
  actions?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  name?: InputMaybe<Scalars["String"]["input"]>
  releasedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  scheduledAt?: InputMaybe<Scalars["DateTime"]["input"]>
  status?: InputMaybe<Enum_Contentreleasesrelease_Status>
  timezone?: InputMaybe<Scalars["String"]["input"]>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  contains?: InputMaybe<Scalars["DateTime"]["input"]>
  containsi?: InputMaybe<Scalars["DateTime"]["input"]>
  endsWith?: InputMaybe<Scalars["DateTime"]["input"]>
  eq?: InputMaybe<Scalars["DateTime"]["input"]>
  eqi?: InputMaybe<Scalars["DateTime"]["input"]>
  gt?: InputMaybe<Scalars["DateTime"]["input"]>
  gte?: InputMaybe<Scalars["DateTime"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  lt?: InputMaybe<Scalars["DateTime"]["input"]>
  lte?: InputMaybe<Scalars["DateTime"]["input"]>
  ne?: InputMaybe<Scalars["DateTime"]["input"]>
  nei?: InputMaybe<Scalars["DateTime"]["input"]>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars["DateTime"]["input"]>
  notContainsi?: InputMaybe<Scalars["DateTime"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  startsWith?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum Enum_Contentreleasesreleaseaction_Type {
  Publish = "publish",
  Unpublish = "unpublish",
}

export enum Enum_Contentreleasesrelease_Status {
  Blocked = "blocked",
  Done = "done",
  Empty = "empty",
  Failed = "failed",
  Ready = "ready",
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]["input"]>
  caption?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>
  contains?: InputMaybe<Scalars["Float"]["input"]>
  containsi?: InputMaybe<Scalars["Float"]["input"]>
  endsWith?: InputMaybe<Scalars["Float"]["input"]>
  eq?: InputMaybe<Scalars["Float"]["input"]>
  eqi?: InputMaybe<Scalars["Float"]["input"]>
  gt?: InputMaybe<Scalars["Float"]["input"]>
  gte?: InputMaybe<Scalars["Float"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>
  lt?: InputMaybe<Scalars["Float"]["input"]>
  lte?: InputMaybe<Scalars["Float"]["input"]>
  ne?: InputMaybe<Scalars["Float"]["input"]>
  nei?: InputMaybe<Scalars["Float"]["input"]>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars["Float"]["input"]>
  notContainsi?: InputMaybe<Scalars["Float"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>
  startsWith?: InputMaybe<Scalars["Float"]["input"]>
}

export type GenericMorph =
  | Brand
  | Category
  | ContentReleasesRelease
  | ContentReleasesReleaseAction
  | I18NLocale
  | Product
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser

export type I18NLocale = {
  __typename?: "I18NLocale"
  code?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type I18NLocaleEntity = {
  __typename?: "I18NLocaleEntity"
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type I18NLocaleEntityResponse = {
  __typename?: "I18NLocaleEntityResponse"
  data?: Maybe<I18NLocaleEntity>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection"
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  contains?: InputMaybe<Scalars["ID"]["input"]>
  containsi?: InputMaybe<Scalars["ID"]["input"]>
  endsWith?: InputMaybe<Scalars["ID"]["input"]>
  eq?: InputMaybe<Scalars["ID"]["input"]>
  eqi?: InputMaybe<Scalars["ID"]["input"]>
  gt?: InputMaybe<Scalars["ID"]["input"]>
  gte?: InputMaybe<Scalars["ID"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  lt?: InputMaybe<Scalars["ID"]["input"]>
  lte?: InputMaybe<Scalars["ID"]["input"]>
  ne?: InputMaybe<Scalars["ID"]["input"]>
  nei?: InputMaybe<Scalars["ID"]["input"]>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars["ID"]["input"]>
  notContainsi?: InputMaybe<Scalars["ID"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  startsWith?: InputMaybe<Scalars["ID"]["input"]>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  contains?: InputMaybe<Scalars["Int"]["input"]>
  containsi?: InputMaybe<Scalars["Int"]["input"]>
  endsWith?: InputMaybe<Scalars["Int"]["input"]>
  eq?: InputMaybe<Scalars["Int"]["input"]>
  eqi?: InputMaybe<Scalars["Int"]["input"]>
  gt?: InputMaybe<Scalars["Int"]["input"]>
  gte?: InputMaybe<Scalars["Int"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  lt?: InputMaybe<Scalars["Int"]["input"]>
  lte?: InputMaybe<Scalars["Int"]["input"]>
  ne?: InputMaybe<Scalars["Int"]["input"]>
  nei?: InputMaybe<Scalars["Int"]["input"]>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars["Int"]["input"]>
  notContainsi?: InputMaybe<Scalars["Int"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  startsWith?: InputMaybe<Scalars["Int"]["input"]>
}

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>
  contains?: InputMaybe<Scalars["JSON"]["input"]>
  containsi?: InputMaybe<Scalars["JSON"]["input"]>
  endsWith?: InputMaybe<Scalars["JSON"]["input"]>
  eq?: InputMaybe<Scalars["JSON"]["input"]>
  eqi?: InputMaybe<Scalars["JSON"]["input"]>
  gt?: InputMaybe<Scalars["JSON"]["input"]>
  gte?: InputMaybe<Scalars["JSON"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>
  lt?: InputMaybe<Scalars["JSON"]["input"]>
  lte?: InputMaybe<Scalars["JSON"]["input"]>
  ne?: InputMaybe<Scalars["JSON"]["input"]>
  nei?: InputMaybe<Scalars["JSON"]["input"]>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars["JSON"]["input"]>
  notContainsi?: InputMaybe<Scalars["JSON"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>
  startsWith?: InputMaybe<Scalars["JSON"]["input"]>
}

export type Mutation = {
  __typename?: "Mutation"
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>
  createBrand?: Maybe<BrandEntityResponse>
  createCategory?: Maybe<CategoryEntityResponse>
  createContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>
  createContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>
  createProduct?: Maybe<ProductEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  createUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteBrand?: Maybe<BrandEntityResponse>
  deleteCategory?: Maybe<CategoryEntityResponse>
  deleteContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>
  deleteContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>
  deleteProduct?: Maybe<ProductEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateBrand?: Maybe<BrandEntityResponse>
  updateCategory?: Maybe<CategoryEntityResponse>
  updateContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>
  updateContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updateProduct?: Maybe<ProductEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  passwordConfirmation: Scalars["String"]["input"]
}

export type MutationCreateBrandArgs = {
  data: BrandInput
}

export type MutationCreateCategoryArgs = {
  data: CategoryInput
}

export type MutationCreateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput
}

export type MutationCreateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput
}

export type MutationCreateProductArgs = {
  data: ProductInput
}

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationDeleteBrandArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteCategoryArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteContentReleasesReleaseArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteContentReleasesReleaseActionArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteProductArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteUploadFolderArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"]["input"]
}

export type MutationForgotPasswordArgs = {
  email: Scalars["String"]["input"]
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars["String"]["input"]>
  files: Array<InputMaybe<Scalars["Upload"]["input"]>>
  ref?: InputMaybe<Scalars["String"]["input"]>
  refId?: InputMaybe<Scalars["ID"]["input"]>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationRemoveFileArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationResetPasswordArgs = {
  code: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  passwordConfirmation: Scalars["String"]["input"]
}

export type MutationUpdateBrandArgs = {
  data: BrandInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateCategoryArgs = {
  data: CategoryInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"]["input"]
  info?: InputMaybe<FileInfoInput>
}

export type MutationUpdateProductArgs = {
  data: ProductInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars["ID"]["input"]
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars["String"]["input"]>
  file: Scalars["Upload"]["input"]
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars["String"]["input"]>
  refId?: InputMaybe<Scalars["ID"]["input"]>
}

export type Pagination = {
  __typename?: "Pagination"
  page: Scalars["Int"]["output"]
  pageCount: Scalars["Int"]["output"]
  pageSize: Scalars["Int"]["output"]
  total: Scalars["Int"]["output"]
}

export type PaginationArg = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  page?: InputMaybe<Scalars["Int"]["input"]>
  pageSize?: InputMaybe<Scalars["Int"]["input"]>
  start?: InputMaybe<Scalars["Int"]["input"]>
}

export type Product = {
  __typename?: "Product"
  brand?: Maybe<BrandEntityResponse>
  category?: Maybe<CategoryEntityResponse>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  images?: Maybe<UploadFileRelationResponseCollection>
  isAvailable: Scalars["Boolean"]["output"]
  name: Scalars["String"]["output"]
  price: Scalars["Int"]["output"]
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  slug: Scalars["String"]["output"]
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type ProductImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ProductEntity = {
  __typename?: "ProductEntity"
  attributes?: Maybe<Product>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type ProductEntityResponse = {
  __typename?: "ProductEntityResponse"
  data?: Maybe<ProductEntity>
}

export type ProductEntityResponseCollection = {
  __typename?: "ProductEntityResponseCollection"
  data: Array<ProductEntity>
  meta: ResponseCollectionMeta
}

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>
  brand?: InputMaybe<BrandFiltersInput>
  category?: InputMaybe<CategoryFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  isAvailable?: InputMaybe<BooleanFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ProductFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>
  price?: InputMaybe<IntFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ProductInput = {
  brand?: InputMaybe<Scalars["ID"]["input"]>
  category?: InputMaybe<Scalars["ID"]["input"]>
  images?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  isAvailable?: InputMaybe<Scalars["Boolean"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  price?: InputMaybe<Scalars["Int"]["input"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  slug?: InputMaybe<Scalars["String"]["input"]>
}

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type Query = {
  __typename?: "Query"
  brand?: Maybe<BrandEntityResponse>
  brands?: Maybe<BrandEntityResponseCollection>
  categories?: Maybe<CategoryEntityResponseCollection>
  category?: Maybe<CategoryEntityResponse>
  contentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>
  contentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>
  contentReleasesReleaseActions?: Maybe<ContentReleasesReleaseActionEntityResponseCollection>
  contentReleasesReleases?: Maybe<ContentReleasesReleaseEntityResponseCollection>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  product?: Maybe<ProductEntityResponse>
  products?: Maybe<ProductEntityResponseCollection>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  uploadFolder?: Maybe<UploadFolderEntityResponse>
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

export type QueryBrandArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryBrandsArgs = {
  filters?: InputMaybe<BrandFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryContentReleasesReleaseArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryContentReleasesReleaseActionArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryContentReleasesReleasesArgs = {
  filters?: InputMaybe<ContentReleasesReleaseFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryProductArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ResponseCollectionMeta = {
  __typename?: "ResponseCollectionMeta"
  pagination: Pagination
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  contains?: InputMaybe<Scalars["String"]["input"]>
  containsi?: InputMaybe<Scalars["String"]["input"]>
  endsWith?: InputMaybe<Scalars["String"]["input"]>
  eq?: InputMaybe<Scalars["String"]["input"]>
  eqi?: InputMaybe<Scalars["String"]["input"]>
  gt?: InputMaybe<Scalars["String"]["input"]>
  gte?: InputMaybe<Scalars["String"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  lt?: InputMaybe<Scalars["String"]["input"]>
  lte?: InputMaybe<Scalars["String"]["input"]>
  ne?: InputMaybe<Scalars["String"]["input"]>
  nei?: InputMaybe<Scalars["String"]["input"]>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars["String"]["input"]>
  notContainsi?: InputMaybe<Scalars["String"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  startsWith?: InputMaybe<Scalars["String"]["input"]>
}

export type UploadFile = {
  __typename?: "UploadFile"
  alternativeText?: Maybe<Scalars["String"]["output"]>
  caption?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  ext?: Maybe<Scalars["String"]["output"]>
  formats?: Maybe<Scalars["JSON"]["output"]>
  hash: Scalars["String"]["output"]
  height?: Maybe<Scalars["Int"]["output"]>
  mime: Scalars["String"]["output"]
  name: Scalars["String"]["output"]
  previewUrl?: Maybe<Scalars["String"]["output"]>
  provider: Scalars["String"]["output"]
  provider_metadata?: Maybe<Scalars["JSON"]["output"]>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars["Float"]["output"]
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  url: Scalars["String"]["output"]
  width?: Maybe<Scalars["Int"]["output"]>
}

export type UploadFileEntity = {
  __typename?: "UploadFileEntity"
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type UploadFileEntityResponse = {
  __typename?: "UploadFileEntityResponse"
  data?: Maybe<UploadFileEntity>
}

export type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection"
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  folder?: InputMaybe<UploadFolderFiltersInput>
  folderPath?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars["String"]["input"]>
  caption?: InputMaybe<Scalars["String"]["input"]>
  ext?: InputMaybe<Scalars["String"]["input"]>
  folder?: InputMaybe<Scalars["ID"]["input"]>
  folderPath?: InputMaybe<Scalars["String"]["input"]>
  formats?: InputMaybe<Scalars["JSON"]["input"]>
  hash?: InputMaybe<Scalars["String"]["input"]>
  height?: InputMaybe<Scalars["Int"]["input"]>
  mime?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  previewUrl?: InputMaybe<Scalars["String"]["input"]>
  provider?: InputMaybe<Scalars["String"]["input"]>
  provider_metadata?: InputMaybe<Scalars["JSON"]["input"]>
  size?: InputMaybe<Scalars["Float"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
  width?: InputMaybe<Scalars["Int"]["input"]>
}

export type UploadFileRelationResponseCollection = {
  __typename?: "UploadFileRelationResponseCollection"
  data: Array<UploadFileEntity>
}

export type UploadFolder = {
  __typename?: "UploadFolder"
  children?: Maybe<UploadFolderRelationResponseCollection>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  files?: Maybe<UploadFileRelationResponseCollection>
  name: Scalars["String"]["output"]
  parent?: Maybe<UploadFolderEntityResponse>
  path: Scalars["String"]["output"]
  pathId: Scalars["Int"]["output"]
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type UploadFolderEntity = {
  __typename?: "UploadFolderEntity"
  attributes?: Maybe<UploadFolder>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type UploadFolderEntityResponse = {
  __typename?: "UploadFolderEntityResponse"
  data?: Maybe<UploadFolderEntity>
}

export type UploadFolderEntityResponseCollection = {
  __typename?: "UploadFolderEntityResponseCollection"
  data: Array<UploadFolderEntity>
  meta: ResponseCollectionMeta
}

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  children?: InputMaybe<UploadFolderFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  files?: InputMaybe<UploadFileFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFolderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  parent?: InputMaybe<UploadFolderFiltersInput>
  path?: InputMaybe<StringFilterInput>
  pathId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  files?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  name?: InputMaybe<Scalars["String"]["input"]>
  parent?: InputMaybe<Scalars["ID"]["input"]>
  path?: InputMaybe<Scalars["String"]["input"]>
  pathId?: InputMaybe<Scalars["Int"]["input"]>
}

export type UploadFolderRelationResponseCollection = {
  __typename?: "UploadFolderRelationResponseCollection"
  data: Array<UploadFolderEntity>
}

export type UsersPermissionsCreateRolePayload = {
  __typename?: "UsersPermissionsCreateRolePayload"
  ok: Scalars["Boolean"]["output"]
}

export type UsersPermissionsDeleteRolePayload = {
  __typename?: "UsersPermissionsDeleteRolePayload"
  ok: Scalars["Boolean"]["output"]
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  provider?: Scalars["String"]["input"]
}

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload"
  jwt?: Maybe<Scalars["String"]["output"]>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe"
  blocked?: Maybe<Scalars["Boolean"]["output"]>
  confirmed?: Maybe<Scalars["Boolean"]["output"]>
  email?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars["String"]["output"]
}

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole"
  description?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  name: Scalars["String"]["output"]
  type?: Maybe<Scalars["String"]["output"]>
}

export type UsersPermissionsPasswordPayload = {
  __typename?: "UsersPermissionsPasswordPayload"
  ok: Scalars["Boolean"]["output"]
}

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission"
  action: Scalars["String"]["output"]
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type UsersPermissionsPermissionEntity = {
  __typename?: "UsersPermissionsPermissionEntity"
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection"
  data: Array<UsersPermissionsPermissionEntity>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  username: Scalars["String"]["input"]
}

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole"
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  description?: Maybe<Scalars["String"]["output"]>
  name: Scalars["String"]["output"]
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars["String"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type UsersPermissionsRoleEntity = {
  __typename?: "UsersPermissionsRoleEntity"
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type UsersPermissionsRoleEntityResponse = {
  __typename?: "UsersPermissionsRoleEntityResponse"
  data?: Maybe<UsersPermissionsRoleEntity>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection"
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  type?: InputMaybe<Scalars["String"]["input"]>
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload"
  ok: Scalars["Boolean"]["output"]
}

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser"
  blocked?: Maybe<Scalars["Boolean"]["output"]>
  confirmed?: Maybe<Scalars["Boolean"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  email: Scalars["String"]["output"]
  provider?: Maybe<Scalars["String"]["output"]>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  username: Scalars["String"]["output"]
}

export type UsersPermissionsUserEntity = {
  __typename?: "UsersPermissionsUserEntity"
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse"
  data?: Maybe<UsersPermissionsUserEntity>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection"
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]["input"]>
  confirmationToken?: InputMaybe<Scalars["String"]["input"]>
  confirmed?: InputMaybe<Scalars["Boolean"]["input"]>
  email?: InputMaybe<Scalars["String"]["input"]>
  password?: InputMaybe<Scalars["String"]["input"]>
  provider?: InputMaybe<Scalars["String"]["input"]>
  resetPasswordToken?: InputMaybe<Scalars["String"]["input"]>
  role?: InputMaybe<Scalars["ID"]["input"]>
  username?: InputMaybe<Scalars["String"]["input"]>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection"
  data: Array<UsersPermissionsUserEntity>
}
