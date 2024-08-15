import {SearchSelection} from "./SearchSelection.tsx";
import {SearchType} from "./SearchType.tsx";

export function getSearchUrl(selectedSearchParams: SearchSelection): string {
    let searchUrl = selectedSearchParams.ApiUrl as unknown as string;
    const routePath = selectedSearchParams.EndPoint as unknown as string;
    searchUrl = `${searchUrl}/${routePath}`;
    if (selectedSearchParams.Type === SearchType.Id) {
        searchUrl = `${searchUrl}/${selectedSearchParams.FreeText}`;
    }
    const searchBy = {
        find: selectedSearchParams.FreeText || ""
    }
    searchUrl = `${searchUrl.toLowerCase()}?${new URLSearchParams(searchBy)}`;
    return searchUrl;

}