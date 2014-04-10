class Todo < ActiveRecord::Base
  attr_accessible :completed, :title
  
  scope :completed, where(completed: true)
  scope :incomplete, where(completed: false)


end
