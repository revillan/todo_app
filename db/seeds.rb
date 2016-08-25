# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.create!({body:"doing things", title: "Todo", done: false})
Todo.create!({body:"doing more things", title: "Title2",done: false})
Todo.create!({body:"done things", title: "Title5", done: true})
