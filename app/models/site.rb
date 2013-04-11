class Site < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :name, :url, :active

end
