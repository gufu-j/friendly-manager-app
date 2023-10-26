class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest 
      t.boolean :admin 
                                
      t.timestamps              
    end                         
  end
end



  #has_secure_password macro comes about intalling gem 'bcrup' to your Gemfile 
  #this way rails will use the bcrupt gem to sash and salt all passwords on the User model
  #it provides two instances methods on your model: password and password_comfimation
  #to make this method work, password_digest column handles that.