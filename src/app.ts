import { Invoice } from "./classes/invoice";
import { ListTemplate } from "./classes/listTemplate";
import { Payment } from "./classes/payment";
import { Formatter } from "./interfaces/formatter";

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number]; // tuples
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: Formatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});

// Generic

const add = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

// ENUM

enum ResourceType { BOOK, AUTHER, FILM, PERSON }

interface Resource<T> {
    uid: number;
    rname: ResourceType;
    data: T;
}

const doc3: Resource<object> = {
    uid: 1,
    rname: ResourceType.AUTHER,
    data: { name: 'mayur' }
}

const doc4: Resource<string[]> = {
    uid: 1,
    rname: ResourceType.PERSON,
    data: ['a', 'b', 'c']
}

// Tuples

let arr = ['abc', 28, true];

let tup: [string, number, boolean] = ['mayur', 90, false];