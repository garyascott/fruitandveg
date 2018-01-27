export interface Fruitlist {
    id: string;
    listOfFruit?: (ListOfFruitEntity)[] | null;
}
export interface ListOfFruitEntity {
    name: string;
    description: string;
    image: string;
    category: string;
    benefits?: (any)[] | any;
}