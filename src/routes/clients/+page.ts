import { getClients } from "$lib/services/clients.service.js";
import { getNumberSearchParameterOrDefault } from "$lib/utilities/url/utils.js";

const CLIENTS_PER_PAGE_PARAMETER_NAME = "nbPerPage";
const NUMBER_OF_CLIENTS_PER_PAGE = 5;

const PAGE_NUMBER_PARAMETER_NAME = "page";
const DEFAULT_PAGE = 1;

export async function load({ url }) {
  const pageNumber = getNumberSearchParameterOrDefault(
    url,
    PAGE_NUMBER_PARAMETER_NAME,
    DEFAULT_PAGE
  );
  const numberOfClientsPerPage = getNumberSearchParameterOrDefault(
    url,
    CLIENTS_PER_PAGE_PARAMETER_NAME,
    NUMBER_OF_CLIENTS_PER_PAGE
  );

  const {
    data: clients,
    error,
    count,
  } = await getClients({
    numberOfItemsPerPage: numberOfClientsPerPage,
    pageNumber: pageNumber,
  });

  const maxPage = Math.ceil((count ?? 0) / numberOfClientsPerPage);

  return {
    clients,
    count,
    error,
    currentPage: pageNumber,
    maxPage,
  };
}
