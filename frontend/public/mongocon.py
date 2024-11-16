from pymongo import MongoClient

class database:
    def __init__(self):
        self.connection = MongoClient('localhost',27017)
        self.db = self.connection['mockcon']
        self.collection = self.db['student']

    def insert(self):
        roll = int(input("Enter rollno: "))
        name = input("Enter S_name: ")
        semester = int(input("Enter Semester: "))
        year = input("Enter Year: ")
        back = int(input("Enter no of backlogs: "))
        self.collection.insert_one({'Roll_no':roll,"S_name":name,"Semester":semester,"Year":year,"No_of_backlogs":back})

    def search(self):
        roll = int(input("Enter rollno: "))
        record = self.collection.find_one({"Roll_no":roll})
        if record:
            print("Roll_no\tS_name\tSemester\tYear\tNo_of_backlogs")
            print(f"{record['Roll_no']}\t{record['S_name']}\t{record['Semester']}\t{record['Year']}\t{record['No_of_backlogs']}")
        else:
            print("no records found")

    def delete(self):
        res = self.collection.delete_many({"No_of_backlogs":{"$gt":4}})
        if res.deleted_count > 0:
            print("deleted successfully")
        else:
            print("no records found")

    def deleteData(self):
        roll_no = int(input("Enter roll no: "))
        self.delete_one({'Roll_no':roll_no})

    def displayall(self):
        data = self.collection.find()
        for d in data:
            print(d)
    
    def displayDataById(self):
        data = self.collection.find({'Roll_no':roll_no})
        list = []
        for d in data:
            print(d)
            list.append(d)
        return list

        

def main():
    db = database()
    while True:
        print("Main Menu")
        print("1.insert data")
        print("2.delete students wherer back > 4")
        print("3.search rollno")
        print("4.display all")
        print("5.exit")
        inp = int(input("Enter choice: "))

        if inp == 1:
            db.insert()
        elif inp == 2:
            db.delete()
        elif inp == 3:
            db.search()
        elif inp == 4:
            db.displayall()
        elif inp == 5:
            break;
        else:
            print("invalid input")

        print()


if __name__ == "__main__":
    main()
