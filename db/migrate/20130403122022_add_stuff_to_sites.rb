class AddStuffToSites < ActiveRecord::Migration
  def change
  	add_column :sites, :name, :string, default: ""
  	add_column :sites, :url, :string, default: ""
  	add_column :sites, :active, :boolean, default: false
  end
end
