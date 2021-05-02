import { useState, useEffect } from 'react';
import { GET_SAVED_FORM_QUERY } from '@/Gql/queries';
import { useQuery } from '@apollo/client';

/**
 * Saved Form Data is juust local Storage for now.
 * But it will work like this. For each user they can have an array of forms saved.
 * the id will be the form name + user id and will be retrieved as such
 */
const useSavedFormData = ({ name, path, me, canSave }) => {
  const { data, error, loading } = useQuery(GET_SAVED_FORM_QUERY, {
    variables: {
      where: {
        identifier: `${me?.id}-${name}-${path}`,
      },
    },
    fetchPolicy: 'network-only',
  });
  if (!canSave)
    return {
      loading: false,
      error: null,
      data: null,
    };
  return {
    data,
    error,
    loading,
  };
};

export default useSavedFormData;
