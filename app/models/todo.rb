class Todo < ActiveRecord::Base
  attr_accessible :completed, :title,:deleted
  
  scope :completed, where(completed: true,deleted: false)
  scope :incomplete, where(completed: false,deleted: false)
  scope :archived, where(deleted: true)

  belongs_to :user

  def archive
    update_attributes(deleted: true)
  end


end
