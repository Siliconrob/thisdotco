import {SearchType} from "./SearchType.tsx";
import {EndPoints} from "./EndPoints.tsx";

export class SearchSelection {
    Type: SearchType = SearchType.All;
    EndPoint: EndPoints = EndPoints.Countries;
    FreeText: string = "";
}