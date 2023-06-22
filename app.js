"use strict";
// !дз 
// 2 Завдання: Клас "Телефонний довідник" з методами пошуку
// Створіть клас "Телефонний довідник", який зберігає контакти користувачів. Кожен контакт має поля "ім'я" і "номер телефону". Клас повинен мати наступні методи:
// 1 Метод "додатиКонтакт", який додає новий контакт до довідника.
// 2 Метод "знайтиКонтактЗаИм'ям", який приймає ім'я користувача і повертає номер телефону знайденого контакту.
// 3 Метод "знайтиКонтактЗаНомером", який приймає номер телефону і повертає ім'я користувача знайденого контакту.
// 4 Метод "видалитиКонтакт", який видаляє контакт з довідника за ім'ям користувача.
// Ваше завдання полягає в створенні класу "Телефонний довідник" і реалізації всіх зазначених методів. 
class Phonebook {
    constructor() {
        this.contacts = [];
    }
    seeCon() {
        console.log(this.contacts);
    }
    addContact(name, phoneNumber) {
        const contact = { name, phoneNumber };
        this.contacts.push(contact);
    }
    searchNumber(name) {
        const contact = this.contacts.find((item) => item.name === name);
        return contact ? contact.phoneNumber : undefined;
    }
    searchName(phoneNumber) {
        const contact = this.contacts.find((item) => item.phoneNumber === phoneNumber);
        return contact ? contact.name : undefined;
    }
    deleteContact(name) {
        const index = this.contacts.findIndex((item) => item.name === name);
        if (index !== -1) {
            this.contacts.splice(index, 1);
        }
    }
}
const phonebook = new Phonebook();
phonebook.addContact('Mama', '11111');
phonebook.addContact('Tato', '22222');
phonebook.seeCon();
console.log(phonebook.searchNumber('Mama'));
console.log(phonebook.searchName('22222'));
phonebook.deleteContact('Mama');
const deletedPhoneNumber = phonebook.searchNumber('Mama');
phonebook.seeCon();
