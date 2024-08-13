import {SearchSelection} from "./SearchSelection.tsx";
import {SearchType} from "./SearchType.tsx";

export function getSearchUrl(selectedSearchParams: SearchSelection): string {
    let searchUrl = import.meta.env.VITE_APP_API_URL;
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