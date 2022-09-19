// Все статьи ====================================================
export interface Attributes2 {
    name: string;
}

export interface Datum2 {
    id: string;
    attributes: Attributes2;
}

export interface Categories {
    data: Datum2[];
}

export interface Attributes {
    name: string;
    description: string;
    rating: number;
    categories: Categories;
}

export interface Datum {
    id: string;
    attributes: Attributes;
}

export interface Items {
    data: Datum[];
}

export interface Data {
    items: Items;
}

export interface RootObject1 {
    data: Data;
}


// Категории =======================================================
export interface Attributes {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface Dat {
    id: number;
    attributes: Attributes;
}

export interface RootObject {
    data: Dat[];
}


// Конкретная статья ===============================================
export interface Attributes2 {
    name: string;
}

export interface Datum1 {
    id: string;
    attributes: Attributes2;
}

export interface Categories {
    data: Datum1[];
}

export interface Attributes {
    description: string;
    name: string;
    rating: number;
    categories: Categories;
}

export interface Data2 {
    attributes: Attributes;
}

export interface Item {
    data: Data2;
}

export interface Data1 {
    item: Item;
}

export interface RootObject2 {
    data: Data1;
}