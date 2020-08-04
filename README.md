# JerryLotte
#Jerry en Lotte's repository
class Product:
    
    def __init__(self, name, quantity, price):
        self.name = name
        self.quantity = quantity
        self.price = price

class Inventory:
    def __init__(self, products):
        self.products = products
        
    def add_products(self):
        product_name = input("Enter product name ")
        product_price = int(input("Enter product price "))
        product_quantity = int(input("Enter product quantity "))
        product = Product(product_name, product_price, product_quantity)
        self.products.append(product)
                           
        print("Added products")
        print(f"total value: {self.value}") 
    
    def show_products(self):
        for prod in self.products
        print(f"name: {prod.name}, ")
        
    @property
    def value(self):
        return sum(product.price for product in self.products)
        range_value = int(input("How many products do you want to store?: ")) + 1

products_in_inventory = []

for product in range(1, range_value):
    product = Product(input("Enter product name: "), int(input("Enter price: ")),  int(input("Enter quantity: ")))
    products_in_inventory.append(product)

inventory = Inventory(products_in_inventory)
for product in inventory.products:
    print("Products in inventory: " + product.name)
print("Total value: " + str(inventory.value))
