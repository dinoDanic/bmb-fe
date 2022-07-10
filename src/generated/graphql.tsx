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
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Fetch current user */
  me: User;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type MeEssentialQueryVariables = Exact<{ [key: string]: never; }>;


export type MeEssentialQuery = { __typename?: 'Query', me: { __typename?: 'User', id?: string | null, email?: string | null } };


export const MeEssentialDocument = gql`
    query meEssential {
  me {
    id
    email
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

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    