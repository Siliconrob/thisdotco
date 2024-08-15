import {SearchType} from "./SearchType.tsx";
import {EndPoints} from "./EndPoints.tsx";
import {API} from "./API.tsx";

export class SearchSelection {
    ApiUrl: API = API.PYTHON;
    Type: SearchType = SearchType.All;
    EndPoint: EndPoints = EndPoints.Countries;
    FreeText: string = "";
}