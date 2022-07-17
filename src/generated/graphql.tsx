import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ISO8601DateTime: any;
};

export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  offices?: Maybe<Array<Office>>;
  oib?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

/** Autogenerated input type of CustomerCreate */
export type CustomerCreateInput = {
  address: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  oib: Scalars['String'];
  organizationId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new customer */
  customerCreate?: Maybe<Customer>;
  /** Creates a new office */
  officeCreate?: Maybe<Office>;
  /** Creates a new organization */
  organizationCreate?: Maybe<Organization>;
};


export type MutationCustomerCreateArgs = {
  input: CustomerCreateInput;
};


export type MutationOfficeCreateArgs = {
  input: OfficeCreateInput;
};


export type MutationOrganizationCreateArgs = {
  input: OrganizationCreateInput;
};

export type Office = {
  __typename?: 'Office';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

/** Autogenerated input type of OfficeCreate */
export type OfficeCreateInput = {
  address: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  customerId: Scalars['String'];
  name: Scalars['String'];
};

export type Organization = {
  __typename?: 'Organization';
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  customers?: Maybe<Array<Customer>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  oib?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

/** Autogenerated input type of OrganizationCreate */
export type OrganizationCreateInput = {
  address: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  oib: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Get customer by id */
  getCustomerById: Customer;
  /** Get organizations customers */
  getCustomersByOrganizationId: Array<Customer>;
  /** Fetch current user */
  me: User;
  /** Get active organizations */
  organizationsGetActive: Array<Organization>;
};


export type QueryGetCustomerByIdArgs = {
  customerId: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryGetCustomersByOrganizationIdArgs = {
  organizationId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  organizations?: Maybe<Array<Organization>>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type MeEssentialQueryVariables = Exact<{ [key: string]: never; }>;


export type MeEssentialQuery = { __typename?: 'Query', me: { __typename?: 'User', id?: string | null, email?: string | null, organizations?: Array<{ __typename?: 'Organization', id?: string | null, name?: string | null, oib?: string | null, address?: string | null }> | null } };

export type GetCustomersByOrganizationIdQueryVariables = Exact<{
  organizationId: Scalars['String'];
}>;


export type GetCustomersByOrganizationIdQuery = { __typename?: 'Query', getCustomersByOrganizationId: Array<{ __typename?: 'Customer', id?: string | null, name?: string | null, address?: string | null, oib?: string | null, offices?: Array<{ __typename?: 'Office', address?: string | null, id?: string | null, name?: string | null }> | null }> };

export type CustomerCreateMutationVariables = Exact<{
  input: CustomerCreateInput;
}>;


export type CustomerCreateMutation = { __typename?: 'Mutation', customerCreate?: { __typename?: 'Customer', id?: string | null, name?: string | null, address?: string | null, oib?: string | null, offices?: Array<{ __typename?: 'Office', address?: string | null, id?: string | null, name?: string | null }> | null } | null };

export type GetCustomerByIdQueryVariables = Exact<{
  organizationId: Scalars['String'];
  customerId: Scalars['String'];
}>;


export type GetCustomerByIdQuery = { __typename?: 'Query', getCustomerById: { __typename?: 'Customer', id?: string | null, name?: string | null, address?: string | null, oib?: string | null, offices?: Array<{ __typename?: 'Office', address?: string | null, id?: string | null, name?: string | null }> | null } };

export type OfficeCreateMutationVariables = Exact<{
  input: OfficeCreateInput;
}>;


export type OfficeCreateMutation = { __typename?: 'Mutation', officeCreate?: { __typename?: 'Office', address?: string | null, id?: string | null, name?: string | null } | null };

export type OrganizationCreateMutationVariables = Exact<{
  input: OrganizationCreateInput;
}>;


export type OrganizationCreateMutation = { __typename?: 'Mutation', organizationCreate?: { __typename?: 'Organization', id?: string | null, address?: string | null, name?: string | null, oib?: string | null } | null };


export const MeEssentialDocument = gql`
    query meEssential {
  me {
    id
    email
    organizations {
      id
      name
      oib
      address
    }
  }
}
    `;

/**
 * __useMeEssentialQuery__
 *
 * To run a query within a React component, call `useMeEssentialQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeEssentialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeEssentialQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeEssentialQuery(baseOptions?: Apollo.QueryHookOptions<MeEssentialQuery, MeEssentialQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeEssentialQuery, MeEssentialQueryVariables>(MeEssentialDocument, options);
      }
export function useMeEssentialLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeEssentialQuery, MeEssentialQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeEssentialQuery, MeEssentialQueryVariables>(MeEssentialDocument, options);
        }
export type MeEssentialQueryHookResult = ReturnType<typeof useMeEssentialQuery>;
export type MeEssentialLazyQueryHookResult = ReturnType<typeof useMeEssentialLazyQuery>;
export type MeEssentialQueryResult = Apollo.QueryResult<MeEssentialQuery, MeEssentialQueryVariables>;
export const GetCustomersByOrganizationIdDocument = gql`
    query GetCustomersByOrganizationId($organizationId: String!) {
  getCustomersByOrganizationId(organizationId: $organizationId) {
    id
    name
    address
    oib
    offices {
      address
      id
      name
    }
  }
}
    `;

/**
 * __useGetCustomersByOrganizationIdQuery__
 *
 * To run a query within a React component, call `useGetCustomersByOrganizationIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersByOrganizationIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersByOrganizationIdQuery({
 *   variables: {
 *      organizationId: // value for 'organizationId'
 *   },
 * });
 */
export function useGetCustomersByOrganizationIdQuery(baseOptions: Apollo.QueryHookOptions<GetCustomersByOrganizationIdQuery, GetCustomersByOrganizationIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomersByOrganizationIdQuery, GetCustomersByOrganizationIdQueryVariables>(GetCustomersByOrganizationIdDocument, options);
      }
export function useGetCustomersByOrganizationIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomersByOrganizationIdQuery, GetCustomersByOrganizationIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomersByOrganizationIdQuery, GetCustomersByOrganizationIdQueryVariables>(GetCustomersByOrganizationIdDocument, options);
        }
export type GetCustomersByOrganizationIdQueryHookResult = ReturnType<typeof useGetCustomersByOrganizationIdQuery>;
export type GetCustomersByOrganizationIdLazyQueryHookResult = ReturnType<typeof useGetCustomersByOrganizationIdLazyQuery>;
export type GetCustomersByOrganizationIdQueryResult = Apollo.QueryResult<GetCustomersByOrganizationIdQuery, GetCustomersByOrganizationIdQueryVariables>;
export const CustomerCreateDocument = gql`
    mutation CustomerCreate($input: CustomerCreateInput!) {
  customerCreate(input: $input) {
    id
    name
    address
    oib
    offices {
      address
      id
      name
    }
  }
}
    `;
export type CustomerCreateMutationFn = Apollo.MutationFunction<CustomerCreateMutation, CustomerCreateMutationVariables>;

/**
 * __useCustomerCreateMutation__
 *
 * To run a mutation, you first call `useCustomerCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerCreateMutation, { data, loading, error }] = useCustomerCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCustomerCreateMutation(baseOptions?: Apollo.MutationHookOptions<CustomerCreateMutation, CustomerCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CustomerCreateMutation, CustomerCreateMutationVariables>(CustomerCreateDocument, options);
      }
export type CustomerCreateMutationHookResult = ReturnType<typeof useCustomerCreateMutation>;
export type CustomerCreateMutationResult = Apollo.MutationResult<CustomerCreateMutation>;
export type CustomerCreateMutationOptions = Apollo.BaseMutationOptions<CustomerCreateMutation, CustomerCreateMutationVariables>;
export const GetCustomerByIdDocument = gql`
    query GetCustomerById($organizationId: String!, $customerId: String!) {
  getCustomerById(customerId: $customerId, organizationId: $organizationId) {
    id
    name
    address
    oib
    offices {
      address
      id
      name
    }
  }
}
    `;

/**
 * __useGetCustomerByIdQuery__
 *
 * To run a query within a React component, call `useGetCustomerByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerByIdQuery({
 *   variables: {
 *      organizationId: // value for 'organizationId'
 *      customerId: // value for 'customerId'
 *   },
 * });
 */
export function useGetCustomerByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>(GetCustomerByIdDocument, options);
      }
export function useGetCustomerByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>(GetCustomerByIdDocument, options);
        }
export type GetCustomerByIdQueryHookResult = ReturnType<typeof useGetCustomerByIdQuery>;
export type GetCustomerByIdLazyQueryHookResult = ReturnType<typeof useGetCustomerByIdLazyQuery>;
export type GetCustomerByIdQueryResult = Apollo.QueryResult<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>;
export const OfficeCreateDocument = gql`
    mutation officeCreate($input: OfficeCreateInput!) {
  officeCreate(input: $input) {
    address
    id
    name
  }
}
    `;
export type OfficeCreateMutationFn = Apollo.MutationFunction<OfficeCreateMutation, OfficeCreateMutationVariables>;

/**
 * __useOfficeCreateMutation__
 *
 * To run a mutation, you first call `useOfficeCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOfficeCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [officeCreateMutation, { data, loading, error }] = useOfficeCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOfficeCreateMutation(baseOptions?: Apollo.MutationHookOptions<OfficeCreateMutation, OfficeCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OfficeCreateMutation, OfficeCreateMutationVariables>(OfficeCreateDocument, options);
      }
export type OfficeCreateMutationHookResult = ReturnType<typeof useOfficeCreateMutation>;
export type OfficeCreateMutationResult = Apollo.MutationResult<OfficeCreateMutation>;
export type OfficeCreateMutationOptions = Apollo.BaseMutationOptions<OfficeCreateMutation, OfficeCreateMutationVariables>;
export const OrganizationCreateDocument = gql`
    mutation OrganizationCreate($input: OrganizationCreateInput!) {
  organizationCreate(input: $input) {
    id
    address
    name
    oib
  }
}
    `;
export type OrganizationCreateMutationFn = Apollo.MutationFunction<OrganizationCreateMutation, OrganizationCreateMutationVariables>;

/**
 * __useOrganizationCreateMutation__
 *
 * To run a mutation, you first call `useOrganizationCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrganizationCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [organizationCreateMutation, { data, loading, error }] = useOrganizationCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOrganizationCreateMutation(baseOptions?: Apollo.MutationHookOptions<OrganizationCreateMutation, OrganizationCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OrganizationCreateMutation, OrganizationCreateMutationVariables>(OrganizationCreateDocument, options);
      }
export type OrganizationCreateMutationHookResult = ReturnType<typeof useOrganizationCreateMutation>;
export type OrganizationCreateMutationResult = Apollo.MutationResult<OrganizationCreateMutation>;
export type OrganizationCreateMutationOptions = Apollo.BaseMutationOptions<OrganizationCreateMutation, OrganizationCreateMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    