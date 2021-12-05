from os import name
import sqlite3
import constant

def add_to_list(Date,Shift,Hall,NoTable,Menu,Service,Name,Phone,Mail):
    try:
        conn = sqlite3.connect(constant.DB_PATH)
        # Once a connection has been established, we use the cursor
        # object to execute queries
        c = conn.cursor()
        # Keep the initial status as Not Started
        c.execute('insert into Booking(Date, Shift,Hall,NoTable,Menu,Service,Name,Phone,Mail) values(?,?,?,?,?,?,?,?,?)', 
        (Date,Shift,Hall,NoTable,Menu,Service,Name,Phone,Mail))
        # We commit to save the change
        conn.commit()
        return {"Date": Date, "Shift":Shift,"Hall":Hall,"NoTable":NoTable,"Menu":Menu,"Service":Service,"Name":Name,"Phone":Phone,"Mail":Mail}
    except Exception as e:
        print('Error: ', e)
        return None


def get_all_items():
    try:
        conn = sqlite3.connect(constant.DB_PATH)
        c = conn.cursor()
        c.execute('select * from Booking')
        rows = c.fetchall()
        return { "count": len(rows), "data": rows }
    except Exception as e:
        print('Error: ', e)
        return None

#thêm vào service
def add_to_contact(Name,Phone,Mail,Content):
    try:
        conn = sqlite3.connect(constant.DB_PATH)
        # Once a connection has been established, we use the cursor
        # object to execute queries
        c = conn.cursor()
        # Keep the initial status as Not Started
        c.execute('insert into Contact(Name,Phone,Mail,Content) values(?,?,?,?)', 
        (Name,Phone,Mail,Content))
        # We commit to save the change
        conn.commit()
        return {"Name":Name,"Phone":Phone,"Mail":Mail,"Content":Content}
    except Exception as e:
        print('Error: ', e)
        return None


def get_all_contact():
    try:
        conn = sqlite3.connect(constant.DB_PATH)
        c = conn.cursor()
        c.execute('select * from Contact')
        rows = c.fetchall()
        return { "count": len(rows), "data": rows }
    except Exception as e:
        print('Error: ', e)
        return None
