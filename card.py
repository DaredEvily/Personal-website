import json
import os

file_path = "cards.json"

def load_data():
    if os.path.exists(file_path) and os.path.getsize(file_path) > 0:
        with open(file_path, 'r') as json_file:
            return json.load(json_file)
    return []

def save_data(card_data):
    with open(file_path, 'w') as json_file:
        json.dump(card_data, json_file, indent=4)

def insert():
    try:
        num = int(input('How Many: ').strip())
        card_data = load_data()

        for i in range(num):
            title = input("Title: ").strip().capitalize()
            description = input("Description: ").strip().capitalize()
            link = input("Src: ").strip()

            card = {
                'Title': title,
                'Des': description,
                'Link': link
            }
            print('='*20)

            card_data.append(card)

        save_data(card_data)
    except ValueError:
        print('Please Write a Valid Number')

def delete():
    try:
        card_data = load_data()

        print("Available cards:")
        for i, card in enumerate(card_data):
            print(f"{i+1}. {card['Title']}")

        index_to_delete = int(input("Enter the index to delete: ").strip()) - 1

        if 0 <= index_to_delete < len(card_data):
            deleted_card = card_data.pop(index_to_delete)
            save_data(card_data)
            print(f"Deleted card: {deleted_card}")
        else:
            print("Invalid index.")
    except ValueError:
        print('Please enter a valid index.')

def main():
    print("Json Editor\n============\n\t1- Insert Data\n\t2- Delete Data\n")
    choose = int(input("> ").strip())

    if choose == 1:
        insert()
    elif choose == 2:
        delete()
    else:
        print("Invalid choice. Please choose 1 or 2.")

if __name__ == "__main__":
    main()
