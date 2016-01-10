# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


1.times do
  Restaurant.create!(name: Faker::Company.name + ' Restaurant', address: Faker::Address.street_address, description: Faker::Company.bs)
end

def get_ancestry
  restaurant_id = rand(Restaurant.all.length) + 1

  current_restaurant_comments = Restaurant.find(restaurant_id).comments

  random_factor = rand(3)
  if random_factor == 0
    ancestry_id = nil
  else
    ancestry_id = current_restaurant_comments.sample ? current_restaurant_comments.sample.id : nil
  end

  [restaurant_id, ancestry_id]
end

20.times do
  restaurant_id, ancestry_id = get_ancestry
  Comment.create!(author: Faker::Name.name, body: Faker::Team.name + " - " + Faker::Lorem.sentence, rank: rand(30), restaurant_id: restaurant_id, ancestry: ancestry_id)
end
