class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text :body, null: false
      t.text :title, null: false
      t.boolean :done, null: false, default: false
      t.timestamps null: false
    end
  end
end
