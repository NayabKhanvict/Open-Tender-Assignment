export interface ICategoryState {
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
    detail?: string;
    checklist?: string[];
}