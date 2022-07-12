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

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new organization */
  organizationCreate?: Maybe<Organization>;
};


export type MutationOrganizationCreateArgs = {
  input: OrganizationCreateInput;
};

export type Organization = {
  __typename?: 'Organization';
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
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
  /** Fetch current user */
  me: User;
  /** Get active organizations */
  organizationsGetActive: Array<Organization>;
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
    