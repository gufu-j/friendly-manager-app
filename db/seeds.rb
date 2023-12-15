# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all 
# Store.destroy_all
# Order.destroy_all
# Product.destroy_all


puts("data deleted")
puts("loading data...")


a = User.create!(username: "Diego", password: "123", password_confirmation: "123", admin: false, email: "guatemaladiegojose@gmail.com")
b = User.create!(username: "Ale", password: "123", password_confirmation: "123", admin: false, email: "jose1998.funes@gmail.com")
c = User.create!(username: "Irving", password: "123", password_confirmation: "123", admin: true, email: "djosegfunes1998@gmail.com")
d = User.create!(username: "Ben", password: "123", password_confirmation: "123", admin: false, email: "benjamin.aschenbrenner@flatironschool.com")

store_one = Store.create!(phone_number: "123-453-543", location: "Bay Shore, Wall Street 2, NY 11606", user_id: a.id)
store_two = Store.create!(phone_number: "456-654-3424", location: "Westberry, fifth av 89, NY 11514", user_id: b.id)
# store_three = Store.create!(phone_number: "453-654-343", location: "1 ave Sur, San Francisco Gotera", user_id: c.id)
store_four = Store.create!(phone_number: "765-435-675", location: "Westbabylon, Ave 5 189, NY 11704", user_id: d.id)

# product_cero = Product.create!(name: "Select a Product")
product_one = Product.create!(name: "wrench")
product_one_second = Product.create!(name: "hoose")
product_one_third = Product.create!(name: "cup")
product_two = Product.create!(name: "swivel")
product_three = Product.create!(name: "door")
product_four = Product.create!(name: "screws")                                                                                  
product_five = Product.create!(name: "heavy duty soap")
product_six = Product.create!(name: "vuna seal")



order_one = Order.create!(quantity: 20, note: "n/a", store_id: store_one.id, product_id: product_one.id )
order_one_second = Order.create!(quantity: 10, note: "4 inch, aircarft nozzle assembled", store_id: store_one.id, product_id: product_one_second.id )
order_one_third = Order.create!(quantity: 55, note: "blue moon", store_id: store_one.id, product_id: product_one_third.id )
order_two = Order.create!(quantity: 10, note: "n/a", store_id: store_two.id, product_id: product_two.id )
# order_three = Order.create!(quantity: 11, note: "n/a", store_id: store_three.id, product_id: product_three.id )
order_four = Order.create!(quantity: 16, note: "n/a",  store_id: store_four.id, product_id: product_four.id )

puts("done seeding")

