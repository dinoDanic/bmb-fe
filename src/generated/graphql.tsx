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
};

export type Account = {
  __typename?: 'Account';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type CreateAccountInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type CreateSessionsInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Scalars['Boolean'];
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};

export type Query = {
  __typename?: 'Query';
  createSession: Scalars['String'];
  me: Account;
};


export type QueryCreateSessionArgs = {
  input: CreateSessionsInput;
};

export type MeEssentialQueryVariables = Exact<{ [key: string]: never; }>;


export type MeEssentialQuery = { __typename?: 'Query', me: { __typename?: 'Account', id: string, firstName?: string | null } };

export type CreateAccountMutationVariables = Exact<{
  input: CreateAccountInput;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: boolean };

export type CreateSessionQueryVariables = Exact<{
  input: CreateSessionsInput;
}>;


export type CreateSessionQuery = { __typename?: 'Query', createSession: string };


export const MeEssentialDocument = gql`
    query meEssential {
  me {
    id
    firstName
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
export const CreateAccountDocument = gql`
    mutation CreateAccount($input: CreateAccountInput!) {
  createAccount(input: $input)
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const CreateSessionDocument = gql`
    query CreateSession($input: CreateSessionsInput!) {
  createSession(input: $input)
}
    `;

/**
 * __useCreateSessionQuery__
 *
 * To run a query within a React component, call `useCreateSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCreateSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCreateSessionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSessionQuery(baseOptions: Apollo.QueryHookOptions<CreateSessionQuery, CreateSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CreateSessionQuery, CreateSessionQueryVariables>(CreateSessionDocument, options);
      }
export function useCreateSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CreateSessionQuery, CreateSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CreateSessionQuery, CreateSessionQueryVariables>(CreateSessionDocument, options);
        }
export type CreateSessionQueryHookResult = ReturnType<typeof useCreateSessionQuery>;
export type CreateSessionLazyQueryHookResult = ReturnType<typeof useCreateSessionLazyQuery>;
export type CreateSessionQueryResult = Apollo.QueryResult<CreateSessionQuery, CreateSessionQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    