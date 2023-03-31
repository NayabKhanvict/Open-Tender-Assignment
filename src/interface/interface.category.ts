export interface ICategoryState {
    // ref: any;
    categorytitle: string;
    section: ICategorySection[];
}
export interface ICategorySection {
    sectiontitle: string;
    sectiondetail: string;
    item: ICardItem[];
}
export interface ICardItem {
    title: string;
    detail: string;
}