class AddDeletedToTodo < ActiveRecord::Migration
  def change
    add_column :todos, :deleted, :boolean,default: false
  end
end
