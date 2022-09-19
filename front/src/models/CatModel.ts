

export interface Attributes3 {
    name: string;
}

export interface Datum3 {
    id: number
    attributes: Attributes3;
}

export interface Categories2 {
    data: Datum3[];
}

export interface Attributes2 {
    name: string;
    rating: number;
    description: string;
    categories: Categories2;
}

export interface Datum2 {
    id: string;
    attributes: Attributes2;
}

export interface Items {
    data: Datum2[];
}

export interface Attributes {
    name: string;
    items: Items;
}

export interface Datum {
    id: string;
    attributes: Attributes;
}

export interface Categories {
    data: Datum;
}

export interface Data {
    category: Categories;
}

export interface RootObject {
    data: Data;
}
